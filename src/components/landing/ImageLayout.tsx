import React from "react";

type ImageLayout = {
  ImageSrc: string;
  span:string,
  capacity:string,
  header:string,
  position?:string
};

const ImageLayout: React.FC<ImageLayout> = ({ ImageSrc,span,header,capacity,position }) => {
  return (
    <div className={`border-[1px] border-[#01A657]  rounded-3xl flex flex-row justify-center items-center 2xl:px-6 2xl:py-5 sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-4 lg:py-4 relative  ${span}`}>
      <img src={ImageSrc} alt="" className="h-full w-full  rounded-[20px]  z-0"  />
      <div className={`z-10 absolute text-white ${position}` } >
      <h5 className="2xl:text-[22px] sm:text-sm lg:text-lg  font-bold mb-4 ">{header}</h5>
      <li className="2xl:text-sm font-regular sm:text-[8px] lg:text-[12px] ">{capacity}</li>
    </div>
    </div>
  );
};

export default ImageLayout;
