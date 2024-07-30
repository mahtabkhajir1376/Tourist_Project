import React from "react";
import Link from "next/link";

const Navbar:React.FC=()=> {
  const navbarData = [
    { title: "پیام ها", src: "/svg/bell.svg" },
    { title: "پشتیبانی", src: "/svg/Iconly.svg" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between xl:px-8 xl:text-lg xl:py-2 font-semibold sm-w-full sm:px-2  sm:py-1 sm:text-sm md-text-base lg:text-lg  xl:w-full md:w-full md:px-2 md:py-1 lg:px:6 lg:py-1 lg:w-full ">
      <div className="flex flex-row justify-between items-center xl:w-[35%] sm:w-[50%] md:w-[50%] lg:w-[40%]  ">
        <a href="" className="bg-gradient-to-r from-[#7B4794] to-[#01A688]   text-transparent bg-clip-text flex flex-row justify-center items-center text-2xl font-">
          <img src="/svg/Logo.png" className="w-6 m-2" alt="" />
          سفرجو
        </a>

        {navbarData.map((item) => {
          return (
            <a
              href=""
              className="flex flex-row justify-center items-center  "
            >
              <img src={item.src} alt="" className="xl:ml-2 sm:ml-1 md-ml-1 lg:ml-1 "  />
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="xl:w-[14%] sm:w-[20%] md:w-[21%] lg:w-[17%] ">
      <Link href={"/Loginform"} className="flex flex-row justify-center" >
          <img src="/svg/person.svg" alt="" className="ml-3" />
          ورود / ثبت نام 
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
