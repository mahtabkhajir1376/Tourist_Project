import React from 'react';
import Link from 'next/link';

type MenuItem = {
    title: string;
    link: string;
};

type Menu = MenuItem[];

const menu: Menu = [
    { title: "تورهای ثابت", link: "/dashboard/tours" },
    { title: "سفرهای در جریان", link: "/dashboard/tours/OngoingTrips" },
];

export default function HeaderAddtour() {
    return (
        <>
            <div className="flex flex-row justify-between items-center w-[1011px] my-2 mx-auto font-iransansNumber gap-2">
                <div className="flex flex-row justify-between items-center font-iransansNumber text-sm bg-white rounded-md h-12 w-[300px]">
                    {menu.map((item) => {
                        return (
                            <Link href={item.link} key={item.link}>
                                <span className="text-sm font-medium px-6 py-4 hover:border-b-[3px] cursor-pointer border-[#01A657]">
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                <label className="input flex items-center w-[420px] shadow-[#E3EBE9] shadow-md rounded-md">
                    <input
                        type="text"
                        className="grow placeholder:text-sm placeholder:font-thin placeholder:text-[#707070]"
                        placeholder="جستجوی شهر مورد نظر"
                    />
                    <img src="/svg/search.svg" alt="Search" className="w-5 h-5" />
                </label>

                <details className="dropdown flex items-center">
                    <summary className="btn m-1 bg-white h-12 w-[160px] flex justify-between items-center hover:bg-[#ffffff] shadow-[#E3EBE9] shadow-md rounded-md">
                        <span className="font-medium text-sm">حمل و نقل</span>
                        <img src="/svg/arrowdown.svg" alt="Dropdown arrow" />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a className="hover:bg-[#01A657]">قطار</a></li>
                        <li><a className="hover:bg-[#01A657]">اتوبوس</a></li>
                        <li><a className="hover:bg-[#01A657]">هواپیما</a></li>
                    </ul>
                </details>

                <Link href={"/dashboard"}>
                    <img src="/svg/dashboard/arrow_left.svg" alt="Back arrow" className="h-8 w-8" />
                </Link>
            </div>
        </>
    );
}
