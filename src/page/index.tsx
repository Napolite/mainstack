import GraphAnalytics from "../components/graphAnalytics";
import Navbar from "../components/navbar";

function MainStack() {
  return (
    <div>
      <Navbar />
      <div className="mt-[4rem] w-[1159px] mx-auto">
        <GraphAnalytics />
      </div>
    </div>
  );
}

export default MainStack;
