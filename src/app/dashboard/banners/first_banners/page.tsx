import React from "react";
import Category from "@/components/dashboard/banners/first_banners/Category";
import UplodeBanner from "@/components/dashboard/banners/UplodeBanner";
import Header from "@/components/dashboard/banners/Header";
import Button from "@/components/landing/Button";

const banner = ["بنر شماره 1", "بنر شماره 2", "بنر شماره 3"];

function page() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col my-4">
      {banner.map((item) => {
        return (
          <div className="flex flex-row w-[88.5%] mx-auto my-3 justify-between items-center ">
            <UplodeBanner numberOfimage={item} />
            <Category />
          </div>
        );
      })}
      </div>
      <div className="flex flex-row justify-end w-[88.5%] mx-auto my-0 ">
        <Button
          bgColor="bg-[#01A657]"
          borderRadius="rounded-md"
          fontSize="font-medium text-base font-iransansNumber "
          titleBtn="ثبت نهایی"
          width="w-[29%] h-[56px]"
          padding="px-6 py-2"
          textColor="text-white"
          margin="my-11"
        />
      </div>
    </div>
  );
}

export default page;
