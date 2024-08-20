import React from "react";
import ProgressTourBanner from "./ProgressTourBanner";

const UplodeStoryBanner = () => {
  return (
    <div className="w-[90%] mx-auto my-4 bg-white shadow-md rounded-md h-[450px] px-8 py-6">
      <ProgressTourBanner />
      <ProgressTourBanner />
      <div className="flex flex-row justify-end items-center">
      <button
          className="flex flex-row justify-center items-center bg-white 2xl:w-[12%] md:w-[25%] lg:w-[20%] xl:w-[20%] 2xl:py-2  rounded-md border-[1px] border-[#01A657]"
        >
          <img src="/svg/showlist/positive_icon.svg" alt="md:w-2 md:h-2 lg:w-3 lg:h-3" />
          <p className="mr-2 text-[#01A657] 2xl:text-sm md:text-[10px] lg:text-xs font-medium">
            اضافه کردن 
          </p>
        </button>
      </div>
    </div>
  );
};

export default UplodeStoryBanner;
