import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BasketData } from "../../types/types";
import { getBasketContract } from "../../utils/contracts";
import { getContract, readContract } from "thirdweb";
import { client, tenderlySepolia } from "../../thirdWebInfo";
import { TokenContractABI, BASKET_FACTORY_CONTRACT_ADDRESS } from "../../utils/constant";

import { store } from "../store";
// import axios from "axios";

const initialState: BasketData = {
    name: null,
    symbol: null,
    address: null,
    tokens: null,
    createdAt: null,
    downVotes: null,
    upVotes: null,
    percent: null,
    balance: null,
    loading: false,
    error: null,
}

export const getUserTotalBasket = createAsyncThunk("getUserTotalBasket", async (address: string, { rejectWithValue }) => {
    try {
        let userBasketData: BasketData = initialState;
        const getBasketFactoryContract = getBasketContract(BASKET_FACTORY_CONTRACT_ADDRESS, "FACTORY");





        // Basket of Basket START //
        console.log("Basket of Basket START")

        const totalBasketOfBasket = await readContract({
            contract: getBasketFactoryContract,
            method: "function getAllUserBasketOfBaskets(address account) public view returns (address[] memory)",
            params: [address]
        });

        for (const basketOfBasketAddress of totalBasketOfBasket) {
            const getBasketOfBasketContract = getBasketContract(basketOfBasketAddress, "USER_BASKET");

            const getBasketOfBasketData = await readContract({
                contract: getBasketOfBasketContract,
                method: "getUserBasketOfBasketData",
                params: []
            });

            console.log(getBasketOfBasketData);
            // console.log(store.getState());

            // const [name, symbol, createdAt] = await Promise.all([
            //     readContract({
            //         contract: getBasketOfBasket,
            //         method: "name",
            //         params: []
            //     }),
            //     readContract({
            //         contract: getBasketOfBasket,
            //         method: "symbol",
            //         params: []
            //     }),
            //     readContract({
            //         contract: getBasketOfBasket,
            //         method: "createdAt",
            //         params: []
            //     })
            // ])
            // const getBasketOfBasketData = await readContract({
            //     contract: getBasketOfBasket,
            //     method: "name",
            //     params: []
            // });

            // console.log(name, symbol, createdAt, basketOfBasketAddress);
        }

        console.log("totalBasketOfBasket: ", totalBasketOfBasket);

        console.log("Basket of Basket END")

        // Basket of Basket END //







        const totalBasketAddress = await readContract({
            contract: getBasketFactoryContract,
            method: "function getAllBaskets() public view returns (address[] memory)",
            params: []
        });
        let userBasketAddress: string[] = [];
        for (const basketAddress of totalBasketAddress) {
            const getBasket = getBasketContract(basketAddress, "BASKET");
            const userLpToken = await readContract({
                contract: getBasket,
                method: "balanceOf",
                params: [address]
            });
            if (Number(userLpToken) > 0) {
                userBasketAddress.push(basketAddress);
            }
        }
        for (const basketAddress of userBasketAddress) {
            const getBasket = getBasketContract(basketAddress, "BASKET");
            const getBasketData = await readContract({
                contract: getBasket,
                method: "getBasketData",
                params: []
            });
            const userLpToken = await readContract({
                contract: getBasket,
                method: "balanceOf",
                params: [address]
            });
            const totalSupply = await readContract({
                contract: getBasket,
                method: "totalSupply",
                params: []
            });
            const userSharePercent = Number(userLpToken / totalSupply) * 100;
            for (let token of getBasketData.basketTokens) {
                const tokenContract = getContract({
                    address: token.addr,
                    abi: TokenContractABI.abi as any,
                    client: client,
                    chain: tenderlySepolia
                });
                const tokenSymbol = await readContract({
                    contract: tokenContract,
                    method: "symbol",
                    params: []
                });
                const tokenName = await readContract({
                    contract: tokenContract,
                    method: "name",
                    params: []
                });
                const tokenBalance = await readContract({
                    contract: tokenContract,
                    method: "balanceOf",
                    params: [basketAddress]
                })
                token.name = tokenName;
                token.symbol = tokenSymbol;
                token.balance = (Number(tokenBalance) * userSharePercent) / 100;
                token.balanceInUSD = (Number(tokenBalance) * userSharePercent) / 100;

                // const response = await axios.get(
                //     `https://pro-api.coinmarketcap.com/v1/tools/price-conversion?symbol=${token.symbol}&amount=${token.balance}&convert=USD`,
                //     {
                //         headers: {
                //             'X-CMC_PRO_API_KEY': '99e8b7ac-34a8-4b56-9ac3-a00ce4165050'
                //         }
                //     }
                // );

                // console.log("Response: ", response);                
            }
            userBasketData = {
                name: getBasketData.name,
                symbol: getBasketData.symbol,
                address: getBasketData.tokenAddress,
                tokens: getBasketData.basketTokens,
                createdAt: getBasketData.createdAt,
                downVotes: getBasketData.downVotes,
                upVotes: getBasketData.upVotes,
                percent: null,
                balance: null,
                loading: false,
                error: null,
            };
        }

        console.log(userBasketData);

        return userBasketData;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const userTotalBasketSlice = createSlice({
    name: "userTotalBasket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserTotalBasket.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUserTotalBasket.fulfilled, (state, action) => {
            state.name = action.payload.name ?? null;
            state.symbol = action.payload.symbol ?? null;
            state.address = action.payload.address ?? null;
            state.tokens = action.payload.tokens ?? null;
            state.createdAt = action.payload.createdAt ?? null;
            state.downVotes = action.payload.downVotes ?? null;
            state.upVotes = action.payload.upVotes ?? null;
            state.loading = action.payload.loading ?? null;
            state.error = action.payload.error ?? null;
        });
        builder.addCase(getUserTotalBasket.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default userTotalBasketSlice.reducer;