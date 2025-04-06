import Logo from "../../assets/mainstack-logo.svg";
import { GoHome } from "react-icons/go";
import { MdOutlineAnalytics } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { MdOutlineWidgets } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { BsChatLeftText } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  return (
    <div className="flex w-full h-[4rem] bg-white shadow shadow-md shadow-[rgba(45, 59, 67, 0.05)] items-center justify-between px-[24px] bg-[red] rounded-[100px]">
      <img src={Logo} width={36} height={36} />
      <nav className="flex gap-[1.25rem] w-[36.313rem] h-[2.5px]">
        <div className="flex items-center gap-[10px] w-[96px]">
          <GoHome className="w-[20px] h-[20px]" />
          <p className="text-[16px]">Home</p>
        </div>
        <div className="flex items-center gap-[10px] w-[116px]">
          <MdOutlineAnalytics className="w-[20px] h-[20px]" />
          <p className="text-[16px]">Analytics</p>
        </div>
        <div className="flex items-center gap-[10px] w-[112px]">
          <CiMoneyBill className="w-[20px] h-[20px]" />
          <p className="text-[16px]">Revenue</p>
        </div>
        <div className="flex items-center gap-[10px] w-[88px]">
          <MdOutlinePeople className="w-[20px] h-[20px]" />
          <p className="text-[16px]">CRM</p>
        </div>
        <div className="flex items-center gap-[10px] w-[89px]">
          <MdOutlineWidgets className="w-[20px] h-[20px]" />
          <p className="text-[16px]">Apps</p>
        </div>
      </nav>
      <div className="flex gap-[1.25rem]  w-[11.063rem] h-[2.5rem] items-center">
        <div>
          <CiBellOn className="w-[20px] h-[20px]" />
        </div>
        <div>
          <BsChatLeftText className="w-[20px] h-[20px]" />
        </div>
        <div className="flex w-[5.063rem] h-[2.5rem] items-center bg-[#EFF1F6] rounded-[100px] pt-[4px] pl-[5px] pb-[4px] pr-[12px] gap-[10px]">
          <div className="w-[32px] h-[32px] flex place-items-center rounded-[100px] bg-radial-[at_25%_25%] from-[#5C6670] to-[#131316] to-75% text-[#FFFFFF] text-[14px] font-[600] justify-center">
            OJ
          </div>
          <CiMenuBurger />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
