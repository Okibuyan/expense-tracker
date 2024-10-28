import { Logo } from "./svg/Logo";
import { LogoIcon } from "./svg/LogoIcon";
import { Shape } from "./svg/Shape";
import { TouchLogo } from "./svg/TouchLogo";

export default function GeldCard() {
  return (
    <div className="w-full h-full bg-[var(--blue)] rounded-[18px] relative">
      <div className="flex flex-col justify-between p-9 h-full">
        <div className="flex items-center gap-1 ">
          <LogoIcon fill="#FFF" height="20px" width="20px" />
          <Logo fill="#FFF" height="14px" width="41px" />
        </div>
        <div className="">
          <p className="text-white opacity-50">Cash</p>
          <div className="flex justify-between">
            <p className="text-white text-[24px]">1000000000</p>
            <TouchLogo />
          </div>
        </div>
      </div>
    </div>
  );
}
