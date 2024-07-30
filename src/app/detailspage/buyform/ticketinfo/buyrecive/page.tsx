import React from "react";
import TicketCard from "@/components/buyrecive/TicketCard";
import Button from "@/components/landing/Button";
import Link from "next/link";

function BuyRecive() {
  return (
    <>
      <div className="flex flex-row justify-center items-center 2xl:w-[90%] xl:w-[90%] sm:w-[90%] my-10 mx-auto font-iransansNumber relative ">
        <img
          src="/svg/leafright.svg"
          alt=""
          className="xl:absolute xl:top-0 xl:right-[35%] "
        />
        <div className="flex flex-col justify-center items-center ">
          <img src="/svg/success.svg" alt="" className="sm:w-36" />
          <p className="font-medium 2xl:text-[28px] sm:text-lg ">رزرو شما با موفقیت انجام شد</p>
        </div>
        <img
          src="/svg/leafleft.svg"
          alt=""
          className="xl:absolute xl:top-[80%] xl:left-[32%]  "
        />
      </div>
      <TicketCard />
      <Link
      href={""}
        className="w-full mx-auto my-10  flex flex-row justify-center "
      >
        <Button
          bgColor="bg-[#01A657]"
          textColor="text-white"
          titleBtn="مشاهده در رزرو ها"
          borderRadius="rounded-md"
          padding="py-3 px-6"
          width="w-72"
          fontSize="font-demiBold 2xl:text-sm xl:text-sm font-iransansNumber sm:text-xs "
          margin="mx-auto my-0"
        />
      </Link>
    </>
  );
}

export default BuyRecive;
