import React from "react";

function BankInformation() {
  return (
    <div>
      <div className="my-0 mx-auto w-[88.5%]">
        <div className="flex flex-row justify-between items-center w-[12%] mb-8 h-full">
          <img src="/svg/dashboard/money_bag_icon.svg" alt="" />
          <h5 className="text-sm font-regular">اطلاعات بانکی</h5>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[88.5%] mx-auto my-4 gap-[136px]">
        <div className="col-span-1">
        <label htmlFor="" className="bg-[rgba(232,237,236,0.3)] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <input type="text" placeholder="شماره شبا" className="bg-[rgba(232,237,236,0.1)] outline-none border-none text-sm appearance-none shadow-none placeholder:text-xs placeholder:font-light placeholder:text-[#333333]" />
        </label>
        </div>
        <div className="col-span-1">
        <label htmlFor="" className="bg-[#E8EDEC4D] flex flex-row justify-between items-center w-full h-[42px] rounded-md py-2 px-6 relative mb-6">
            <input type="text" placeholder="شماره کارت" className="bg-[rgba(232,237,236,0.1)] outline-none border-none text-sm appearance-none placeholder:text-xs placeholder:font-light placeholder:text-[#333333] " />
        </label>
        </div>
      </div>
    </div>
  );
}

export default BankInformation;
