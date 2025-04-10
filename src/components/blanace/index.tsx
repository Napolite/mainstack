import React from "react";
import { CiCircleInfo } from "react-icons/ci";

function Balances() {
  const [balances, setBalances] = React.useState<{
    ledger: number;
    totalPayout: number;
    totalRevenue: number;
    pendingPayout: number;
  }>({
    ledger: 0,
    totalPayout: 55080,
    totalRevenue: 175580,
    pendingPayout: 0.0,
  });

  return (
    <div className="h-[360px] w-[360271 flex flex-col justify-between items-center">
      <div className="w-[271px] h-[66px] flex items-center justify-between">
        <div>
          <div className="text-[14px] text-[#56616b]">Ledger Balance</div>
          <div className="text-[#131316] text-[26px] font-[700]">
            USD {Number(balances?.pendingPayout.toFixed(2)).toLocaleString()}
          </div>
        </div>
        <CiCircleInfo />
      </div>
      <div className="w-[271px] h-[66px] flex items-center justify-between">
        <div>
          <div className="text-[14px] text-[#56616b]">Total Payout</div>
          <div className="text-[#131316] text-[26px] font-[700]">
            USD {Number(balances?.totalPayout.toFixed(2)).toLocaleString()}
          </div>
        </div>
        <CiCircleInfo />
      </div>
      <div className="w-[271px] h-[66px] flex items-center justify-between">
        <div>
          <div className="text-[14px] text-[#56616b]">Total Revenue</div>
          <div className="text-[#131316] text-[26px] font-[700]">
            USD {balances?.totalRevenue.toFixed(2).toLocaleString()}
          </div>
        </div>
        <CiCircleInfo />
      </div>
      <div className="w-[271px] h-[66px] flex items-center justify-between">
        <div>
          <div className="text-[14px] text-[#56616b]">Pending Payout</div>
          <div className="text-[#131316] text-[26px] font-[700]">
            USD {balances?.pendingPayout.toFixed(2).toLocaleString()}
          </div>
        </div>
        <CiCircleInfo />
      </div>
    </div>
  );
}

export default Balances;
