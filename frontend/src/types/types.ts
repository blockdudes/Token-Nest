import { ethers } from "ethers";

export type ConnectWalletInterface = {
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.providers.JsonRpcSigner | null;
  address: string | null;
  error: string | null;
  loading: boolean;
};

export type TokenType = {
  name: string;
  symbol: string;
  address: string;
  image: string;
};

export type BasketType = {
  name: string;
  assets: (TokenType & { percentage: `${number}%` })[];
  address: string;
};

export type BasketOfBasketsType = {
  name: string;
  assets: (BasketType & { percentage: `${number}%` })[];
  address: string;
};
