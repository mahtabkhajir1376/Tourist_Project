import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className='bg-header-image h-[587px] w-full bg-cover'>
      <Navbar />
      <h1 className="px-12  py-14 bg-gradient-to-r from-[#3C005A] to-[#01A688] inline-block  text-transparent bg-clip-text text-bold text-[32px]">سفرجو دری به سوی رویایی ترین خاطرات (:</h1>
      
    </div>
  );
}

export default Header;
