import React from 'react';
import Button from './Button';

type PARAGRAPH ={
    title:string,
    paragraph:string,
    padding:string
}

const Paragraph:React.FC<PARAGRAPH>=({title,paragraph,padding})=> {
  return (
    <div className={`flex flex-col justify-around items-start w-[75%] ${padding}`}  >
    <div>
      <h4 className="text-base font-semibold mb-7 ">{title}</h4>
      <p className="text-base font-light  ">
        {paragraph}
      </p>
    </div>
    <Button
      titleBtn="رزرو"
      borderRadius="rounded-md"
      fontSize="text-sm font-semibold"
      bgColor="bg-white"
      width="w-20"
      padding="py-1"
    />
  </div>
  )
}

export default Paragraph