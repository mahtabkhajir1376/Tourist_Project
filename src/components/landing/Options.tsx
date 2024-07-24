import React from "react";
import SingleOption from "./SingleOption";
import { Option } from "./SingleOption";

const Options: React.FC = () => {

type DataOption =Option[]


const dataOption:DataOption =[
    {title:"تنوع تور ها",imageSrc:"/svg/star.svg",bgImage:"/svg/Shapeone.svg",describtion:"هر مدل توری که بخوای ما داریم",position:"top-[31%] right-[10%]"},
    {title:"قیمت‌های به‌صرفه",imageSrc:"/svg/shop.svg",bgImage:"/svg/Shapetwo.svg",describtion:"با کف قیمت میتونی بری سفر",position:"top-[28%] right-[10%]"},
    {title:"امن و معتبر",imageSrc:"/svg/lock.svg",bgImage:"/svg/Shapethree.svg",describtion:"با خیالت راحت بلیت بخر",position:"top-[27%] right-[10%]"},
]


  return (
    <div className="flex flex-row justify-around items-center w-[90%] mx-auto my-0 h-[553px] ">
      <SingleOption title={dataOption[0].title} imageSrc={dataOption[0].imageSrc} bgImage={dataOption[0].bgImage} describtion={dataOption[0].describtion} position={dataOption[0].position} />
      <SingleOption title={dataOption[1].title} imageSrc={dataOption[1].imageSrc} bgImage={dataOption[1].bgImage} describtion={dataOption[1].describtion} position={dataOption[1].position}  />
      <SingleOption title={dataOption[2].title} imageSrc={dataOption[2].imageSrc} bgImage={dataOption[2].bgImage} describtion={dataOption[2].describtion} position={dataOption[2].position} />
    </div>
  );
};

export default Options;
