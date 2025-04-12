import { CiCircleInfo } from "react-icons/ci";
import { WalletType } from "../../page/types";

function Balances({ balances }: { balances: WalletType }) {
  return (
    <div className="h-[360px] w-[360271 flex flex-col justify-between items-center">
      <div className="w-[271px] h-[66px] flex items-center justify-between">
        <div>
          <div className="text-[14px] text-[#56616b]">Ledger Balance</div>
          <div className="text-[#131316] text-[26px] font-[700]">
            USD{" "}
            {balances?.pending_payout.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
        <CiCircleInfo />
      </div>
      <div className="w-[271px] h-[66px] flex items-center justify-between">
        <div>
          <div className="text-[14px] text-[#56616b]">Total Payout</div>
          <div className="text-[#131316] text-[26px] font-[700]">
            USD{" "}
            {balances?.total_payout?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
        <CiCircleInfo />
      </div>
      <div className="w-[271px] h-[66px] flex items-center justify-between">
        <div>
          <div className="text-[14px] text-[#56616b]">Total Revenue</div>
          <div className="text-[#131316] text-[26px] font-[700]">
            USD{" "}
            {balances?.total_revenue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
        <CiCircleInfo />
      </div>
      <div className="w-[271px] h-[66px] flex items-center justify-between">
        <div>
          <div className="text-[14px] text-[#56616b]">Pending Payout</div>
          <div className="text-[#131316] text-[26px] font-[700]">
            USD{" "}
            {balances?.pending_payout.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
        <CiCircleInfo />
      </div>
    </div>
  );
}

export default Balances;
