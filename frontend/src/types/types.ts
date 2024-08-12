import { ethers } from "ethers";

export type ConnectWalletInterface = {
    provider: ethers.providers.Web3Provider | null;
    signer: ethers.providers.JsonRpcSigner | null;
    address: string | null;
    error: string | null;
    loading: boolean;
};

export type BasketInfo = {
    addr: string;
    percent: number;
}

export type BasketTokenData = {
    name: string;
    address: string;
    percent: number;
}

export type BasketData = {
    name: string;
    symbol: string;
    address: string;
    tokens: BasketTokenData[]
}