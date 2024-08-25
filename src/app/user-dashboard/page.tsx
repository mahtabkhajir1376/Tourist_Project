import React from "react";
import PersonalInformation from "@/components/dashboard/users/PersonalInformation";
import BankInformation from "@/components/dashboard/users/BankInformation";
import Button from "@/components/landing/Button";
import Link from "next/link";

function page() {
  return (
    <div className=" w-full font-iransansNumber ">
      <div className="bg-white rounded-md shadow-md my-4 mx-auto w-[83%] h-[724px] pt-9">
        <div className="flex flex-row justify-start items-center  w-[88.5%] mx-auto mb-10">
          <img src="/svg/person.svg" alt="" />
          <h5 className="2xl:text-sm xl:text-sm md:text-xs lg:text-sm font-regular mr-3">
            اطلاعات فردی
          </h5>
        </div>
        <PersonalInformation />
        <BankInformation />
      </div>
      <Link href=""  className="flex flex-row justify-end items-center w-[83%] mb-5 mx-auto ">
        <Button
          bgColor="bg-[#01A657]"
          titleBtn="ثبت اطلاعات"
          width="w-[25%] "
          fontSize="text-sm font-medium"
          textColor="text-white"
          borderRadius="rounded-md"
          padding=" py-3"
          margin="my-10"
        />
      </Link>
    </div>
  );
}

export default page;
