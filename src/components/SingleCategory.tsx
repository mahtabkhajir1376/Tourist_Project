import React from "react";

interface Props {
  imageSrc: string;
  title: String;
}

const SingleCategory: React.FC<Props> = ({ imageSrc, title }) => {
  return (
    // <div className="flex flex-col justify-center items-center w-44 h-44 py-6 px-12 rounded-3xl border-[1px] border-gradient-to-t from-[#3C005A] to-[#01A688]">
   
    // </div>
    <div className="flex  items-center justify-center  bg-white dark:bg-gray-950">
  <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-[#01A688] to-[#99DBCF] dark:from-[#99DBCF] dark:to-[#A9DDD4] ">
    <div className="rounded-[calc(1.5rem-1px)] py-8 px-12 h-48 w-42 bg-white dark:bg-gray-900 flex flex-col justify-center items-center">
    <img src={imageSrc} alt="" className="w-20" />
    <h4 className="text-xl font-medium mt-5">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;



