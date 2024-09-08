import React from "react";
import SingleOption from "./SingleOption";
import { Option } from "./SingleOption";

const Options: React.FC = () => {

type DataOption =Option[]


const dataOption:DataOption =[
    {title:"تنوع تور ها",imageSrc:"/svg/stargreen.svg",describtion:"هر مدل توری که بخوای ما داریم",width:"2xl:w-[78%]"},
    {title:"قیمت‌های به‌صرفه",imageSrc:"/svg/greenshop.svg",describtion:"با کف قیمت میتونی بری سفر",width:"2xl:w-[75%]"},
    {title:"امن و معتبر",imageSrc:"/svg/greenlock.svg",describtion:"با خیالت راحت بلیت بخر",width:"2xl:w-[65%]"},
]


  return (
    <div className="flex flex-row justify-around items-center 2xl:w-[90%] xl:w-[90%] sm:w-full mx-auto my-0 h-[553px] ">
      <SingleOption title={dataOption[0].title} imageSrc={dataOption[0].imageSrc}  describtion={dataOption[0].describtion}  width={dataOption[0].width} />
      <SingleOption title={dataOption[1].title} imageSrc={dataOption[1].imageSrc}  describtion={dataOption[1].describtion} width={dataOption[1].width}   />
      <SingleOption title={dataOption[2].title} imageSrc={dataOption[2].imageSrc}  describtion={dataOption[2].describtion} width={dataOption[2].width}  />
    </div>
  );
};

export default Options;
