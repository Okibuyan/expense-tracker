import { LogoIcon } from "./svg/LogoIcon";
import { PlusIcon } from "./svg/PlusIcon";

export default function Header() {
  return (
    <div className="flex h-[72px] w-[1440px] justify-between">
      <div className="flex items-center gap-6">
        <LogoIcon />
        <div className="text-base font-semibold">Dashboard</div>
        <div className="text-base font-normal">Records</div>
      </div>
      <div className="flex items-center gap-6">
        <button
          className="flex items-center justify-center gap-1 py-0 h-8 w-[99px] bg-[var(--blue)] rounded-[20px]"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <PlusIcon /> <p className=" text-white text-sm">Record</p>
        </button>

        <img src="/Avatar.png" height="40px" width="40px" />
      </div>
    </div>
  );
}
