"use client";
import { HouseIcon } from "../svg/addCategory/HouseIcon";
import { PlusIcon } from "../svg/PlusIcon";
import { AddCategoryIcon } from "./AddCategoryIcon";

export const AddCategory = () => {
  return (
    <div>
      <button
        className="flex gap-2"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <PlusIcon fill="var(--blue)" />
        <p>Add Category</p>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="bg-white h-full rounded-[18px]">
            {/* if there is a button in form, it will close the modal */}
            <div className="border-b border-[#E2E8F0] pb-3 flex items-center justify-between">
              <div className="text-xl font-semibold">Add Category</div>
              <button
                className="btn btn-sm btn-circle btn-ghost "
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                ✕
              </button>
            </div>
            <div className="pt-6">
              <div className="flex gap-3 pb-8">
                <AddCategoryIcon />
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <form method="dialog">
              <button className="flex items-center justify-center leading-6  h-10 w-full bg-[#16A34A] text-[#F9FAFB] rounded-[20px]">
                Add
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
