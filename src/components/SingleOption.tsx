import React from "react";

export type Option = {
  imageSrc: string;
  title: string;
  describtion: string;
  bgImage: string;
  position:string
};

const SingleOption: React.FC<Option> = ({
  imageSrc,
  title,
  describtion,
  bgImage,
  position
}) => {
  return (
    <div className={` bg-cover  w-[28%] h-[396px] flex flex-col justify-center items-center relative `}>
      <img src={bgImage} alt="" className="" />
      <div className={`flex flex-col justify-center items-start w-[75%]  pr-12 pb-2 absolute  ${position}`} >
        <img src={imageSrc} alt="" className="w-10" />
        <h4 className="text-xl font-iransans font-medium mt-5 ">{title}</h4>
        <p className="text-lg font-light mt-2">{describtion}</p>
      </div>
    </div>
  );
};

export default SingleOption;
