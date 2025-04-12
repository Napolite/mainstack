import React from "react";
import { GoArrowDownLeft as Success } from "react-icons/go";
import { GoArrowDownRight as Failed } from "react-icons/go";

interface Transaction {
  title: string;
  person: string | null;
  amount: number;
  currency: string;
  date: string; // You could also use Date type if parsing to Date objects
  status: "Completed" | "Successful" | "Pending";
}

function TransactionList({ transaction }: { transaction: Transaction }) {
  const failColor = { bg: "#F9E3E0", fore: "#961100" };
  const successColor = { fore: "#075132", bg: "#ecf3f2" };

  const getStatus = (tx: "Completed" | "Successful" | "Pending") => {
    if (tx === "Completed" || tx === "Successful") return true;
    else return false;
  };
  return (
    <div className="w-[72.5rem] h-[49px] mb-[24px] flex justify-between items-center">
      <div className="flex">
        <div
          className={`w-[48px] h-[48px] ${
            getStatus(transaction?.status) ? "bg-[#ecf3f2]" : "bg-[#F9E3E0]"
          } rounded-full flex place-items-center justify-center mr-[1.5rem]`}
        >
          {getStatus(transaction?.status) ? (
            <Success className="" size={20} color={successColor?.fore} />
          ) : (
            <Failed className="" size={20} color={failColor?.fore} />
          )}
        </div>
        <div className="w-[22.188rem]">
          <div className="text-[1rem] text-[#131316] leading-[24px] tracking-[-0.2px] mb-[5px] font-[500]">
            {transaction.title}
          </div>
          <div className="text-[#56616B] text-[0.875rem] font-[500]">
            {transaction.person ? transaction.person : "You"}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-[16px] font-[700] leading-[150%] tracking-[-0.4px] mb-[5px]">
          USD{" "}
          {transaction.amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <div className="text-[14px] font-[500] text-[#56616B] tracking-[-0.2px] leading-[16px]">
          {transaction?.date}
        </div>
      </div>
    </div>
  );
}

export default TransactionList;
