import { client } from "../thirdWebInfo";
import { createWallet, walletConnect } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";

const ConnectWalletButton = () => {

    const wallets = [
        createWallet("io.metamask"),
        createWallet("com.coinbase.wallet"),
        walletConnect()
    ];

    return (
        <ConnectButton
            client={client}
            chains={[sepolia]}
            wallets={wallets}
            theme={"light"}
            connectModal={{ size: "wide" }}
        />
    )
}

export default ConnectWalletButton