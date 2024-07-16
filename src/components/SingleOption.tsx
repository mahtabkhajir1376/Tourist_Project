import React from "react";

export type Option = {
  imageSrc: string;
  title: string;
  describtion: string;
  bgImage: string;
};

const SingleOption: React.FC<Option> = ({
  imageSrc,
  title,
  describtion,
  bgImage,
}) => {
  return (
    <div className={`${bgImage} bg-cover w-[30%] h-[396px] flex justify-center items-center`}>
      <div className="flex flex-col justify-center items-start w-[68%]  pr-12" >
        <img src={imageSrc} alt="" className="w-10" />
        <h4 className="text-xl font-iransans font-bold mt-5 ">{title}</h4>
        <p className="text-lg font-light mt-2">{describtion}</p>
      </div>
    </div>
  );
};

export default SingleOption;
