import React from "react";
import { HiBell } from "react-icons/hi";

function Navbar() {
  const navbarData = [
    { title: "پیام ها", src: "bell.svg" },
    { title: "پشتیبانی", src: "Iconly.svg" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between px-12 text-lg py-2 font-semibold">
      <div className="flex flex-row justify-between items-center w-[25%]">
        <img src="Logo.jpg" alt="" />
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
          <img src="person.svg" alt="" className="ml-3" />
          ورود / ثبت نام
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
