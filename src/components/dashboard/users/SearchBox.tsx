import React from "react";

const SearchBox = () => {
  return (
    <div className="flex flex-row justify-between items-center 2xl:w-[80%] xl:w-[75%] md:w-[80%] my-4 mx-auto font-iransansNumber" >
      <label className="input flex items-center gap-2 2xl:w-[41.5%] xl:w-[41.5%] md:w-[60%] lg:w-[50%] ">
        <input type="text" className="grow placeholder:text-[10px] placeholder:font-thin placeholder:text-[#707070]" placeholder="جستجوی شهر مورد نظر"  />
        <img src="/svg/search.svg" alt="" className="w-4 h-4" />
      </label>
      <img src="/svg/dashboard/arrow_left.svg" alt="" className="md:w-8"  />
    </div>
  );
};

export default SearchBox;
