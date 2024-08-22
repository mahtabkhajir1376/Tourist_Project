import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col w-[67%] mx-auto py-11 mb-24">
      <div className=" bg-gradient-to-r from-[#3C005A] to-[#01A688]   text-transparent bg-clip-text  w-full  my-2 mr-2 flex flex-row justify-start items-center 2xl:text-2xl xl:text-2xl lg:text-lg font-demiBold ">
        <img
          src="/svg/logo-new/Logo_dashboard.svg"
          className="2xl:w-14 ml-2 xl:w-12 sm:w-6 lg:w-8"
          alt=""
        />
        سفرجو
      </div>
      <h1 className="xl:px-12 sm:px-6 md:px-6  lg:px-6 py-2 mr-5  bg-gradient-to-r from-[#3C005A] to-[#01A688] inline-block  text-transparent bg-clip-text  font-demiBold xl:text-[32px] sm:text-xl md:text-2xl lg:text-3xl ">
        سفرجو دری به سوی رویایی ترین خاطرات (:
      </h1>
      <span className="  bg-gradient-to-r  from-[#7B479400]  via-[#51687F58]   to-[#01A657]  via-[#7B4794]  via-[#28886B52]   to-[#01A65700]     w-[80%] h-[2px]  mx-auto mt-10">
      </span>
    </div>
  );
};

export default Header;
