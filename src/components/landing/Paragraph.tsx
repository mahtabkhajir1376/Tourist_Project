import React from 'react';
import Button from './Button';

type PARAGRAPH ={
    title:string,
    paragraph:string,
    padding:string,
    fontSizeparagraph:string,
    fontSizetitle:string,
    text?:string
}

const Paragraph:React.FC<PARAGRAPH>=({title,paragraph,padding,fontSizetitle,fontSizeparagraph,text})=> {
  return (
    <div className={`flex flex-col justify-around items-start xl:w-[68%] sm:w-[78%] ${padding}`}  >
    <div>
      <h4 className={`xl:text-base sm:text-xs  font-semibold xl:mb-7 sm:mb-5 sm:mt-2 ${fontSizetitle}`}>{title}</h4>
      <p className={`xl:text-base font-light sm:text-xs ${fontSizeparagraph}`}>
        {paragraph}
      </p>
    </div>
    <div>
    <Button
      titleBtn="رزرو"
      borderRadius="rounded-md"
      fontSize="xl:text-sm font-semibold sm:text-xs"
      bgColor="bg-white"
      width="xl:w-20 sm:w-14 md:w-16"
      padding="py-1"
      margin="sm:mt-3 sm:mb-2"
    />
    <p className='2xl:text-base 2xl:font-regular xl:text-base  sm:text-xs md:text-sm lg:text-base'>{text}</p>
    </div>
  </div>
  )
}

export default Paragraph;