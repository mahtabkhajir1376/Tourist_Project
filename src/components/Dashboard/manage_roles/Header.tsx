import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-[84%] mx-auto my-4 shadow-md bg-white flex flex-row justify-end items-center 2xl:h-14 xl:h-14 md:h-9 lg:h-12 font-iransansNumber rounded-md">
 
      <h3 className="w-[55%] 2xl:text-sm xl:text-sm md:text-[10px] lg:text-xs font-medium">اضافه کردن ادمین</h3>
      <img
        src="/svg/dashboard/arrow_left.svg"
        alt=""
        className="2xl:w-[38px] 2xl:h-[38px] md:w-6 md:h-6 lg:w-8 lg:h-8"
      />
      
    </div>
  );
};

export default Header;
