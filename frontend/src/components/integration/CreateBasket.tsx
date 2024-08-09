import { prepareContractCall, sendAndConfirmTransaction, getContract } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { ethers } from "ethers";
import { prepareTxForCreatingBasket } from "../../utils/contracts";
import { useState } from "react";
import { symbol } from "thirdweb/extensions/common";
import { BasketInfo } from "../../types/types";
import { basketTokenContractABI, userBasketsContractABI } from "../../utils/constant";
import { client } from "../../thirdWebInfo";
import { sepolia } from "thirdweb/chains";
import { getBasketContract } from "../../utils/contracts";
const CreateBasket = () => {

    const account = useActiveAccount();

    const TOKEN_LIST = [
        { name: 'USDC', addr: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' },
        { name: 'USDT', addr: '0xdAC17F958D2ee523a2206206994597C13D831ec7' },
        // Add more tokens as needed
    ];

    const [formData, setFormData] = useState({
        name: "" as string,
        symbol: "" as string,
        selectedBasket: [] as BasketInfo[]
    });

    const [formError, setFormError] = useState<string | null>()


    const validateForm = (): boolean => {
        if (!formData.name.trim() || !formData.symbol.trim()) {
            setFormError("Name and symbol cannot be empty");
            return false;
        }
        if (formData.selectedBasket.length === 0) {
            setFormError("At least one token must be selected");
            return false;
        }
        const totalPercent = formData.selectedBasket.reduce((sum, token) => sum + token.percent, 0);
        if (totalPercent !== 100) {
            setFormError("Total percentage must equal 100%");
            return false;
        }
        setFormError(null);
        return true;
    };

    const basketCreate = async () => {
        try {
            if (validateForm()) {
                const transaction = prepareTxForCreatingBasket(formData.name, formData.symbol, formData.selectedBasket, true);
                const result = account && (await sendAndConfirmTransaction({ transaction: transaction, account: account }));
                if (result) {
                    if (result.status === "success") {
                        console.log("created.");
                    } else {
                        console.error("Something went wrong");
                        throw Error("Something went wrong");
                    }
                } else {
                    console.log("Result not found!");
                }
            } else {
                if (formError) {
                    throw Error(formError);
                }
            }
        } catch (error) {
            throw error;
        }
    }

    const createBasketOfBasket = async () => {
        try {
            if (validateForm()) {
                const transaction = prepareTxForCreatingBasket(formData.name, formData.symbol, formData.selectedBasket, false);
                const result = account && (await sendAndConfirmTransaction({ transaction: transaction, account: account }));
                if (result) {
                    if (result.status === "success") {
                        console.log("created.");
                    } else {
                        console.error("Something went wrong");
                        throw Error("Something went wrong");
                    }
                } else {
                    console.log("Result not found!");
                }
            } else {
                if (formError) {
                    throw Error(formError);
                }
            }
        } catch (error) {
            throw error;
        }
    }


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTokenSelection = (e: React.ChangeEvent<HTMLInputElement>, addr: string) => {
        const { checked } = e.target;
        setFormData(prevData => {
            if (checked) {
                return {
                    ...prevData,
                    selectedBasket: [...prevData.selectedBasket, { addr, percent: 0 }],
                };
            } else {
                return {
                    ...prevData,
                    selectedBasket: prevData.selectedBasket.filter(token => token.addr !== addr),
                };
            }
        });
    };

    const handleTokenPercentChange = (addr: string, percent: number) => {
        setFormData(prevData => ({
            ...prevData,
            selectedBasket: prevData.selectedBasket.map(token =>
                token.addr === addr ? { ...token, percent } : token
            ),
        }));
    };

    console.log(formData);

    const basketDeposit = async (basketTokenContractAddress: string, ethValue: string) => {
        try {
            if (account) {

                const basketTokenContract = getContract({
                    address: basketTokenContractAddress,
                    abi: basketTokenContractABI.abi as any,
                    client: client,
                    chain: sepolia
                });

                const transaction = prepareContractCall({
                    contract: basketTokenContract,
                    method: "function depositBasketToken(address _to) public payable returns (bool)",
                    params: [account?.address],
                    value: BigInt(ethers.utils.parseEther(ethValue).toString()),
                    gas: BigInt(10000000)
                });

                const result = await sendAndConfirmTransaction({
                    transaction: transaction,
                    account: account
                });

                if (result) {
                    if (result.status === "success") {
                        console.log("deposit successfully");
                    } else {
                        console.error("Something went wrong");
                        throw Error("Something went wrong");
                    }
                } else {
                    console.log("Result not found!");
                }
            } else {
                throw Error("connect your wallet!");
            }
        } catch (error) {
            throw error;
        }
    }

    const basketOfBasketDeposit = async (userBasketContractAddress: string, ethValue: string) => {
        try {
            if (account) {

                const userBasketContract = getContract({
                    address: userBasketContractAddress,
                    abi: userBasketsContractABI.abi as any,
                    client: client,
                    chain: sepolia
                });

                const transaction = prepareContractCall({
                    contract: userBasketContract,
                    method: "function deposit(address _to) public payable",
                    params: [account.address],
                    value: BigInt(ethers.utils.parseEther(ethValue).toString()),
                    gas: BigInt(10000000)
                });

                const result = await sendAndConfirmTransaction({
                    transaction: transaction,
                    account: account
                });

                if (result) {
                    if (result.status === "success") {
                        console.log("deposit successfully");
                    } else {
                        console.error("Something went wrong");
                        throw Error("Something went wrong");
                    }
                } else {
                    console.log("Result not found!");
                }
            } else {
                throw Error("connect your wallet!");
            }
        } catch (error) {
            throw error;
        }
    }

    const basketWithdraw = async (basketTokenContractAddress: string, lpTokenAmount: string) => {
        try {
            if (account) {
                const basketTokenContract = getBasketContract(basketTokenContractAddress, "BASKET")
                const approveTransaction = prepareContractCall({
                    contract: basketTokenContract,
                    method: "function approve(address spender, uint256 value)",
                    params: [basketTokenContractAddress, BigInt(lpTokenAmount)],
                });
                const approveResult = await sendAndConfirmTransaction({
                    transaction: approveTransaction,
                    account: account
                });
                if (approveResult) {
                    if (approveResult.status === "success") {
                        const transaction = prepareContractCall({
                            contract: basketTokenContract,
                            method: "function withdrawBasketToken(address _to, uint256 _lpValue) public returns (bool)",
                            params: [account.address, BigInt(lpTokenAmount)]
                        })
                        const result = await sendAndConfirmTransaction({
                            transaction: transaction,
                            account: account
                        });
                        if (result) {
                            if (result.status === "success") {
                                console.log("deposit successfully");
                            } else {
                                console.error("Something went wrong");
                                throw Error("Something went wrong");
                            }
                        } else {
                            console.log("Result not found!");
                        }
                    } else {
                        console.error("Something went wrong");
                        throw Error("Something went wrong");
                    }
                } else {
                    console.log("Result not found!");
                }
            } else {
                throw Error("connect your wallet!");
            }
        } catch (error) {
            throw error;
        }
    }
    return (
        <div>
            <button onClick={() => basketWithdraw("0x", "BASKET")}>check</button>

            <form action="">
                <input
                    type="text"
                    name="name"
                    placeholder="enter name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="symbol"
                    placeholder="enter symbol"
                    value={formData.symbol}
                    onChange={handleInputChange}
                />
                {TOKEN_LIST.map(token => (
                    <div key={token.addr}>
                        <label>
                            <input
                                type="checkbox"
                                onChange={(e) => handleTokenSelection(e, token.addr)}
                                checked={formData.selectedBasket.some(t => t.addr === token.addr)}
                            />
                            {token.name} ({token.addr})
                        </label>
                        {formData.selectedBasket.some(t => t.addr === token.addr) && (
                            <input
                                type="number"
                                value={formData.selectedBasket.find(t => t.addr === token.addr)?.percent || 0}
                                onChange={(e) => handleTokenPercentChange(token.addr, Number(e.target.value))}
                                min="0"
                                max="100"
                            />
                        )}
                    </div>
                ))}
            </form>


        </div>
    )
}

export default CreateBasket
