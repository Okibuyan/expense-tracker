import { useState } from "react";
import { AnchorSimple } from "../svg/addCategory/AnchorSimple";
import { Baseball } from "../svg/addCategory/Baseball";
import { BezierCurve } from "../svg/addCategory/BezierCurve";
import { Exam } from "../svg/addCategory/Exam";
import { Exclude } from "../svg/addCategory/Exclude";
import { GlobeSimple } from "../svg/addCategory/GlobeSimple";
import { HourGlassMedium } from "../svg/addCategory/HourGlassMedium";
import { HouseIcon } from "../svg/addCategory/HouseIcon";
import { HouseLine } from "../svg/addCategory/HouseLine";
import { IdentificationBadge } from "../svg/addCategory/IdentificationBadge";
import { IdentificationCard } from "../svg/addCategory/IdentificationCard";
import { ImageSquare } from "../svg/addCategory/ImageSquare";
import { IntersectSquare } from "../svg/addCategory/IntersectSquare";
import { Ladder } from "../svg/addCategory/Ladder";
import { Leaf } from "../svg/addCategory/Leaf";
import { ListPlus } from "../svg/addCategory/ListPlus";
import { MagnifyingGLassPlus } from "../svg/addCategory/MagnifyingGlassPlus";
import { Microphone } from "../svg/addCategory/Microphone";
import { MicrosoftExcelLogo } from "../svg/addCategory/MicrosoftExcelLogo";
import { Notepad } from "../svg/addCategory/Notepad";
import { NumberCircleSeven } from "../svg/addCategory/NumberCircleSeven";
import { NumberFive } from "../svg/addCategory/NumberFive";
import { OrangeSlice } from "../svg/addCategory/OrangeSlice";
import { Peace } from "../svg/addCategory/Peace";
import { Pencil } from "../svg/addCategory/Pencil";
import { Question } from "../svg/addCategory/Question";
import { RoadHorizon } from "../svg/addCategory/RoadHorizon";
import { ToiletPaper } from "../svg/addCategory/ToiletPaper";
import { Vignette } from "../svg/addCategory/Vignette";
import { Watch } from "../svg/addCategory/Watch";

export const AddCategoryIcon = () => {
  //   const [iconColor, setIconColor] = useState("");

  //   const handleColor = (iconColor) => {
  //     setIconColor(iconColor);
  //   };
  // const handleIcon=()=>{

  // }

  let colors = [
    { color: "#01B3FF" },
    { color: "#41CC00" },
    { color: "#F9D100" },
    { color: "#FF7B01" },
    { color: "#AE01FF" },
    { color: "#FF0101" },
  ];

  let icons = [
    { name: "HouseLine", icon: <HouseLine /> },
    {
      name: "IdentificationBadge",
      icon: <IdentificationBadge />,
    },
    {
      name: "IdentificationCard",
      icon: <IdentificationCard />,
    },
    { name: "Ladder", icon: <Ladder /> },
    { name: "IntersectSquare", icon: <IntersectSquare /> },
    { name: "ImageSquare", icon: <ImageSquare /> },
    { name: "MagnifyingGLassPlus", icon: <MagnifyingGLassPlus /> },
    { name: "Microphone", icon: <Microphone /> },
    { name: "MicrosoftExcelLogo", icon: <MicrosoftExcelLogo /> },
    { name: "Notepad", icon: <Notepad /> },
    { name: "ListPlus", icon: <ListPlus /> },
    { name: "Leaf", icon: <Leaf /> },
    { name: "NumberFive", icon: <NumberFive /> },
    { name: "NumberCircleSeven", icon: <NumberCircleSeven /> },
    { name: "RoadHorizon", icon: <RoadHorizon /> },
    { name: "HourGlassMedium", icon: <HourGlassMedium /> },
    { name: "AnchorSimple", icon: <AnchorSimple /> },
    { name: "BezierCurve", icon: <BezierCurve /> },
    { name: "Exclude", icon: <Exclude /> },
    { name: "Vignette", icon: <Vignette /> },
    { name: "Baseball", icon: <Baseball /> },
    { name: "Question", icon: <Question /> },
    { name: "Exam", icon: <Exam /> },
    { name: "Watch", icon: <Watch /> },
    { name: "GlobeSimple", icon: <GlobeSimple /> },
    { name: "OrangeSlice", icon: <OrangeSlice /> },
    { name: "Peace", icon: <Peace /> },
    { name: "ToiletPaper", icon: <ToiletPaper /> },
    { name: "Pencil", icon: <Pencil /> },
  ];
  return (
    <div>
      <button
        className="input input-bordered w-[84px] flex items-center gap-2 "
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <HouseIcon /> <select className=""></select>
      </button>

      <dialog id="my_modal_2" className="modal left-[-75px] top-[190px]">
        <div className="modal-box w-[312px]">
          <div className="bg-white h-full rounded-[18px]">
            <form method="dialog" className="modal-backdrop">
              {/* if there is a button in form, it will close the modal */}
              <div className="border-b border-[#E2E8F0] pb-6  grid grid-cols-6 gap-6">
                {icons?.map((icon, index) => (
                  <button key={index}>{icon?.icon}</button>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                {colors.map((color, index) => {
                  return (
                    <button
                      // onClick={() => {
                      //   handleColor(color?.color);
                      // }}
                      key={index}
                      style={{ backgroundColor: color?.color }}
                      className="h-6 w-6 rounded-full "
                    ></button>
                  );
                })}
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
