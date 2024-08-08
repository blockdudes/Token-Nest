import { prepareContractCall, getContract, sendAndConfirmTransaction } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { client } from "../../thirdWebInfo";
import { sepolia } from "thirdweb/chains";
import { basketFactoryContractABI } from "../../abis/basketFactoryContractABI";
import { BASKET_FACTORY_CONTRACT_ADDRESS } from "../../utils/constant";
import { ethers } from "ethers";



const basketFactoryContract = getContract({
    address: BASKET_FACTORY_CONTRACT_ADDRESS,
    abi: basketFactoryContractABI.abi as any,
    client: client,
    chain: sepolia
})


const CreateBasket = () => {

    const account = useActiveAccount();

    const basketCreate = async () => {
        try {
            const transaction = prepareContractCall({
                contract: basketFactoryContract,
                method: "function createBasket(string memory name, string memory symbol, IConstant.TokenInfo[] memory tokens) public payable",
                params: ["crypto", "crytp", []],
                value: BigInt(ethers.utils.parseEther("0.01").toString()),
                gas: BigInt(10000000)
            });

            const result = account && (await sendAndConfirmTransaction({
                transaction: transaction,
                account: account
            }));

            if (result) {
                if (result.status === "success") {
                    console.log("Public profile setup successful");
                } else {
                    console.error("Something went wrong");
                    throw Error("Something went wrong");
                }
            }
            console.log("HELLO")
        } catch (error) {
            throw error;
        }
    }


    return (
        <div>
            <button></button>
        </div>
    )
}

export default CreateBasket
