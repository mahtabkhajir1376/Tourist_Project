import React from "react";

const GuideForUplodeImage: React.FC = () => {
  const rules = [
    "لطفا عکس های  مورد نظر خود را در این بخش بارگذاری کنید.",
    "لطفا حجم تصاویری که بارگذاری میکنید بیش از 5 مگابایت نباشد",
    "این بنرها قابل تعویض هستند و میتوانید در آینده نیز تصاویر آنها را تغییر دهید .",
  ];

  return (
    <div className="flex flex-col w-[88.5%] mx-auto my-0 font-iransansNumber">
      {rules.map((item) => {
        return <li className="2xl:text-lg xl:text-lg md:text-xs lg:text-sm font-light  2xl:leading-10 xl:leading-10 md:leading-7 lg:leading-9 ">{item}</li>;
      })}
    </div>
  );
};

export default GuideForUplodeImage;
