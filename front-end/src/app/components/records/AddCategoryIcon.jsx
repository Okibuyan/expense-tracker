import { HouseIcon } from "../svg/addCategory/HouseIcon";
import { HouseLine } from "../svg/addCategory/HouseLine";
import { IdentificationBadge } from "../svg/addCategory/IdentificationBadge";
import { IdentificationCard } from "../svg/addCategory/IdentificationCard";
import { ImageSquare } from "../svg/addCategory/ImageSquare";
import { IntersectSquare } from "../svg/addCategory/IntersectSquare";
import { Ladder } from "../svg/addCategory/Ladder";
import { ListPlus } from "../svg/addCategory/ListPlus";
import { MagnifyingGLassPlus } from "../svg/addCategory/MagnifyingGlassPlus";
import { Microphone } from "../svg/addCategory/Microphone";
import { MicrosoftExcelLogo } from "../svg/addCategory/MicrosoftExcelLogo";
import { Notepad } from "../svg/addCategory/Notepad";

export const AddCategoryIcon = () => {
  return (
    <div>
      <button
        className="input input-bordered w-[84px] flex items-center gap-2"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <HouseIcon /> <select className=""></select>
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-[312px]">
          <div className="bg-white h-full rounded-[18px]">
            <form method="dialog" className="modal-backdrop">
              {/* if there is a button in form, it will close the modal */}
              <div className="border-b border-[#E2E8F0] pb-3  grid grid-cols-6 gap-6">
                <HouseIcon />
                <HouseLine />
                <IdentificationBadge />
                <IdentificationCard />
                <Ladder />
                <IntersectSquare />
                <ImageSquare />
                <MagnifyingGLassPlus />
                <Microphone />
                <MicrosoftExcelLogo />
                <Notepad />
                <ListPlus />
              </div>{" "}
              <button>
                <div className="pt-6 flex justify-between">
                  <div className="h-6 w-6 rounded-full bg-[#0166FF]"></div>
                  <div className="h-6 w-6 rounded-full bg-[#01B3FF]"></div>
                  <div className="h-6 w-6 rounded-full bg-[#41CC00]"></div>
                  <div className="h-6 w-6 rounded-full bg-[#F9D100]"></div>
                  <div className="h-6 w-6 rounded-full bg-[#FF7B01]"></div>
                  <div className="h-6 w-6 rounded-full bg-[#AE01FF]"></div>
                  <div className="h-6 w-6 rounded-full bg-[#FF0101]"></div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
