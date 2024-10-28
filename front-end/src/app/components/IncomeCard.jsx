import { ArrowCircleUp } from "./svg/ArrowCircleUp";
import { EllipseIcon } from "./svg/EllipseIcon";

export const IncomeCard = () => {
  return (
    <div className="bg-white h-full rounded-[18px] font-sans">
      <div className="border-b border-[#E2E8F0] py-4 px-6 flex items-center gap-2">
        <EllipseIcon />
        <p>Your income</p>
      </div>
      <div className="py-4 px-6 flex flex-col gap-6">
        <div>
          <p className="text-[36px] font-semibold leading-10 ">50000000</p>
          <p className="text-[#64748B] text-lg leading-7">Your Income Amount</p>
        </div>
        <div className="flex items-center gap-2">
          <ArrowCircleUp />
          <p className="text-lg font-normal">32% from last month</p>
        </div>
      </div>
    </div>
  );
};
