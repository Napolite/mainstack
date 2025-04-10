import Balances from "../components/blanace";
import GraphAnalytics from "../components/graphAnalytics";
import Navbar from "../components/navbar";
import Transactions from "../components/transaction-list/transactions";

function MainStack() {
  return (
    <div>
      <Navbar />
      <div className="mt-[4rem] w-[72.5rem] mx-auto flex justify-between items-center ">
        <GraphAnalytics />
        <Balances />
      </div>
      <div className="mt-[100px] mx-auto  w-[72.5rem]">
        <Transactions />
      </div>
    </div>
  );
}

export default MainStack;
