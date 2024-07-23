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
    <div className={`border-[1px] border-[#01A657]  rounded-3xl flex flex-row justify-center items-center px-6 py-5 relative  ${span}`}>
      <img src={ImageSrc} alt="" className="h-full w-full  rounded-[20px]  z-0"  />
      <div className={`z-10 absolute text-white ${position}` } >
      <h5 className="text-[22px] font-bold mb-4">{header}</h5>
      <li className="text-sm font-regular">{capacity}</li>
    </div>
    </div>
  );
};

export default ImageLayout;
