import { CategoryHousing } from "./svg/CategoryHousing";

export const LastRecordsCard = () => {
  return (
    <div className="bg-white h-full w-full rounded-[18px] font-sans">
      <div className="border-b border-[#E2E8F0] py-4 px-6 flex items-center ">
        <p className="font-semibold text-base">Last Records</p>
      </div>
      <div className=" w-full px-6">
        <div className="flex justify-between py-5 border-t border-[#E2E8F0]">
          <div className="flex gap-4">
            <CategoryHousing />
            <div>
              <p>Lending & Renting</p>
              <p className="text-[#6B7280] text-xs">3 hours ago</p>
            </div>
          </div>
          <div className="text-[#84CC16] text-[16px] font-semibold">
            + 1000000
          </div>
        </div>
        <div className="flex justify-between py-5 border-t border-[#E2E8F0]">
          <div className="flex gap-4">
            <CategoryHousing />
            <div>
              <p>Lending & Renting</p>
              <p className="text-[#6B7280] text-xs">3 hours ago</p>
            </div>
          </div>
          <div className="text-[#84CC16] text-[16px] font-semibold">
            + 1000000
          </div>
        </div>
        <div className="flex justify-between py-5 border-t border-[#E2E8F0]">
          <div className="flex gap-4">
            <CategoryHousing />
            <div>
              <p>Lending & Renting</p>
              <p className="text-[#6B7280] text-xs">3 hours ago</p>
            </div>
          </div>
          <div className="text-[#84CC16] text-[16px] font-semibold">
            + 1000000
          </div>
        </div>
        <div className="flex justify-between py-5 border-t border-[#E2E8F0]">
          <div className="flex gap-4">
            <CategoryHousing />
            <div>
              <p>Lending & Renting</p>
              <p className="text-[#6B7280] text-xs">3 hours ago</p>
            </div>
          </div>
          <div className="text-[#84CC16] text-[16px] font-semibold">
            + 1000000
          </div>
        </div>
        <div className="flex justify-between py-5 border-t border-[#E2E8F0]">
          <div className="flex gap-4">
            <CategoryHousing />
            <div>
              <p>Lending & Renting</p>
              <p className="text-[#6B7280] text-xs">3 hours ago</p>
            </div>
          </div>
          <div className="text-[#84CC16] text-[16px] font-semibold">
            + 1000000
          </div>
        </div>
      </div>
    </div>
  );
};
