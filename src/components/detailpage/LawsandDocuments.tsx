import React from "react";

const LawsandDocuments: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto my-0">
      <div className="mb-[78px] mt-40 font-iransansNumber">
        <h3 className="font-medium text-[32px] mb-8">مدارک مورد نیاز :</h3>
        <li className="text-[22px] font-regular  leading-[56px]">
          اسکن رنگی پاسپورت مسافر با حداقل 7 ماه اعتبار
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          بیمه مسافرتی حداقل 30,000 دلار به تعداد روزهای سفر 
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          عکس 4*6 پشت سفید
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          بلیط رفت و برگشت 
        </li>
      </div>
      <div className="mb-[78px] font-iransansNumber">
        <h3 className="font-medium text-[32px] mb-8">قوانین تور :</h3>
        <li className="text-[22px] font-regular  leading-[56px]">
          حداقل بایستی 7 ماه تا تاریخ انقضای پاسپورت شما زمان باقی مانده باشد.
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          پرداخت عوارض خروج از کشور به‌عهده مسافران گرامی است.
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          تمامی هتل‌ها بصورت گارانتی می‌باشد و در صورت کنسلی هزینه‌ای عودت
          نخواهد شد.
        </li>
        <li className="text-[22px] font-regular  leading-[56px] ">
          رخداد هرگونه حادثه‌ی طبیعی در سفر، احتمال تغییر در برنامه‌ی سفر را
          به‌دنبال خواهد داشت.
        </li>
      </div>
    </div>
  );
};

export default LawsandDocuments;
