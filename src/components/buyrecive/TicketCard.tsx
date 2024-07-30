import React from "react";
import { Ticket } from "./TicketInfo";
import TicketInformation from "./TicketInfo";

type ListofTicketInformation = Ticket[];

const TicketCard = () => {
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

  return (
    <div className=" 2xl:w-[67%] sm:w-[70%] mx-auto mt-20 mb-16 shadow-2xl   h-[376px] rounded-xl grid grid-cols-3  2xl:px-16 xl:px-16 py-10 sm:px-8">
      <div className=" col-span-1 py-4 border-l-2 border-dashed 2xl:pl-16 sm:pl-5 xl:pl-16  ">
        <div
          className={`flex flex-row justify-between items-center font-iransansNumber mb-7`}
        >
          <h3 className="2xl:text-lg xl:text-lg sm:text-sm font-medium lg:text-lg">
            وسیله نقلیه :
          </h3>
          <p className={`2xl:text-lg xl:text-lg sm:text-xs lg:text-lg`}>اتوبوس VIP</p>
        </div>
        <div
          className={`flex flex-row justify-between items-center font-iransansNumber mb-7`}
        >
          <h3 className="2xl:text-lg xl:text-lg sm:text-sm font-medium lg:text-lg">
             زمان حرکت :
          </h3>
          <p className={`2xl:text-lg sm:text-xs lg:text-lg xl:text-lg`}>09:00</p>
        </div>
        <div className="flex flex-col justify-around items-center 2xl:text-lg xl:text-lg sm:text-sm font-medium font-iransans">
            <h3 className="mb-4 ">بارکد بلیت :</h3>
            <img src="/svg/QRcode.svg" alt="" className="sm:w-20" />
        </div>
      </div>
      <div className=" col-span-2 2xl:pr-20 sm:pr-10 py-4 xl:pr-20 ">
        {listofTicketInformation.map((item, index) => {
          return (
            <TicketInformation
              title={item.title}
              describtion={item.describtion}
              fontSizedescribtion={item.fontSizedescribtion}
              key={index}
              marginbottom="mb-7"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TicketCard;
