// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./interface/IConstant.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

contract ERC7621 is ERC20 {
    address public owner;
    IUniswapV2Router02 public uniswapRouter =
        IUniswapV2Router02(0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008);
    address public constant WETH = 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9;
    IConstant.BasketInfo[] public listedTokens;

    uint256 public votes;

    constructor(
        string memory _name,
        string memory _symbol,
        IConstant.BasketInfo[] memory tokens
    ) ERC20(_name, _symbol) {
        owner = msg.sender;
        _initializeTokens(tokens);
    }

    function _initializeTokens(IConstant.BasketInfo[] memory tokens) internal {
        require(tokens.length > 0, "ERC7621: No tokens provided");
        uint256 totalPercent = 0;
        for (uint256 i = 0; i < tokens.length; i++) {
            require(
                address(tokens[i].addr) != address(0),
                "ERC7621: Invalid token address"
            );
            require(
                tokens[i].percent > 0,
                "ERC7621: Token percent must be greater than 0"
            );
            totalPercent += tokens[i].percent;
            listedTokens.push(tokens[i]);
        }
        require(totalPercent == 100, "ERC7621: Total percentage must be 100");
    }

    function depositBasketToken(address _to) public payable returns (bool) {
        require(msg.value >= 0.01 ether, "ERC7621: Must deposit 0.01 ETH");
        uint256 totalFunds = calculateTotalFunds();
        for (uint256 i = 0; i < listedTokens.length; i++) {
            IConstant.BasketInfo memory token = listedTokens[i];
            uint256 amountToSwap = (msg.value * token.percent) / 100;
            address[] memory path = new address[](2);
            path[0] = WETH;
            path[1] = token.addr;
            uniswapRouter.swapExactETHForTokensSupportingFeeOnTransferTokens{
                value: amountToSwap
            }(0, path, address(this), 0);
        }
        uint256 userDepositFunds = calculateTotalFunds() - totalFunds;
        uint8 percent = 0;
        if (isZero(totalSupply())) {
            percent = 100;
        } else {
            percent = uint8((userDepositFunds / totalSupply()) * 100);
        }
        uint256 liquidity = (userDepositFunds / 100) * percent;
        _mint(_to, liquidity);
        return true;
    }

    function withdrawBasketToken(
        address _to,
        uint256 _lpValue
    ) public returns (bool) {
        require(balanceOf(_to) >= _lpValue, "ERC7621: Insufficient LP Tokens");
        uint256 userSharePercent = (_lpValue / totalSupply()) * 100;

        for (uint256 i = 0; i < listedTokens.length; i++) {
            IConstant.BasketInfo memory token = listedTokens[i];
            uint256 tokenBalance = IERC20(token.addr).balanceOf(address(this));
            uint256 amountToTransfer = (tokenBalance * userSharePercent) / 100;

            address[] memory path = new address[](2);
            path[0] = WETH;
            path[1] = token.addr;

            uniswapRouter.swapExactTokensForETHSupportingFeeOnTransferTokens(
                amountToTransfer,
                0,
                path,
                _to,
                0
            );
        }

        _burn(_to, _lpValue);
        return true;
    }

    function vote(bool isUpVote) public {
        isUpVote ? votes += 1 : votes -= 1;
    }

    function calculateTotalFunds() internal view returns (uint256 totalFunds) {
        for (uint256 i = 0; i < listedTokens.length; i++) {
            totalFunds += IERC20(listedTokens[i].addr).balanceOf(address(this));
        }
    }

    function isZero(uint256 value) internal pure returns (bool) {
        if (value == 0) {
            return true;
        } else {
            return false;
        }
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
