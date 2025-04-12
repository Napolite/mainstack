import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import TransactionList from "./transactionList";

interface Transaction {
  title: string;
  person: string | null;
  amount: number;
  currency: string;
  date: string; // You could also use Date type if parsing to Date objects
  status: "Completed" | "Successful" | "Pending";
}

function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      title: "Psychology of Money",
      person: "Roy Cash",
      amount: 600,
      currency: "USD",
      date: "Apr 03, 2022",
      status: "Completed",
    },
    {
      title: "Buy me a coffee",
      person: "Jonathan Smart",
      amount: 100,
      currency: "USD",
      date: "Apr 02, 2022",
      status: "Completed",
    },
    {
      title: "How to build an online brand",
      person: "Delvan Luccians",
      amount: 100,
      currency: "USD",
      date: "Apr 02, 2022",
      status: "Completed",
    },
    {
      title: "Cash withdrawal",
      person: null,
      amount: 3000.33,
      currency: "USD",
      date: "Apr 01, 2022",
      status: "Successful",
    },
    {
      title: "Support my outreach",
      person: "Shawn Kane",
      amount: 400,
      currency: "USD",
      date: "Apr 02, 2022",
      status: "Completed",
    },
    {
      title: "Cash withdrawal",
      person: null,
      amount: 1004.44,
      currency: "USD",
      date: "Apr 01, 2022",
      status: "Pending",
    },
    {
      title: "Learn how to pitch your idea",
      person: "Dujon Jericho",
      amount: 500,
      currency: "USD",
      date: "Apr 02, 2022",
      status: "Completed",
    },
  ]);
  return (
    <div>
      <div className="w-[72.5rem] flex justify-between h-[72px] items-center">
        <div>
          <div className="text-[24px] text-[#131316] font-[700]">
            24 Transactions
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
        {transactions?.map((tx) => (
          <TransactionList transaction={tx} />
        ))}
      </div>
    </div>
  );
}

export default Transactions;
