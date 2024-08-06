import React from "react";
import PersonalInformation from "@/components/dashboard/users/PersonalInformation";
import BankInformation from "@/components/dashboard/users/BankInformation";
import Link from "next/link";

function page() {
  return (
    <div className="w-full flex flex-col  items-center font-iransansNumber">
      <div className="flex flex-row justify-between items-center w-[88.5%] my-4 mx-auto font-iransansNumber">
        <h3 className="text-[#333333] text-base font-medium  ">
          جزئیات اطلاعات کاربر{" "}
        </h3>
        <Link href="/dashboard/users">
        <img src="/svg/dashboard/arrow_left.svg" alt=""  />
        </Link>
      </div>
      <div className="bg-white shadow-2xl rounded-xl  w-[88.5%] mx-auto my-4 h-[513px] py-11 ">
        <div className="my-0 mx-auto w-[88.5%]">
          <div className="flex flex-row justify-between items-center w-[12%] mb-8 ">
            <img src="/svg/person.svg" alt="" />
            <h5 className="text-sm font-regular">اطلاعات فردی</h5>
          </div>
        </div>
        <PersonalInformation />
        <BankInformation />
      </div>
    </div>
  );
}

export default page;
