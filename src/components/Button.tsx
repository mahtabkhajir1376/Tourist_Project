import React, { ComponentPropsWithRef } from 'react';

type BTTON =ComponentPropsWithRef<"button"> & {
    titleBtn:string,
    bgColor:string,
    border?:string,
    fontSize:string,
    borderRadius:string,
    width:string,
    padding:string
}

const Button:React.FC<BTTON>=({titleBtn,bgColor,border,fontSize,borderRadius,width,padding})=> {
  return (
    <button className={`${bgColor} ${border} ${fontSize} ${border} ${borderRadius} ${width} ${padding} row-span-1` }>{titleBtn}</button>
  )
}

export default Button;