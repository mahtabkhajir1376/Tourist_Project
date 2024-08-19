import React from "react";
import UplodeBanner from "../banners/UplodeBanner";

const GallaryImageUplode = () => {
  return (
    <div className="grid grid-cols-2 h-[447px] w-[90%] mx-auto my-4 bg-white shadow-md rounded-md py-8 px-12 gap-6 ">
      <UplodeBanner width=" col-span-1" shadow="none" border="border-2 border-[#01A657] border-dashed" rounded="rounded-xl"/>
      <div className="col-span-1 grid grid-rows-2 gap-5 ">
        <div className="row-span-1  grid grid-cols-2 gap-5">
          <UplodeBanner width=" col-span-1" shadow="none" border="border-2 border-[#01A657] border-dashed" rounded="rounded-xl" />
          <UplodeBanner width=" col-span-1" shadow="none" border="border-2 border-[#01A657] border-dashed" rounded="rounded-xl" />
        </div>
        <div className="row-span-1 grid grid-cols-2 gap-5">
          <UplodeBanner width=" col-span-1" shadow="none" border="border-2 border-[#01A657] border-dashed" rounded="rounded-xl"  />
          <UplodeBanner width=" col-span-1" shadow="none" border="border-2 border-[#01A657] border-dashed" rounded="rounded-xl"  />
        </div>
      </div>
    </div>
  );
};

export default GallaryImageUplode;
