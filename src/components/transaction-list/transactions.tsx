import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import TransactionList from "./transactionList";
import { Transaction } from "../../page/types";

function Transactions({ tx }: { tx: Transaction[] }) {
  return (
    <div>
      <div className="w-[72.5rem] flex justify-between h-[72px] items-center">
        <div>
          <div className="text-[24px] text-[#131316] font-[700]">
            {tx?.length} Transactions
          </div>
          <div className="text-[#56616B] text-[14px]">
            Your transactions for the last the last 7 days
          </div>
        </div>
        <div className="flex w-[16.125rem] items-center gap-[12px] justify-between">
          <button className=" flex items-center gap-[4px] text-center justify-center w-[139px] h-[48px] bg-[#EFF1F6] rounded-[100px] text-[16px]">
            Filter
            <MdKeyboardArrowDown />
          </button>
          <button className=" flex items-center gap-[4px] text-center justify-center w-[139px] h-[48px] bg-[#EFF1F6] rounded-[100px] text-[16px]">
            Export List <MdOutlineFileDownload />
          </button>
        </div>
      </div>
      <div className="mt-[60px]">
        {tx?.map((tx) => (
          <TransactionList transaction={tx} />
        ))}
      </div>
    </div>
  );
}

export default Transactions;
