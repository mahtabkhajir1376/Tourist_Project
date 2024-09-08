import React from "react";
import Button from "@/components/(main)/landing/Button";
import Link from "next/link";

const BookingError: React.FC = () => {
  return (
    <div className="font-iransansNumber flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[90%] my-10 mx-auto">
        <h2 className="text-[#D23D3D] font-medium 2xl:text-[28px] sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mb-7">
          متاسفیم رزرو شما با خطا مواجه شد !
        </h2>
        <li className="2xl:text-base sm:text-xs md:text-sm  xl:text-base font-regular text-[#707070] 2xl:leading-8 sm:leading-6 md:leading-7">شما میتوانید مجددا بلیت هارا خریداری کنید</li>
        <li className="2xl:text-base  sm:text-xs md:text-sm  xl:text-base font-regular text-[#707070] 2xl:leading-8 sm:leading-6 md:leading-7">میتوانید به صفحه اصلی برگردید</li>
        <li className="2xl:text-base  sm:text-xs md:text-sm  xl:text-base font-regular text-[#707070] 2xl:leading-8 sm:leading-6 md:leading-7">اگر مبلغی از حساب شما کم بشود به حساب شما برخواهد گشت</li>
      </div>
      <img src="/svg/No data-error.svg" alt="" className="sm:w-[50%]" />
      <Link
        href={"/"}
        className="w-full mx-auto my-10  flex flex-row justify-center"
      >
        <Button
          bgColor="bg-[#01A657]"
          textColor="text-white"
          titleBtn="بازگشت به صفحه اصلی"
          borderRadius="rounded-md"
          padding="py-3 px-6"
          width="w-72"
          fontSize="font-demiBold 2xl:text-sm xl:text-sm font-iransansNumber sm:text-xs "
          margin="mx-auto my-0"
        />
      </Link>
    </div>
  );
};

export default BookingError;
