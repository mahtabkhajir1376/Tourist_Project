import React from "react";
import Navbar from "../Navbar";
import FilterBox from "./FilterBox";

const Header:React.FC=()=> {
  return (
    <div className='bg-header-image h-[587px] xl:w-full xl:bg-cover sm:bg-cover  sm:w-full md:w-full lg:w-full relative'>
      <Navbar />
      <h1 className="xl:px-12 sm:px-6 md:px-6  lg:px-6 py-14 bg-gradient-to-r from-[#3C005A] to-[#01A688] inline-block  text-transparent bg-clip-text font-iransans font-bold xl:text-[32px] sm:text-xl md:text-2xl lg:text-3xl ">سفرجو دری به سوی رویایی ترین خاطرات (:</h1>
      <FilterBox/>
    </div>
  );
}

export default Header;
