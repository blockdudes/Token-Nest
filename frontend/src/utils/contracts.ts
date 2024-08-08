import { getContract, prepareContractCall } from "thirdweb";
import { BASKET_FACTORY_CONTRACT_ADDRESS } from "./constant";
import { basketFactoryContractABI } from "../abis/basketFactoryContractABI";
import { sepolia } from "thirdweb/chains";
import { client } from "../thirdWebInfo";
import { BasketInfo } from "../types/types";
import { ethers } from "ethers";

export const basketFactoryContract = getContract({
    address: BASKET_FACTORY_CONTRACT_ADDRESS,
    abi: basketFactoryContractABI.abi as any,
    client: client,
    chain: sepolia
});

export const prepareTxForCreatingBasket = (name: string, symbol: string, tokens: BasketInfo[], isCreateBasketToken: boolean) => {
    return prepareContractCall({
        contract: basketFactoryContract,
        method: "function createBasket(string memory name, string memory symbol, IConstant.BasketInfo[] memory tokens, bool isCreateBasketToken) public payable",
        params: [name, symbol, tokens, isCreateBasketToken],
        value: isCreateBasketToken ? BigInt(ethers.utils.parseEther("0.01").toString()) : BigInt(ethers.utils.parseEther("0").toString()),
        gas: BigInt(10000000)
    });
}