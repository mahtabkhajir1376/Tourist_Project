import React from "react";
import ProgressBar from "@/components/dashboard/tours/ProgressBar";
import GallaryImageUplode from "@/components/dashboard/tours/GallaryImageUplode";
import UplodeStoryBanner from "@/components/dashboard/tours/UplodeStoryBanner";
import GuideForUplodeImage from "@/components/dashboard/banners/GuideForUplodeImage";
import Button from "@/components/landing/Button";

function page() {
  return (
    <div className="font-iransans  w-full relative h-lvh  overflow-y-auto bg-[#F8F8F8]">
      <ProgressBar />
      <GallaryImageUplode />
      <UplodeStoryBanner />
      <div className="flex flex-row justify-between items-end w-[88.5%] mx-auto mt-28 mb-10 ">
        <GuideForUplodeImage />
        <Button
          bgColor="bg-[#01A657]"
          borderRadius="rounded-md"
          fontSize="font-medium 2xl:text-sm xl:text-sm md:text-xs lg:text-sm font-iransansNumber "
          titleBtn="ثبت و ادامه"
          width="2xl:w-[16%] xl:w-[16%] md:w-[25%] lg:w-[23%] h-10"
          padding="px-6 py-2"
          textColor="text-white"
          margin="mt-11"
        />
      </div>
    </div>
  );
}

export default page;
