import { sepolia } from "thirdweb/chains";
import { getRpcClient } from "thirdweb";
import { createThirdwebClient } from "thirdweb";

const clientId = process.env.THIRDWEB_CLIENT_ID;
if (!clientId) {
    throw new Error('No client ID provided');
}

export const client = createThirdwebClient({
    clientId: clientId
})

export const rpcRequest = getRpcClient({
    client: client,
    chain: sepolia
})