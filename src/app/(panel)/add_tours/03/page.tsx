import React from "react";
import ProgressBar from "@/components/(panel)/admin_dashboard/tours/ProgressBar";
import TourInformationbox from "@/components/(panel)/admin_dashboard/tours/tour-detail 03/TourInformationbox";
import Button from "@/components/(main)/landing/Button";
import Link from "next/link";

function page() {
  const information = [
    {
      title: "خدمات تور :",
      explain: [
        "لطفا خدمات تور را با اطلاعاتی همچون (خدمات فرودگاهی/ مترجم/ تورلیدر و...) پر کنید .",
        "لطفا تعداد کاراکتر های شما بیش از 300 کاراکتر نشود .",
        "نمونه : اقامت در هتل 5 ستاره + تمام صبحانه‌ها",
        "همراهی راهنمای فارسی زبان",
        "اخذ ویزای کشور ویتنام",
        "ترانسفر فرودگاهی",
        "گشت شهری",
      ],
    },
    {
      title: "جزئیات اقامت :",
      explain: [
        "لطفا جزئیات اقامت را با اطلاعاتی همچون میزان اقامت ( تعداد روز در هر مکان ) شرح دهید.",
        "لطفا تعداد کاراکتر های شمت بیش از 300  کاراکتر نشود",
        "نمونه : 2 روز فلان جا2 روز بهمان جا1 روز فلان جا: ",
      ],
    },
    {
      title: "مدارک مورد نیاز :",
      explain: ["لطفا تعداد کاراکتر های شمت بیش از 300 کاراکتر نشود"],
    },
    {
      title: "قوانین تور :",
      explain: ["لطفا تعداد کاراکتر های شمت بیش از 300 کاراکتر نشود"],
    },
  ];

  return (
    <div className="font-iransansNumber  w-full  h-lvh  overflow-y-auto bg-[#F8F8F8]">
      <ProgressBar value="w-full " />
      <div className="flex flex-row  flex-wrap items-center justify-between w-[90%] mx-auto my-10">
        {information.map((item, index) => {
          return <TourInformationbox title={item.title} explain={item.explain} key={index} />;
        })}
      </div>
      <Link href="/add_tours/03" className="flex flex-row justify-end items-center w-[90%] mx-auto mt-28 mb-10 ">
        <Button
          bgColor="bg-[#01A657]"
          borderRadius="rounded-md"
          fontSize="font-medium 2xl:text-sm xl:text-sm md:text-xs lg:text-sm font-iransansNumber "
          titleBtn="ثبت و ادامه"
          width="2xl:w-[16%] xl:w-[16%] md:w-[25%] lg:w-[23%] h-10"
          padding="px-6 py-2"
          textColor="text-white"
        />
        </Link>
    </div>
  );
}

export default page;
