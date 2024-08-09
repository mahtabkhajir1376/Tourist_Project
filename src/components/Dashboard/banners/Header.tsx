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
  { title: "بنر شهر ها", link: "" },
];

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center font-iransansNumber w-[88.5%] my-4 mx-auto">
      <div className="flex flex-row w-[38%] justify-between items-center h-12 bg-white">
        {menu.map((item) => {
          return (
            <Link href={item.link}>
              <span className="text-sm font-medium px-8 py-4 hover:border-b-[3px] cursor-pointer  border-[#01A657]">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
      <Link href="/dashboard">
        <img src="/svg/dashboard/arrow_left.svg" alt="" className="" />
      </Link>
    </div>
  );
};

export default Header;
