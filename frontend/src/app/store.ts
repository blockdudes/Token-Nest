import { configureStore } from '@reduxjs/toolkit'
import connectWalletReducer from "./features/connectWalletSlice";

export const store = configureStore({
    reducer: {
        connectWallet: connectWalletReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;