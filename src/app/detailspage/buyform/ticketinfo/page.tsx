import React from "react";
import Button from "@/components/landing/Button";
import Link from "next/link";
import TicketInformation from "@/components/buyrecive/TicketInfo";
import { Ticket } from "@/components/buyrecive/TicketInfo";

const TicketPage: React.FC = () => {

  type ListofTicketInformation = Ticket[];

  const listofTicketInformation: ListofTicketInformation = [
    {
      title: "نام تور :",
      describtion: "تور گردشگری 3 روزه‌ی کاشان",
      fontSizedescribtion: "2xl:text-xl sm:text-sm",
    },
    { title: "تعداد نفرات :", describtion: "2 نفر" },
    { title: "نوع بلیت :", describtion: "بزرگسال" },
    { title: "مدت سفر :", describtion: "3 روز و 2 شب" },
    { title: "مبلغ نهایی :", describtion: "1.200.000 تومان" },
  ];

  const Cancellationandrefund = [
    "تا 24 ساعت قبل از موعد سفر میتوانید بلیت خود را لغو کنید",
    "10 درصد از مبلغ رزرو شما کم خواهد شد و مابقی تا 1 الی 48 ساعت استرداد خواهد شد",
    "اگر در 24 ساعت قبل از سفر بخواهید بلیت خود را لغو کنید 50 % درصد مبلغ کم و مابقی مبلغ 1 الی 48 ساعت استرداد خواهد شد",
  ];

  return (
    <div className="font-iransansNumber ">
      <h2 className="my-10 2xl:text-[22px] sm:text-base font-medium w-[90%] mx-auto">
        اطلاعات رزرو شما
      </h2>
      <div className="2xl:w-[49.5%] sm:w-[85%] xl:w-[60%] mx-auto my-9 shadow-2xl 2xl:h-[642px] sm:h-[550px] xl:h-[590px] rounded-xl px-28 py-16">
        {listofTicketInformation.map((item,index) => {
          return ( <TicketInformation title={item.title} describtion={item.describtion} fontSizedescribtion={item.fontSizedescribtion} key={index} marginbottom={"mb-10"}/>)
        })}
        <div>
          <h5 className="text-xs text-[#333333] font-regular mb-4">
            توضیحات لغو سفر و استرداد
          </h5>
          {Cancellationandrefund.map((item) => {
            return (
              <li className="2xl:text-xs sm:text-[8px] lg:text-xs font-regular 2xl:leading-8 sm:leading-6 lg:leading-6 xl:leading-7">
                {item}
              </li>
            );
          })}
        </div>
      </div>
      <Link
        href={"/detailspage/buyform/ticketinfo/buyrecive"}
        className="w-full mx-auto my-10  flex flex-row justify-center"
      >
        <Button
          bgColor="bg-[#01A657]"
          textColor="text-white"
          titleBtn="ثبت و ادامه"
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

export default TicketPage;
