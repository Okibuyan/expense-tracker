import { PlusIcon } from "../svg/PlusIcon";

export const AddRecords = () => {
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
          <div className="bg-white h-full w-cover rounded-[18px]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="border-b border-[#E2E8F0] flex pb-3 justify-between">
                <div className="">Add Record</div>
                <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
              </div>
              <div className="flex">
                <div className="flex flex-col p-6">
                  <div className="bg-[#F3F4F6] h-10 rounded-[100px] flex ">
                    <button className="bg-[var(--blue)] flex justify-center items-center w-[170px] rounded-[20px] px-10 h-10 text-[#F9FAFB] text-base font-normal">
                      Expense
                    </button>
                    <button className=" w-[170px] flex justify-center items-center text-[#1F2937] text-base font-normal">
                      Income
                    </button>
                  </div>
                  <div className="pt-5">
                    <label className="input w-[348px] input-bordered flex flex-col border border-[#D1D5DB] bg-[#F3F4F6] h-[76px] py-3 px-4 gap-2">
                      Amount
                      <input
                        type="text"
                        className="grow"
                        placeholder="000000"
                      />
                    </label>
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Category</span>
                      </div>
                      <select className="select select-bordered border-[#D1D5DB] bg-[#F3F4F6]">
                        <option>Choose</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="w-auto p-6">
                  <label className="form-control  ">
                    <div className="label">
                      <span className="label-text">Payee</span>
                    </div>
                    <select className="select select-bordered border-[#D1D5DB] bg-[#F3F4F6] w-[348px]">
                      <option>Write here</option>
                      <option>Star Wars</option>
                      <option>Harry Potter</option>
                      <option>Lord of the Rings</option>
                      <option>Planet of the Apes</option>
                      <option>Star Trek</option>
                    </select>
                  </label>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Note</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Write here"
                    ></textarea>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
