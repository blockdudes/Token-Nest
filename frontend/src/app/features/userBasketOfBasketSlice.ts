import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBasketContract } from "../../utils/contracts";
import { getContract, readContract } from "thirdweb";
import { client, tenderlyMainnet } from "../../thirdWebInfo";
import {
  TokenContractABI,
  BASKET_FACTORY_CONTRACT_ADDRESS,
} from "../../utils/constant";
import { UserBasketOfBasketData } from "../../types/types";

type UserBasketOfBasketInitialState = {
  userTotalBasketOfBasket: UserBasketOfBasketData[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserBasketOfBasketInitialState = {
  userTotalBasketOfBasket: null,
  loading: false,
  error: null,
};

export const getUserTotalBasketOfBasket = createAsyncThunk(
  "getUserTotalBasketOfBasket",
  async (address: string, { rejectWithValue }) => {
    try {
      let userBasketOfBasket: UserBasketOfBasketData[] = [];

      const getBasketFactoryContract = getBasketContract(
        BASKET_FACTORY_CONTRACT_ADDRESS,
        "FACTORY"
      );
      const totalBasketOfBasket = await readContract({
        contract: getBasketFactoryContract,
        method:
          "function getAllUserBasketOfBaskets(address account) public view returns (address[] memory)",
        params: [address],
      });

      for (const basketOfBasketAddress of totalBasketOfBasket) {
        const getBasketOfBasketContract = getBasketContract(
          basketOfBasketAddress,
          "USER_BASKET"
        );

        const getBasketOfBasketData = await readContract({
          contract: getBasketOfBasketContract,
          method: "getUserBasketOfBasketData",
          params: [],
        });

        let basketOfBasketItem: UserBasketOfBasketData = {
          name: getBasketOfBasketData.name,
          symbol: getBasketOfBasketData.symbol,
          address: basketOfBasketAddress,
          basket: [],
          createdAt: getBasketOfBasketData.createdAt,
          balance: 0,
          loading: false,
          error: null,
        };

        for (const basket of getBasketOfBasketData.basketTokens) {
          let basketTotalBalanceUSD = 0;

          const getBasketTokenContract = getBasketContract(
            basket.addr,
            "BASKET"
          );

          const getBasketTokenData = await readContract({
            contract: getBasketTokenContract,
            method: "getBasketData",
            params: [],
          });
          const userLpToken = await readContract({
            contract: getBasketTokenContract,
            method: "balanceOf",
            params: [address],
          });
          const totalSupply = await readContract({
            contract: getBasketTokenContract,
            method: "totalSupply",
            params: [],
          });

          const userSharePercent = Number(userLpToken / totalSupply) * 100;
          for (let token of getBasketTokenData.basketTokens) {
            const tokenContract = getContract({
              address: token.addr,
              abi: TokenContractABI.abi as any,
              client: client,
              chain: tenderlyMainnet,
            });
            const tokenSymbol = await readContract({
              contract: tokenContract,
              method: "symbol",
              params: [],
            });
            const tokenName = await readContract({
              contract: tokenContract,
              method: "name",
              params: [],
            });
            const tokenDecimals = await readContract({
              contract: tokenContract,
              method: "decimals",
              params: [],
            });
            const tokenBalance =
              Number(
                await readContract({
                  contract: tokenContract,
                  method: "balanceOf",
                  params: [basket.addr],
                })
              ) /
              10 ** tokenDecimals;
            token.name = tokenName;
            token.symbol = tokenSymbol;
            token.balance = (Number(tokenBalance) * userSharePercent) / 100;
            token.balanceInUSD =
              (Number(tokenBalance) * userSharePercent) / 100;

            basketTotalBalanceUSD += token.balanceInUSD;
          }

          if (basketOfBasketItem.basket != null) {
            basketOfBasketItem.basket.push({
              name: getBasketTokenData.name,
              symbol: getBasketTokenData.symbol,
              address: basket.addr,
              tokens: getBasketTokenData.basketTokens,
              createdAt: getBasketTokenData.createdAt,
              percent: basket.percent,
              downVotes: null,
              upVotes: null,
              loading: false,
              error: null,
              balance: basketTotalBalanceUSD,
            });

            if (basketOfBasketItem.balance != null) {
              basketOfBasketItem.balance += basketTotalBalanceUSD;
            }
          }
        }

        userBasketOfBasket.push(basketOfBasketItem);
      }

      console.log(userBasketOfBasket);

      return { userBasketOfBasket };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userTotalBasketOfBasketSlice = createSlice({
  name: "userTotalBasket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserTotalBasketOfBasket.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserTotalBasketOfBasket.fulfilled, (state, action) => {
      state.userTotalBasketOfBasket = action.payload.userBasketOfBasket;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getUserTotalBasketOfBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default userTotalBasketOfBasketSlice.reducer;
