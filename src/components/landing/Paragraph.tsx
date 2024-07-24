import React from 'react';
import Button from './Button';

type PARAGRAPH ={
    title:string,
    paragraph:string,
    padding:string,
    text?:string,
    fontSizetitle:string,
    fontSizeparagraph:string
}

const Paragraph:React.FC<PARAGRAPH>=({title,paragraph,padding,text,fontSizetitle,fontSizeparagraph})=> {
  return (
    <div className={`flex flex-col justify-around items-start w-[65%] py-2  ${padding}`}  >
    <div>
      <h4 className={` mb-7 ${fontSizetitle} `}>{title}</h4>
      <p className={` leading-6 ${fontSizeparagraph}`}   >
       {paragraph } 
      </p>
    </div>
    <div className='flex flex-col justify-around items-start'>
    <Button
      titleBtn="رزرو"
      borderRadius="rounded-md"
      fontSize="text-sm font-semibold"
      bgColor="bg-white"
      width="w-28"
      padding="py-2"
    />
    <span className='text-xs font-normal mt-3' >{text}</span>
    </div>
  </div>
  )
}
export default Paragraph