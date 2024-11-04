"use client";
import Header from "../components/Header";
import { AddCategory } from "../components/records/AddCategory";
import { AddRecords } from "../components/records/AddRecords";
import { CategoryHousing } from "../components/svg/CategoryHousing";
import { EyeIcon } from "../components/svg/EyeIcon";
import { LeftArrowIcon } from "../components/svg/LeftArrowIcon";
import { RightArrowIcon } from "../components/svg/RightArrowIcon";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="flex justify-center py-8 w-full  bg-[var(--lightgray)]">
        <div className="w-[1440px] flex gap-6">
          <div className="w-[250px] px-4 py-6 flex flex-col border border-[#E5E7EB] bg-[#F9FAFB] rounded-[12px] gap-6">
            <h1 className="text-2xl font-semibold leading-8">Records</h1>
            <AddRecords />
            {/*  */}

            <input
              className="px-4 rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] text-[#A3A3A3] text-base font-normal"
              type="text"
              placeholder="Search"
            />
            <div className=" flex flex-col gap-4">
              <h1 className="text-base font-semibold leading-6 text-[#1F2937]">
                Types
              </h1>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio h-5 w-5"
                  defaultChecked
                />
                All
              </div>
              <div className="flex gap-2">
                <input type="radio" name="radio-1" className="radio h-5 w-5" />{" "}
                Income
              </div>
              <div className="flex gap-2">
                <input type="radio" name="radio-1" className="radio h-5 w-5" />{" "}
                Expense
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <h1 className="text-base font-semibold leading-6 text-[#1F2937]">
                Category
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Food & Drinks
                </div>
                <div className="flex items-center gap-2  text-base leading-6">
                  <EyeIcon />
                  Shopping
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Housing
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Transportation
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Vehicle
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Life & Entertainment
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Communication, PC
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Financial Expenses
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Investments
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Income
                </div>
                <div className="flex items-center gap-2 text-[#1F2937] text-base leading-6">
                  <EyeIcon />
                  Others
                </div>
              </div>
              <AddCategory />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between pb-4">
              <div className="flex gap-4 items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#E5E7EB] rounded-lg">
                  <LeftArrowIcon className="" />
                </div>

                <p>Last 30 Days</p>
                <div className="flex items-center justify-center w-8 h-8 bg-[#E5E7EB] rounded-lg">
                  <RightArrowIcon />
                </div>
              </div>
              <select className="select select-bordered w-[148px] max-w-xs">
                <option>Newest first</option>
                <option>Amount</option>
                <option>Remark</option>
              </select>
            </div>

            <div className="h-full w-full ">
              <div className="py-4 flex items-center ">
                <p className="font-semibold text-base">Today</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
              </div>
              <div className="py-4 flex items-center ">
                <p className="font-semibold text-base">Yesterday</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
                <div className="flex justify-between py-3 px-6 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="flex gap-4">
                    <CategoryHousing />
                    <div>
                      <p>Lending & Renting</p>
                      <p className="text-[#6B7280] text-xs">8:00</p>
                    </div>
                  </div>
                  <div className="text-[#84CC16] text-[16px] font-semibold">
                    + 1000000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
