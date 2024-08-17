import React from "react";
import Category from "@/components/dashboard/banners/first_banners/Category";
import UplodeBanner from "@/components/dashboard/banners/UplodeBanner";
import Header from "@/components/dashboard/banners/Header";
import Button from "@/components/landing/Button";

const banner = ["بنر شماره 1", "بنر شماره 2", "بنر شماره 3"];

function page() {
  return (
    <div className="w-full  relative h-lvh  overflow-y-auto">
      <Header />
      <div className="flex flex-col my-4">
      {banner.map((item,index) => {
        return (
          <div   key={index} className="flex flex-row w-[88.5%] mx-auto my-3 justify-between items-center ">
            <UplodeBanner numberOfimage={item} margin="mb-5" width="w-[30%]" />
            <Category />
          </div>
        );
      })}
      </div>
      <div className="flex flex-row justify-end w-[88.5%] mx-auto my-0 ">
        <Button
          bgColor="bg-[#01A657]"
          borderRadius="rounded-md"
          fontSize="font-medium 2xl:text-sm xl:text-sm md:text-xs lg:text-sm font-iransansNumber "
          titleBtn="ثبت نهایی"
          width="2xl:w-[16%] xl:w-[16%] md:w-[25%] lg:w-[23%] h-10"
          padding="px-6 py-2"
          textColor="text-white"
          margin="my-11"
        />
      </div>
    </div>
  );
}

export default page;
