"use client"
import React from "react";
import Link from "next/link";

type Props = {
  bgColor: string;
};

const Navbar: React.FC<Props> = ({ bgColor }) => {
  const navbarData = [
    { title: "پیام ها", src: "/svg/bell.svg", href: "/messages" },
    { title: "پشتیبانی", src: "/svg/Iconly.svg", href: "/support" },
  ];

  return (
    <nav
      className={`flex flex-row items-center justify-between xl:px-8 xl:text-base xl:py-2 ${bgColor} font-semibold sm-w-full sm:px-2 sm:py-1 sm:text-sm md-text-base lg:text-lg xl:w-full md:w-full md:px-2 md:py-1 lg:px:6 lg:py-1 2xl:py-3 lg:w-full font-iransans`}
    >
      <div className="flex flex-row justify-between items-center xl:w-[35%] sm:w-[50%] md:w-[50%] lg:w-[40%]">
        <a
          href=""
          className="bg-gradient-to-r from-[#7B4794] to-[#01A688] text-transparent bg-clip-text flex flex-row justify-center items-center text-2xl font-iransansNumber font-demiBold"
        >
          <img src="/svg/logo-new/Logo_dashboard.svg" className="w-8 m-2" alt="Logo" />
          سفرجو
        </a>

        {navbarData.map((item, index) => (
          <Link href={item.href} key={index} className="flex flex-row justify-center items-center">
            <img src={item.src} alt={item.title} className="xl:ml-2 sm:ml-1 md:ml-1 lg:ml-1 w-5 h-5" />
            {item.title}
          </Link>
        ))}
      </div>
      <div className="xl:w-[14%] sm:w-[20%] md:w-[21%] lg:w-[17%]">
        <Link href="/Loginform" className="flex flex-row justify-center">
          <img src="/svg/person.svg" alt="Person" className="ml-3 w-5 h-5" />
          ورود / ثبت نام
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
