"use client";
import { PlusIcon } from "../svg/PlusIcon";
import { useState } from "react";

export const AddRecords = () => {
  const [isClicked, setIsClicked] = useState();
  const [changeColor, setChangeColor] = useState();
  const changeBgColor = () => {
    setIsClicked(!isClicked);
    setChangeColor(!changeColor);
  };

  return (
    <div>
      <button
        className="flex items-center justify-center gap-1 py-0 h-8 w-full bg-[var(--blue)] rounded-[20px]"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <PlusIcon /> <p className=" text-white text-sm">Add</p>
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box w-auto max-w-none">
          <div className="bg-white h-cover w-cover rounded-[18px]">
            {/* if there is a button in form, it will close the modal */}

            <div className="border-b border-[#E2E8F0] flex px-6 pb-3 justify-between">
              <div className="">Add Record</div>
              <button
                className="btn btn-sm btn-circle btn-ghost "
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
            </div>
            <div className="flex">
              <div className="flex flex-col px-6 pt-5">
                <div className="bg-[#F3F4F6] h-10 rounded-[100px] flex justify-bet">
                  <button
                    onClick={changeBgColor}
                    className={`flex justify-center items-center w-[170px] rounded-[20px] px-10 h-10  text-base font-normal ${
                      isClicked
                        ? "bg-[var(--blue)] text-[#F9FAFB]"
                        : "bg-[var(--bggray)] text-[#1F2937]"
                    }`}
                  >
                    Expense
                  </button>
                  <button
                    onClick={changeBgColor}
                    className={`w-[170px] flex justify-center items-center rounded-[20px]
                        ${
                          isClicked
                            ? "bg-[var(--bggray)] text-[#1F2937]"
                            : "bg-[var(--bggreen)] text-[#F9FAFB]"
                        }  text-base font-normal`}
                  >
                    Income
                  </button>
                </div>
                <div className="pt-5 flex flex-col gap-4">
                  <label className="input w-[348px] input-bordered flex flex-col border border-[#D1D5DB] bg-[#F3F4F6] h-[76px] py-3 px-4 gap-2">
                    Amount
                    <input type="text" className="grow" placeholder="000000" />
                  </label>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">Category</span>
                    </div>
                    <select className="select select-bordered border-[#D1D5DB] bg-[#F3F4F6]">
                      <option>Choose</option>
                      <option>Food & Drinks</option>
                      <option>Shopping</option>
                      <option>Housing</option>
                      <option>Transportation</option>
                      <option>Vehicle</option>
                      <option>Life & Entertainment</option>
                      <option>Communication, PC</option>
                      <option>Financial Expenses</option>
                      <option>Investments</option>
                      <option>Income</option>
                      <option>Others</option>
                    </select>
                  </label>
                  <div className="flex  gap-3">
                    <div className="flex flex-col">
                      <label>Date</label>
                      <input
                        className="bg-[#F3F4F6] rounded-[8px] w-[168px] border border-[#D1D5DB] p-[8px]"
                        type="date"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Time</label>
                      <input
                        className="bg-[#F3F4F6] rounded-[8px] w-[168px] border border-[#D1D5DB] p-[8px]"
                        type="time"
                      />
                    </div>
                  </div>
                </div>
                <form method="dialog">
                  <button
                    className={`${
                      changeColor ? "bg-[var(--blue)]" : "bg-[var(--bggreen)]"
                    } mt-3 flex justify-center items-center w-full rounded-[20px] h-10 text-[#F9FAFB] text-base font-normal`}
                  >
                    Add Record
                  </button>
                </form>
              </div>
              <div className="w-auto pt-5 px-6">
                <label className="form-control  ">
                  <div className="label">
                    <p className="text-base leading-6">Payee</p>
                  </div>
                  <select className="select select-bordered border-[#D1D5DB] bg-[#F3F4F6] w-[348px]">
                    <option>Write here</option>
                  </select>
                </label>
                <label className="form-control  h-full">
                  <div className="label">
                    <span className="label-text">Note</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered bg-[var(--bggray)] h-[260px]"
                    placeholder="Write here"
                  ></textarea>
                </label>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
