import React from "react";
import Link from "next/link";

type MenuItem = {
  title: string;
  link: string;
};
type Menu = MenuItem[];

const menu: Menu = [
  { title: "بنر هدر", link: "/dashboard/banners/" },
  { title: "بنر اول", link: "/dashboard/banners/first_banners/" },
  { title: "بنر شهر ها", link: "/dashboard/banners/city_banners/" },
];

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center font-iransansNumber w-[88.5%] my-4 mx-auto">
      <div className="flex flex-row 2xl:w-[38%] xl:w-[38%] md:w-[38%] justify-between items-center h-12 bg-white">
        {menu.map((item) => {
          return (
            <Link href={item.link}>
              <span className="2xl:text-sm xl:text-sm md:text-[8px] lg:text-xs font-medium 2xl:px-8 xl:px-8 md:px-3 py-4 hover:border-b-[3px] cursor-pointer  border-[#01A657]">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
      <Link href="/dashboard">
        <img src="/svg/dashboard/arrow_left.svg" alt="" className="2xl:w-[38px] 2xl:h-[38px] md:w-6 md:h-6 lg:w-10 lg:h-10" />
      </Link>
    </div>
  );
};

export default Header;
