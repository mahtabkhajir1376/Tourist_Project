import React from "react";
import PassengerInformation from "@/components/buyform/PassengerInformation";

function BuyForm() {
  return (
    <div className="font-iransansNumber">
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-10 font-iransansNumber">
        <h2 className="text-[22px] font-medium">اطلاعات مسافران</h2>
        <a  href="" className="flex flex-row justify-around items-center w-[9%]">
          <img src="/svg/persongreen.svg" alt="" className="w-6" />
          <p className="text-[#01A657] text-lg font-medium">اضافه کردن</p>
        </a>
      </div>
      <PassengerInformation/>
    </div>
  );
}

export default BuyForm;
