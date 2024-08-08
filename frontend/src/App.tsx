import Header from "./components/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { connectWallet } from "./app/features/connectWalletSlice";

function App() {
  const dispatch = useAppDispatch();
  const walletData = useAppSelector(state => state.connectWallet);
  const connectionStatus = useActiveWalletConnectionStatus();

  useEffect(() => {
    if (connectionStatus === "connected") {
      dispatch(connectWallet());
    } else {
      console.log("wallet not connected");
    }
  }, [connectionStatus])

  console.log(walletData);

  return (
    <div>
      <Header />
    </div>
  )
}

export default App