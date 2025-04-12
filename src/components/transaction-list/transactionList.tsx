import { GoArrowDownLeft as Success } from "react-icons/go";
import { GoArrowUpRight as Failed } from "react-icons/go";
import { Transaction } from "../../page/types";

function TransactionList({ transaction }: { transaction: Transaction }) {
  console.log("transactions", transaction);
  const failColor = { bg: "#F9E3E0", fore: "#961100" };
  const successColor = { fore: "#075132", bg: "#ecf3f2" };

  const getStatus = (tx: "withdrawal" | "deposit" | string) => {
    console.log("txxxxx", tx);
    if (tx === "deposit") return true;
    else return false;
  };

  const convertDate = (inputDate: string) => {
    const date = new Date(inputDate);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="w-[72.5rem] h-[49px] mb-[24px] flex justify-between items-center">
      <div className="flex">
        <div
          className={`w-[48px] h-[48px] ${
            getStatus(transaction?.type) ? "bg-[#ecf3f2]" : "bg-[#F9E3E0]"
          } rounded-full flex place-items-center justify-center mr-[1.5rem]`}
        >
          {getStatus(transaction?.type) ? (
            <Success className="" size={20} color={successColor?.fore} />
          ) : (
            <Failed className="" size={20} color={failColor?.fore} />
          )}
        </div>
        <div className="w-[22.188rem]">
          <div className="text-[1rem] text-[#131316] leading-[24px] tracking-[-0.2px] mb-[5px] font-[500]">
            {transaction?.metadata?.product_name || transaction?.type}
          </div>
          <div className="text-[#56616B] text-[0.875rem] font-[500]">
            {transaction?.metadata?.name || transaction?.status}
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
          {convertDate(transaction?.date)}
        </div>
      </div>
    </div>
  );
}

export default TransactionList;
