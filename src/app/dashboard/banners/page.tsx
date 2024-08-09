import React from "react";
import Header from "@/components/dashboard/banners/Header";
import UplodeBanner from "@/components/dashboard/banners/UplodeBanner";
import GuideForUplodeImage from "@/components/dashboard/banners/GuideForUplodeImage";
import Button from "@/components/landing/Button";

function page() {
  const Banner = [
    "بنر شماره 1",
    "بنر شماره 2",
    "بنر شماره 3",
    "بنر شماره 4",
    "بنر شماره 5",
    "بنر شماره 6",
    "بنر شماره 7",
    "بنر شماره 8",
    "بنر شماره 9",
  ];

  return (
    <div className="w-full">
      <Header />
      <div className=" flex flex-row flex-wrap justify-between items-center w-[88.5%] my-9 mx-auto ">
        {Banner.map((item) => {
          return <UplodeBanner numberOfimage={item} />;
        })}
      </div>
      <GuideForUplodeImage />
      <div className="flex flex-row justify-end w-[88.5%] mx-auto my-0 ">
        <Button
          bgColor="bg-[#01A657]"
          borderRadius="rounded-md"
          fontSize="font-medium text-base font-iransansNumber "
          titleBtn="ثبت نهایی"
          width="w-[20%] h-[56px]"
          padding="px-6 py-2"
          textColor="text-white"
          margin="my-11"
        />
      </div>
    </div>
  );
}

export default page;
