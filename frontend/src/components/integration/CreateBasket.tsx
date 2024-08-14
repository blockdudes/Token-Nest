import {
  prepareContractCall,
  sendAndConfirmTransaction,
  getContract,
  readContract,
} from "thirdweb";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { ethers } from "ethers";
import { prepareTxForCreatingBasket } from "../../utils/contracts";
import { useState } from "react";
import { symbol } from "thirdweb/extensions/common";
import { BasketInfo, BasketData } from "../../types/types";
import {
  basketTokenContractABI,
  userBasketsContractABI,
  BASKET_FACTORY_CONTRACT_ADDRESS,
} from "../../utils/constant";
import { client } from "../../thirdWebInfo";
import { getBasketContract } from "../../utils/contracts";
import { uniswapV2RouterABI } from "../../abis/uniswapV2RouterABI";
import { tenderlyMainnet } from "../../thirdWebInfo";
import { TokenContractABI } from "../../utils/constant";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getTotalBasket } from "../../app/features/totalBasketSlice";
import { getUserTotalBasket } from "../../app/features/userTotalBasketSlice";

import { getUserTotalBasketOfBasket } from "../../app/features/userBasketOfBasketSlice";

const CreateBasket = () => {
  const dispatch = useAppDispatch();
  const totalBasket = useAppSelector((state) => state.totalBasket);
  const userTotalBasket = useAppSelector((state) => state.userTotalBasket);

  const account = useActiveAccount();

  const TOKEN_LIST: { name: string; addr: string }[] = [];

  const [formData, setFormData] = useState({
    name: "" as string,
    symbol: "" as string,
    selectedBasket: [] as BasketInfo[],
  });

  const [formError, setFormError] = useState<string | null>();

  const validateForm = (): boolean => {
    if (!formData.name.trim() || !formData.symbol.trim()) {
      setFormError("Name and symbol cannot be empty");
      return false;
    }
    if (formData.selectedBasket.length === 0) {
      setFormError("At least one token must be selected");
      return false;
    }
    const totalPercent = formData.selectedBasket.reduce(
      (sum, token) => sum + token.percent,
      0
    );
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
        const transaction = prepareTxForCreatingBasket(
          formData.name,
          formData.symbol,
          formData.selectedBasket,
          true,
          1
        );

        const result =
          account &&
          (await sendAndConfirmTransaction({
            transaction: transaction,
            account: account,
          }));
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
  };

  const createBasketOfBasket = async () => {
    try {
      if (validateForm()) {
            const transaction = prepareTxForCreatingBasket(
            formData.name,
            formData.symbol,
            formData.selectedBasket,
            false,
            0
            );
        const result =
          account &&
          (await sendAndConfirmTransaction({
            transaction: transaction,
            account: account,
          }));
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
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTokenSelection = (
    e: React.ChangeEvent<HTMLInputElement>,
    addr: string
  ) => {
    const { checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return {
          ...prevData,
          selectedBasket: [
            ...prevData.selectedBasket,
            { addr, percent: 0, image: "" },
          ],
        };
      } else {
        return {
          ...prevData,
          selectedBasket: prevData.selectedBasket.filter(
            (token) => token.addr !== addr
          ),
        };
      }
    });
  };

  const handleTokenPercentChange = (
    addr: string,
    percent: number,
    image: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedBasket: prevData.selectedBasket.map((token) =>
        token.addr === addr ? { ...token, percent, image } : token
      ),
    }));
  };

  const basketDeposit = async (
    basketTokenContractAddress: string,
    ethValue: string
  ) => {
    try {
      if (account) {
        const basketTokenContract = getContract({
          address: basketTokenContractAddress,
          abi: basketTokenContractABI.abi as any,
          client: client,
          chain: tenderlyMainnet,
        });

        const transaction = prepareContractCall({
          contract: basketTokenContract,
          method:
            "function depositBasketToken(address _to) public payable returns (bool)",
          params: [account?.address],
          value: BigInt(ethers.utils.parseEther(ethValue).toString()),
          gas: BigInt(10000000),
        });

        const result = await sendAndConfirmTransaction({
          transaction: transaction,
          account: account,
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
  };

  const basketOfBasketDeposit = async (
    userBasketContractAddress: string,
    ethValue: string
  ) => {
    try {
      if (account) {
        const userBasketContract = getContract({
          address: userBasketContractAddress,
          abi: userBasketsContractABI.abi as any,
          client: client,
          chain: tenderlyMainnet,
        });

        const transaction = prepareContractCall({
          contract: userBasketContract,
          method: "function deposit(address _to) public payable",
          params: [account.address],
          value: BigInt(ethers.utils.parseEther(ethValue).toString()),
          gas: BigInt(10000000),
        });

        const result = await sendAndConfirmTransaction({
          transaction: transaction,
          account: account,
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
  };

  const basketWithdraw = async (
    basketTokenContractAddress: string,
    lpTokenAmount: string
  ) => {
    try {
      if (account) {
        const basketTokenContract = getBasketContract(
          basketTokenContractAddress,
          "BASKET"
        );

        const approveTransaction = prepareContractCall({
          contract: basketTokenContract,
          method: "function approve(address spender, uint256 value)",
          params: [basketTokenContractAddress, BigInt(lpTokenAmount)],
        });
        const approveResult = await sendAndConfirmTransaction({
          transaction: approveTransaction,
          account: account,
        });
        if (approveResult) {
          if (approveResult.status === "success") {
            const transaction = prepareContractCall({
              contract: basketTokenContract,
              method:
                "function withdrawBasketToken(address _to, uint256 _lpValue) public returns (bool)",
              params: [account.address, BigInt(lpTokenAmount)],
            });
            const result = await sendAndConfirmTransaction({
              transaction: transaction,
              account: account,
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
  };

  const getTotalBask = async () => {
    try {
      if (account) {
        dispatch(getTotalBasket());
        dispatch(getUserTotalBasket(account?.address));
        dispatch(getUserTotalBasketOfBasket(account?.address));
      }
    } catch (error) {
      throw error;
    }
  };

  const getUserCreatedTotalBasket = async () => {
    try {
    } catch (error) {
      throw error;
    }
  };

  const getUserTotalBalance = async () => {
    try {
    } catch (error) {
      throw error;
    }
  };

  const getUserTokenBalance = async () => {
    try {
    } catch (error) {
      throw error;
    }
  };

  const getBasketBalance = async () => {
    try {
    } catch (error) {
      throw error;
    }
  };

  const getBasketOfbasketByUser = async () => {
    try {
    } catch (error) {
      throw error;
    }
  };

  // const readContractFunction = (basketTokenContractAddress: string) => {
  //     try {

  //         const basketTokenContract = getBasketContract(basketTokenContractAddress, "BASKET");
  //         const { data, isLoading } = useReadContract({
  //             contract: basketTokenContract,
  //             method: "",
  //             params: []
  //         });

  //         console.log(data, isLoading)
  //     } catch (error) {
  //         throw error;
  //     }
  // }

  // const getTotalBasket = async (basketTokenFactoryContractAddress: string) => {
  //     try {
  //         const basketTokenFactoryContract = getBasketContract()
  //     } catch (error) {
  //         throw error;
  //     }
  // }

  const uniswapAddLiquidity = async (
    tokenAddress: string,
    amountTokenDesired: string,
    amountETH: string
  ) => {
    try {
      if (!account) throw new Error("Wallet not connected");
      if (!ethers.utils.isAddress(tokenAddress))
        throw new Error("Invalid token address");
      if (
        isNaN(parseFloat(amountTokenDesired)) ||
        isNaN(parseFloat(amountETH))
      ) {
        throw new Error("Invalid amount input");
      }

      const uniswapContract = getContract({
        address: "0x86dcd3293C53Cf8EFd7303B57beb2a3F671dDE98",
        abi: uniswapV2RouterABI as any,
        client: client,
        chain: tenderlyMainnet,
      });

      const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now
      const amountTokenMin = ethers.utils
        .parseUnits(amountTokenDesired, 6)
        .mul(95)
        .div(100); // 95% of desired amount
      const amountETHMin = ethers.utils.parseEther(amountETH).mul(95).div(100); // 95% of desired ETH amount

      const transactionLiquidityAddETH = prepareContractCall({
        contract: uniswapContract,
        method:
          "function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external payable returns (uint amountToken, uint amountETH, uint liquidity)",
        params: [
          tokenAddress,
          BigInt(ethers.utils.parseUnits(amountTokenDesired, 6).toString()),
          BigInt(amountTokenMin.toString()),
          BigInt(amountETHMin.toString()),
          account.address,
          BigInt(deadline),
        ],
        value: BigInt(ethers.utils.parseEther(amountETH).toString()),
      });

      const result = await sendAndConfirmTransaction({
        transaction: transactionLiquidityAddETH,
        account: account,
      });

      if (result && result.status === "success") {
        console.log("Liquidity added successfully");
        return result;
      } else {
        throw new Error("Failed to add liquidity");
      }
    } catch (error) {
      console.error("Error adding liquidity:", error);
      throw error;
    }
  };

  const approveTokenToUniswap = async (
    tokenAddress: string,
    amountTokenDesired: string
  ) => {
    try {
      if (!account) throw new Error("Wallet not connected");
      const tokenContract = getContract({
        address: tokenAddress,
        abi: TokenContractABI.abi as any,
        client: client,
        chain: tenderlyMainnet,
      });

      const approveTransaction = prepareContractCall({
        contract: tokenContract,
        method:
          "function approve(address spender, uint256 amount) public returns (bool)",
        params: [
          "0x86dcd3293C53Cf8EFd7303B57beb2a3F671dDE98",
          BigInt(ethers.utils.parseUnits(amountTokenDesired, 6).toString()),
        ],
      });

      const approveResult = await sendAndConfirmTransaction({
        transaction: approveTransaction,
        account: account,
      });

      if (!approveResult || approveResult.status !== "success") {
        throw new Error("Failed to approve token spend");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <button onClick={() => getTotalBask()}>Get Total Basket</button> <br />
      <button onClick={createBasketOfBasket}>
        Create Basket Of Basket
      </button>{" "}
      <br />
      <button onClick={basketCreate}>Create Basket</button> <br />
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
        {TOKEN_LIST.map((token) => (
          <div key={token.addr}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => handleTokenSelection(e, token.addr)}
                checked={formData.selectedBasket.some(
                  (t) => t.addr === token.addr
                )}
              />
              {token.name} ({token.addr})
            </label>
            {formData.selectedBasket.some((t) => t.addr === token.addr) && (
              <input
                type="number"
                value={
                  formData.selectedBasket.find((t) => t.addr === token.addr)
                    ?.percent || 0
                }
                onChange={(e) =>
                  handleTokenPercentChange(
                    token.addr,
                    Number(e.target.value),
                    "https:"
                  )
                }
                min="0"
                max="100"
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default CreateBasket;
