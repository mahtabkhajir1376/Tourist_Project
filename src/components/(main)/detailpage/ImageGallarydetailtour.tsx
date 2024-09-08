import React from "react";

const ImageGallarydetailtour = () => {
  return (
    <>
    <div className="grid grid-cols-2 2xl:h-[422px] 2xl:w-[90%] sm:w-[95%] mx-auto my-0 2xl:gap-6 sm:gap-3 mt-20 lg:gap-4 ">
      <img
        src="/image/Image 05.svg"
        alt=""
        className="col-span-1 bg-slate-500 rounded-xl"
      />
      <div className="col-span-1  grid grid-rows-2 2xl:gap-5 sm:gap-2 lg:gap-3 ">
        <div className="row-span-1 grid grid-cols-2 sm:gap-2">
          <img src="/image/Image 02.svg" alt="" className="col-span-1" />
          <img src="/image/Image 01.svg" alt="" className="col-span-1" />
        </div>
        <div className="row-span-1 grid grid-cols-2 sm:gap-2 ">
        <img src="/image/Image 04.svg" alt="" className="col-span-1" />
        <img src="/image/Image 03.svg" alt="" className="col-span-1" />
        </div>
      </div>
    </div>
    <span className="border-spacing-y-4 border-dashed border-b-2 w-[90%] mx-auto my-0 flex flex-row pt-14 "></span>
    </>
  );
};

export default ImageGallarydetailtour;
