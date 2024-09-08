import Button from "@/components/(main)/landing/Button";
import React from "react";
import Link from "next/link";
import StarCheckbox from "@/components/(panel)/user-dashboard/comment/StarCheckbox";

function page() {
  return (
    <div className="bg-[#F8F8F8] ">
      <div className="flex flex-row justify-between items-center w-[88.5%] mx-auto my-0 font-iransansNumber pt-10 ">
        <h1 className="text-[22px] font-medium">ثبت نظر</h1>
        <img src="/svg/dashboard/arrow_left.svg" alt="" className="w-8 h-8 " />
      </div>
      <div className="flex flex-row justify-between items-center w-[88.5%] mx-auto my-0 font-iransansNumber">
        <div className="flex flex-col justify-between items-start w-[59.5%] h-full ">
          <h3 className="text-lg font-medium">
            به سفر خود چند امتیاز میدهید ؟
          </h3>
          <div className="flex flex-row justify-between items-center w-[23%] mt-3">
            <StarCheckbox />
            <StarCheckbox />
            <StarCheckbox />
            <StarCheckbox />
            <StarCheckbox />
          </div>
          <textarea
            name=""
            id=""
            className="h-[184px] bg-white rounded-md w-full py-4 px-3 outline-[#01A657] mt-10"
            placeholder="اینجا بنویسید"
          ></textarea>
          <span className="text-base font-ultraLight mt-3">
            از اینکه نظرات خود را ثبت میکنید سپاسگزاریم ، لطفا تعداد کاراکتر ها
            بیش از 300 نشود !
          </span>
        </div>
        <img src="/image/Panel/Online Review-pana.svg" alt="" />
      </div>
      <Link
        className="w-full flex flex-row justify-center items-center pb-8"
        href=""
      >
        <Button
          bgColor="bg-[#01A657]"
          titleBtn="ثبت نظر"
          width="w-[20%]"
          fontSize="text-sm font-medium"
          textColor="text-white"
          borderRadius="rounded-md"
          padding=" py-3 "
          margin="mx-auto mt-28"
        />
      </Link>
    </div>
  );
}

export default page;
