import React from 'react';


export type Ticket = {
    title: string;
    describtion: string;
    fontSizedescribtion?: string;
    marginbottom?:string
  };


const TicketInformation:React.FC<Ticket>=({title,fontSizedescribtion,describtion,marginbottom})=> {
  return (
    <div className={`flex flex-row justify-between items-center font-iransansNumber ${marginbottom}`}>
    <h3 className="2xl:text-lg sm:text-sm font-medium lg:text-lg">{title}</h3>
    <p className={`${fontSizedescribtion} 2xl:text-lg sm:text-xs lg:text-lg`}>
      {describtion}
    </p>
  </div>
  )
}

export default TicketInformation;