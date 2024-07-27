import React from "react";

export type Option = {
  imageSrc: string;
  title: string;
  describtion: string;
  width:string
};

const SingleOption: React.FC<Option> = ({
  imageSrc,
  title,
  describtion,
  width
}) => {
  return (
    <div className={` 2xl:w-[26.6%] sm:w-[32%]  2xl:h-44 xl:h-44 sm:h-24 flex flex-col justify-center items-center shadow-lg rounded-md  `}>
      <div className={`flex flex-row justify-between items-start  ${width} `} >
        <img src={imageSrc} alt="" className="2xl:w-7 sm:w-5 mx-0 my-auto " />
        <div className="flex flex-col items-start justify-between sm:mr-2">
        <h4 className="2xl:text-xl font-iransans font-medium sm:text-sm  ">{title}</h4>
        <p className="2xl:text-lg font-light mt-2 sm:text-xs">{describtion}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleOption;
