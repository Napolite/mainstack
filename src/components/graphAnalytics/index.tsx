import GraphComponent from "./graphComponen";

function GraphAnalytics({ balance }: { balance: number }) {
  console.log("balance", balance);
  return (
    <div>
      <div className="w-[28.875rem] h-[72px] flex justify-between items-center">
        <div className="w-[231px] h-full">
          <p className="tracking-[-0.2px] text-[14px] font-[500] text-[#56616B]">
            Available Balance
          </p>
          <p className="tracking-[-1.5px] leading-[48px] text-[34px] font-[700] text-[#131316] w-full">
            USD{" "}
            {balance.toLocaleString("en-us", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <button className="w-[167px] h-[52px] rounded-[100px] bg-[#131316] text-[#ffffff] text-[16px]">
          Withdraw
        </button>
      </div>
      <GraphComponent />
    </div>
  );
}

export default GraphAnalytics;
