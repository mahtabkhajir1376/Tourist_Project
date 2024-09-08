import React from "react";
import PassengerInformation from "@/components/(main)/buyform/PassengerInformation";
import Button from "@/components/(main)/landing/Button";
import Link from "next/link";

function BuyForm() {
  return (
    <div className="font-iransansNumber">
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-10 font-iransansNumber">
        <h2 className="2xl:text-[22px] font-medium sm:text-base xl:text-xl">اطلاعات مسافران</h2>
        <a
          href=""
          className="flex flex-row justify-around items-center 1xl:w-[9%] sm:w-[16%] md:w-[14%] lg:w-[11%] xl:w-[10%]"
        >
          <img src="/svg/persongreen.svg" alt="" className="2xl:w-6 sm:w-4 md:w-5 xl:w-6" />
          <p className="text-[#01A657] 2xl:text-lg font-medium sm:text-xs md:text-sm xl:text-base ">اضافه کردن</p>
        </a>
      </div>
      <PassengerInformation />
      <PassengerInformation />
      <Link href={"/detailspage/buyform/ticketinfo"} className="w-full mx-auto my-10  flex flex-row justify-center">
      <Button
        bgColor="bg-[#01A657]"
        textColor="text-white"
        titleBtn="ثبت و ادامه"
        borderRadius="rounded-md"
        padding="py-3 px-6"
        width="w-72"
        fontSize="font-demiBold text-sm"
        margin="mx-auto my-0"
      />
      </Link>
    </div>
  );
}

export default BuyForm;
