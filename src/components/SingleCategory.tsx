import React from "react";

interface Props {
  imageSrc: string;
  title: String;
  imageHeight?:string
}

const SingleCategory: React.FC<Props> = ({ imageSrc, title,imageHeight }) => {
  return (
    <div className="flex  items-center justify-center  bg-white dark:bg-gray-950">
      <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-[#01A688] to-[#99DBCF] dark:from-[#99DBCF] dark:to-[#A9DDD4] ">
        <div className="rounded-[calc(1.5rem-1px)] py-8 px-12 h-48 w-48 bg-white dark:bg-gray-900 flex flex-col justify-center items-center">
          <img src={imageSrc} alt="" className={`w-20 ${imageHeight}`} />
          <h4 className="text-xl font-medium mt-[26px]">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
