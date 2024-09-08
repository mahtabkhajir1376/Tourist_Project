import React from "react";
import CustomSelect from "../comments/CustomSelect";
import Button from "@/components/(main)/landing/Button";

const Searchuser = () => {

    const options = [
        { value: "none", label: "مشخص کردن نقش" },
        { value: "super_admin", label: "سوپر ادمین" },
        { value: "admin", label: "ادمین" },
        { value: "user", label: "کاربر" },
      ];



  return (
    <div className="w-[84%] bg-white shadow-md h-[285px] mx-auto my-0 rounded-md font-iransansNumber">
      <div className="flex flex-col justify-center items-start mr-6 py-6">
        <div className="flex flex-row justify-center items-center">
          <img src="/svg/dashboard/person_plus.svg" alt="" className="md:w-4 md:h-4 lg:w-6 lg:h-6" />
          <p className="2xl:text-sm md:text-[10px] lg:text-xs font-regular mr-3">
            شماره موبایل فرد مورد نظر را وارد کنید
          </p>
        </div>
        <label className="input flex items-center bg-[#E8EDEC4D] my-6 gap-2 2xl:w-[50%] xl:w-[41.5%] md:w-[60%] lg:w-[50%] ">
          <input
            type="text"
            className="grow placeholder:text-[10px] placeholder:font-thin placeholder:text-black"
            placeholder="جستجوی کاربر مورد نظر با کد ملی  ، نام و نام خانوادگی "
          />
          <img src="/svg/search.svg" alt="" className="w-4 h-4" />
        </label>
        <CustomSelect options={options} defaultValue={options[0]} width="w-[50%]" />
      </div>
      <div className="flex flex-row justify-between items-center w-[94%] mx-auto my-0">
        <p className="2xl:text-xs md:text-[8px] lg:text-[10px] font-ultraLight">برای مشخص کردن ادمین ، فرد مورد نظر باید پیش از این در سایت ثبت نام کرده باشد</p>
        <Button bgColor="bg-white" titleBtn="ثبت" fontSize="2xl:text-base xl:text-base md:text-xs lg:text-sm font-medium" borderRadius="rounded-md" textColor="text-[#01A657]" width="2xl:w-[16%] xl:w-[16%] md:w-[20%]" padding="py-2" border="border-2 border-[#01A657]" />
      </div>
    </div>
  );
};

export default Searchuser;
