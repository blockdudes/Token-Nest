// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./BasketToken.sol";
import "./interface/IBasketToken.sol";
import "./interface/IConstant.sol";

contract BasketFactory {
    address[] public allBasket;

    event CreateBasket(
        address indexed creator,
        address indexed basketAddress,
        string name,
        string symbol,
        IConstant.TokenInfo[] tokens
    );

    function createBasket(
        string memory name,
        string memory symbol,
        IConstant.TokenInfo[] memory tokens
    ) public payable {
        require(msg.value >= 0.01 ether, "minimum ETH!");
        address basket;
        bytes memory bytecode = getBytecode(name, symbol, tokens);
        bytes32 salt = createHash(msg.sender, name, symbol, tokens);
        assembly {
            basket := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
        }
        bool success = IBasketToken(basket).depositBasketToken{
            value: msg.value
        }(msg.sender);
        require(success, "Fund tokens failed");
        allBasket.push(basket);
        emit CreateBasket(msg.sender, basket, name, symbol, tokens);
    }

    function createHash(
        address owner,
        string memory name,
        string memory symbol,
        IConstant.TokenInfo[] memory tokens
    ) internal pure returns (bytes32) {
        bytes memory data = abi.encodePacked(name, symbol, owner);
        for (uint256 i = 0; i < tokens.length; i++) {
            data = abi.encodePacked(
                data,
                tokens[i].addr,
                tokens[i].name,
                tokens[i].percent
            );
        }
        return keccak256(data);
    }

    function getBytecode(
        string memory name,
        string memory symbol,
        IConstant.TokenInfo[] memory tokens
    ) internal pure returns (bytes memory) {
        bytes memory bytecode = type(ERC7621).creationCode;
        return abi.encodePacked(bytecode, abi.encode(name, symbol, tokens));
    }
}
