import React, { ComponentPropsWithRef } from 'react';

type BTTON =ComponentPropsWithRef<"button"> & {
    titleBtn:string,
    bgColor:string,
    border?:string,
    fontSize:string,
    borderRadius:string,
    width:string,
    padding:string,
    textColor?:string,
    margin?:string,
    position?:string
    
}

const Button:React.FC<BTTON>=({titleBtn,bgColor,border,fontSize,borderRadius,width,padding,textColor,margin,onClick,position})=> {
  return (
    <button className={`${bgColor} ${border} ${fontSize}  ${borderRadius} ${width} ${padding} ${textColor} ${margin} ${position} ` } onClick={onClick}>{titleBtn}</button>
  )
}

export default Button;