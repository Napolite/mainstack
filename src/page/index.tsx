import { useEffect, useState } from "react";
import Balances from "../components/blanace";
import GraphAnalytics from "../components/graphAnalytics";
import Navbar from "../components/navbar";
import Transactions from "../components/transaction-list/transactions";
import axios from "axios";
import { USerType, WalletType } from "./types";

function MainStack() {
  const [user, setUser] = useState<USerType>({
    email: "",
    first_name: "",
    last_name: "",
  });
  const [walletData, setWalletData] = useState<WalletType>({
    balance: 0,
    ledger_balance: 0,
    pending_payout: 0,
    total_payout: 0,
    total_revenue: 0,
  });
  const fetchUserData = async () => {
    const base = import.meta.env.VITE_BASEURL;
    const userData = await axios.get(`${base}/user`);
    const walletData = await axios.get(`${base}/wallet`);
    setUser(userData?.data);
    setWalletData(walletData?.data);
    console.log(walletData);
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <Navbar user={user} />
      <div className="mt-[4rem] w-[72.5rem] mx-auto flex justify-between items-center ">
        <GraphAnalytics balance={walletData?.balance} />
        <Balances />
      </div>
      <div className="mt-[100px] mx-auto  w-[72.5rem]">
        <Transactions />
      </div>
    </div>
  );
}

export default MainStack;
