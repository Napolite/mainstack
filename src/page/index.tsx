import Balances from "../components/blanace";
import GraphAnalytics from "../components/graphAnalytics";
import Navbar from "../components/navbar";

function MainStack() {
  return (
    <div>
      <Navbar />
      <div className="mt-[4rem] w-[72.438rem] mx-auto flex justify-between items-center">
        <GraphAnalytics />
        <Balances />
      </div>
    </div>
  );
}

export default MainStack;
