import React from "react";
import UplodeBanner from "../banners/UplodeBanner";

const ProgressTourBanner = () => {
  return (
    <div className="flex flex-row justify-between items-start w-[57%]  font-iransansNumber mb-6 ">
      <UplodeBanner
        border="border-2 border-[#01A657] border-dashed"
        rounded="rounded-xl"
        shadow="none"
        width="w-[44%]"
        height="h-[150px]"
      />
      <div className="flex flex-row justify-between  items-start w-[53%]">
        <span className="text-sm font-medium w-[20%]">روز اول:</span>
        <div className="h-[150px] w-[80%]">
        <textarea className="border-2 border-[#01A657] h-[120px] w-[81.5%] rounded-md px-2 text-sm font-medium py-2 outline-none" maxLength={200}></textarea>
        <br />
        <span className="text-[10px] font-light text-[#707070]">توضیحات مورد نظر خود را تا 200 کاراکتر بنویسید .</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressTourBanner;
