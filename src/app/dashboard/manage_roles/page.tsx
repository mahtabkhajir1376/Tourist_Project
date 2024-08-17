import React from "react";
import Header from "@/components/dashboard/manage_roles/Header";
import SingleUser from "@/components/dashboard/users/SingleUser";
import Searchuser from "@/components/dashboard/manage_roles/Searchuser";
import Button from "@/components/landing/Button";

function page() {
  return (
    <div className="w-full relative h-lvh  overflow-y-auto font-iransansNumber">
      <Header />
      <Searchuser />
      <h4 className="w-[84%] mx-auto my-6 bg-white rounded-md shadow-md  2xl:text-sm xl:text-sm md:text-[10px] lg:text-xs font-medium flex justify-center 2xl:h-14 xl:h-14 md:h-9 lg:h-12 items-center">
        لیست ادمین ها
      </h4>
      <div className=" w-[84%] mx-auto my-6 overflow-y-auto h-[200px]">
        <SingleUser admin={true} />
        <SingleUser admin={true} />
        <SingleUser admin={true} />
        <SingleUser admin={true} />
        <SingleUser admin={true} />
        <SingleUser admin={true} />
      </div>
      <div className="flex flex-row justify-end w-[84%] mx-auto my-0 ">
        <Button
          bgColor="bg-[#01A657]"
          borderRadius="rounded-md"
          fontSize="font-medium 2xl:text-sm xl:text-sm md:text-xs lg:text-sm font-iransansNumber "
          titleBtn="ثبت اطلاعات"
          width="2xl:w-[16%] xl:w-[16%] md:w-[25%] lg:w-[23%] h-10"
          padding="px-2 py-2"
          textColor="text-white"
          margin="my-11"
        />
      </div>
    </div>
  );
}

export default page;
