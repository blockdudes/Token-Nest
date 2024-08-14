import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BasketData } from "../../types/types";
import { getBasketContract } from "../../utils/contracts";
import { getContract, readContract } from "thirdweb";
import { client, tenderlyMainnet } from "../../thirdWebInfo";
import {
  BASKET_FACTORY_CONTRACT_ADDRESS,
  TokenContractABI,
} from "../../utils/constant";

type TotalInitialState = {
  totalBasket: BasketData[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: TotalInitialState = {
  totalBasket: null,
  loading: false,
  error: null,
};

export const getTotalBasket = createAsyncThunk(
  "getTotalBasket",
  async (_, { rejectWithValue }) => {
    try {
      let totalBasketData: BasketData[] = [];

      const getBasketFactoryContract = getBasketContract(
        BASKET_FACTORY_CONTRACT_ADDRESS,
        "FACTORY"
      );
      const totalBasketAddress = await readContract({
        contract: getBasketFactoryContract,
        method:
          "function getAllBaskets() public view returns (address[] memory)",
        params: [],
      });

      for (const basketAddress of totalBasketAddress) {
        const getBasket = getBasketContract(basketAddress, "BASKET");
        const getBasketData = await readContract({
          contract: getBasket,
          method: "getBasketData",
          params: [],
        });

        for (let token of getBasketData.basketTokens) {
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

          const tokenBalance = await readContract({
            contract: tokenContract,
            method: "balanceOf",
            params: [getBasketData.tokenAddress],
          });

          token.name = tokenName;
          token.symbol = tokenSymbol;
          token.balance = tokenBalance;
        }

        totalBasketData.push({
          name: getBasketData.name,
          symbol: getBasketData.symbol,
          address: getBasketData.tokenAddress,
          tokens: getBasketData.basketTokens,
          createdAt: getBasketData.createdAt,
          downVotes: getBasketData.downVotes,
          upVotes: getBasketData.upVotes,
          balance: null,
          percent: null,
          loading: false,
          error: null,
        });
      }
      return { totalBasketData };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const totalBasketSlice = createSlice({
  name: "connectWallet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalBasket.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalBasket.fulfilled, (state, action) => {
      state.totalBasket = action.payload.totalBasketData;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getTotalBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default totalBasketSlice.reducer;
