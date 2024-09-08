import React from "react";

interface Props {
  imageSrc: string;
  title: String;
}

const SingleCategory: React.FC<Props> = ({ imageSrc, title }) => {
  return (
    <div className="flex  items-center justify-center  bg-white dark:bg-gray-950">
      <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-[#01A688] to-[#99DBCF] dark:from-[#99DBCF] dark:to-[#A9DDD4] ">
        <div className="rounded-[calc(1.5rem-1px)] xl:py-8 sm:py-2 sm:px-6  xl:px-12 xl:h-48  xl:w-48 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-40  bg-white dark:bg-gray-900 flex flex-col justify-center items-center">
          <img src={imageSrc} alt="" className="xl:w-20 sm:w-8 md:w-14 lg:w-16" />
          <h4 className="xl:text-xl sm:text-xs md:text-xs lg:text-lg font-medium mt-5">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;

