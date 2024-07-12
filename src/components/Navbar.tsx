import React from "react";
import { HiBell } from "react-icons/hi";

function Navbar() {
  const navbarData = [
    { title: "پیام ها", src: "/svg/bell.svg" },
    { title: "پشتیبانی", src: "/svg/Iconly.svg" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between px-12 text-lg py-2 font-semibold">
      <div className="flex flex-row justify-between items-center w-[25%]">
        <a href="" className="bg-gradient-to-r from-[#7B4794] to-[#01A688]   text-transparent bg-clip-text flex flex-row justify-center items-center text-2xl font-">
          <img src="/svg/new.png" className="w-10 m-2" alt="" />
          سفرجو
        </a>

        {navbarData.map((item) => {
          return (
            <a
              href=""
              className="flex flex-row justify-center items-center mr-2"
            >
              <img src={item.src} alt="" className="ml-3" />
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="w-[10%]">
        <a href="" className="flex flex-row justify-center items-center">
          <img src="/svg/person.svg" alt="" className="ml-3" />
          ورود / ثبت نام
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
