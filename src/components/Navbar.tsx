import React from "react";

const Navbar:React.FC=()=> {
  const navbarData = [
    { title: "پیام ها", src: "/svg/bell.svg" },
    { title: "پشتیبانی", src: "/svg/Iconly.svg" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between mx-auto my-0  py-2 w-[90%]  ">
      <div className="flex flex-row justify-between items-center w-[25%]">
        <a href="" className="bg-gradient-to-r from-[#7B4794] to-[#01A688]   text-transparent bg-clip-text flex flex-row justify-center items-center  text-2xl font-bold">
          <img src="/svg/Logo.png" className="w-6 m-2 " alt="" />
          سفرجو
        </a>

        {navbarData.map((item) => {
          return (
            <a
              href=""
              className="flex flex-row justify-center items-center mr-2 font-demiBold text-lg"
            >
              <img src={item.src} alt="" className="ml-3" />
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="w-[13%] ">
        <a href="" className="flex flex-row justify-center items-center text-lg font-demiBold">
          <img src="/svg/person.svg" alt="" className="ml-3 font-demiBold text-lg " />
          ورود / ثبت نام
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
