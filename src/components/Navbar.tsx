import React from "react";
import { HiBell } from "react-icons/hi";

function Navbar() {
  const navbarData = [{ title: "پیام ها", src: "bell.svg" }, { title: "پشتیبانی",src:"Iconly.svg" }];

  return (
    <nav className="flex flex-row items-center justify-between px-12 text-lg py-2 font-semibold">
      <div className="w-[10%]">
        <a href="" className="flex flex-row justify-center items-center">
          ورود / ثبت نام
          <img src="person.svg" alt="" className="ml-2" />
        </a>
      </div>
      <div className="flex flex-row justify-between items-center w-[22%]">
    {
        navbarData.map((item)=>{
            return(
                <a href="" className="flex flex-row justify-center items-center mr-2">
                {item.title}
                <img src={item.src} alt=""  className="ml-2"/>
              </a>
            )
        })
    }
       
        <img src="logo.jpg" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
