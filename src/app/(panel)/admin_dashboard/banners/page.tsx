import React from "react";
import Header from "@/components/(panel)/admin_dashboard/banners/Header";
import UplodeBanner from "@/components/(panel)/admin_dashboard/banners/UplodeBanner";
import GuideForUplodeImage from "@/components/(panel)/admin_dashboard/banners/GuideForUplodeImage";
import Button from "@/components/(main)/landing/Button";

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
    <div className="w-full relative h-lvh  overflow-y-auto font-iransansNumber">
      <Header />
      <div className=" flex flex-row flex-wrap justify-between items-center w-[88.5%] my-9 mx-auto ">
        {Banner.map((item) => {
          return (
            <UplodeBanner
              numberOfimage={item}
              margin="mb-5"
              width="w-[30%]"
              border="border-none"
              shadow="shadow-md"
              height="h-[150px]"
              rounded="rounded-xl"
            />
          );
        })}
      </div>
      <GuideForUplodeImage />
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
