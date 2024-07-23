import React from "react";
import ImageLayout from "./ImageLayout";

type ImageData =HeaderImage[]

export type HeaderImage={
    header:string,
    Capacity:string,
    imageSrc:string
    position?:string
    }




const imageData:ImageData =[
    {header:"پاریس",Capacity:"5 تور فعال",imageSrc:"/image/picture1.jpg",position:"top-[5%]  right-[10%]"},
    {header:"رشت",Capacity:"3 تور فعال",imageSrc:"/image/picture2.jpg",position:"top-[10%]  right-[5%]"},
    {header:"ژاپن",Capacity:"4 تور فعال",imageSrc:"/image/picture3.jpg",position:"top-[10%]  right-[10%]"},
    {header:"اصفهان",Capacity:"2 تور فعال",imageSrc:"/image/picture4.jpg",position:"top-[10%]  right-[10%]"}
]







const TourGallary:React.FC = () => {
  return (
    <div className="grid grid-cols-6  w-[90%] h-[800px] mx-auto my-0 gap-5">
      <div className="col-span-4  grid grid-rows-2 gap-5">
        <ImageLayout ImageSrc={imageData[1].imageSrc} span="row-span-1" header={imageData[1].header} capacity={imageData[1].Capacity} position={imageData[1].position}/>

        <div className="row-span-1  grid grid-cols-2 gap-5">
          <ImageLayout ImageSrc={imageData[3].imageSrc} span="col-span-1" header={imageData[3].header} capacity={imageData[3].Capacity} position={imageData[3].position} />

          <ImageLayout ImageSrc={imageData[2].imageSrc} span="col-span-1" header={imageData[2].header} capacity={imageData[2].Capacity} position={imageData[2].position} />
        </div>
      </div>
      <ImageLayout ImageSrc={imageData[0].imageSrc} span="col-span-2"  header={imageData[0].header} capacity={imageData[0].Capacity} position={imageData[0].position}  />
    </div>
  );
};

export default TourGallary;
