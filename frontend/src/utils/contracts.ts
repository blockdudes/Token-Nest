import { getContract, prepareContractCall } from "thirdweb";
import { BASKET_FACTORY_CONTRACT_ADDRESS } from "./constant";
import { sepolia } from "thirdweb/chains";
import { client } from "../thirdWebInfo";
import { BasketInfo } from "../types/types";
import { ethers } from "ethers";

import { basketTokenContractABI, userBasketsContractABI, basketFactoryContractABI } from "./constant";

// export const basketFactoryContract = getContract({
//     address: BASKET_FACTORY_CONTRACT_ADDRESS,
//     abi: basketFactoryContractABI.abi as any,
//     client: client,
//     chain: sepolia
// });

export const getBasketContract = (address: string, contract: string) => {
    const abi: any = contract === "FACTORY" ? basketFactoryContractABI.abi : contract === "BASKET" ? basketTokenContractABI.abi : userBasketsContractABI.abi;
    return getContract({
        address: address,
        abi: abi,
        client: client,
        chain: sepolia
    });
}

export const prepareTxForCreatingBasket = (name: string, symbol: string, tokens: BasketInfo[], isCreateBasketToken: boolean) => {
    return prepareContractCall({
        contract: getBasketContract(BASKET_FACTORY_CONTRACT_ADDRESS, "FACTORY"),
        method: "function createBasket(string memory name, string memory symbol, IConstant.BasketInfo[] memory tokens, bool isCreateBasketToken) public payable",
        params: [name, symbol, tokens, isCreateBasketToken],
        value: isCreateBasketToken ? BigInt(ethers.utils.parseEther("0.01").toString()) : BigInt(ethers.utils.parseEther("0").toString()),
        gas: BigInt(10000000)
    });
}