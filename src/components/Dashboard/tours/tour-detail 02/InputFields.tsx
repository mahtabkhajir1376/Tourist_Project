import React from "react";

interface InputData {
  title: string;
  describtion: string;
}

type Input = InputData[];

const InputFields = () => {
  const inputData: Input = [
    {
      title: "اسم تور :",
      describtion: "زمان دقیق روز و شب (مثال : 2 روز و 1 شب )",
    },
    { title: "جزئیات :", describtion: " (جزئیات مورد نیاز در صورت لزوم )" },
    { title: "شهر :", describtion: "نام شهر را بنویسید" },
  ];

  return (
    <div className="pt-9 pr-6">
      {inputData.map((item, index) => {
        return (
          <div key={index} className="flex flex-row justify-between items-start font-iransansNumber w-[46.5%] mb-5">
            <div className="flex flex-row justify-between items-center ">
            <img src="/svg/dashboard/Edit_green_icon.svg" alt="" className="w-6 h-6" />
            <span className="text-base font-medium mr-1">{item.title}</span>
            </div>
            <div className="flex flex-col w-[84%]">
              <input type="text" className="border-2 border-[#01A657] rounded-md px-2 text-sm py-1 outline-none" />
              <span className="text-[10px] font-light text-[#707070] py-2">{item.describtion}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InputFields;
