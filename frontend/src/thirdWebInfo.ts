import { sepolia, defineChain } from "thirdweb/chains";
import { getRpcClient } from "thirdweb";
import { createThirdwebClient } from "thirdweb";

const clientId = process.env.THIRDWEB_CLIENT_ID;
export const tenderlySepolia = defineChain({
    id: 11155112,
    rpc: "https://virtual.sepolia.rpc.tenderly.co/2e8bae52-8ffd-4093-a8df-4f1592675757",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
    },
})


if (!clientId) {
    throw new Error('No client ID provided');
}

export const client = createThirdwebClient({
    clientId: clientId
})

export const rpcRequest = getRpcClient({
    client: client,
    chain: tenderlySepolia
})