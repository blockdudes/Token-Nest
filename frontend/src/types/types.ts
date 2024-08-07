import { ethers } from "ethers";

export type ConnectWalletInterface = {
    provider: ethers.providers.Web3Provider | null;
    signer: ethers.providers.JsonRpcSigner | null;
    address: string | null;
    error: string | null;
    loading: boolean;
};