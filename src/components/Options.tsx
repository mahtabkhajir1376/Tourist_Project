import React from "react";
import SingleOption from "./SingleOption";
import { Option } from "./SingleOption";

const Options: React.FC = () => {

type DataOption =Option[]


const dataOption:DataOption =[
    {title:"تنوع تور ها",imageSrc:"/svg/star.svg",bgImage:"bg-star-option",describtion:"هر مدل توری که بخوای ما داریم"},
    {title:"قیمت‌های به‌صرفه",imageSrc:"/svg/shop.svg",bgImage:"bg-shop-option",describtion:"با کف قیمت میتونی بری سفر"},
    {title:"امن و معتبر",imageSrc:"/svg/lock.svg",bgImage:"bg-lock-option",describtion:"با خیالت راحت بلیت بخر"},
]


  return (
    <div className="flex flex-row justify-around items-center w-[90%] mx-auto my-0 h-[553px] ">
      <SingleOption title={dataOption[0].title} imageSrc={dataOption[0].imageSrc} bgImage={dataOption[0].bgImage} describtion={dataOption[0].describtion} />
      <SingleOption title={dataOption[1].title} imageSrc={dataOption[1].imageSrc} bgImage={dataOption[1].bgImage} describtion={dataOption[1].describtion} />
      <SingleOption title={dataOption[2].title} imageSrc={dataOption[2].imageSrc} bgImage={dataOption[2].bgImage} describtion={dataOption[2].describtion} />
    </div>
  );
};

export default Options;
