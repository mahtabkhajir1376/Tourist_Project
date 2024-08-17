import React from 'react'; 

const Annualincomestatus = ({ percentage }) => { 
  const radius = 50;  
  const circumference = 2 * Math.PI * radius; 
  const offset = circumference - (percentage / 100) * circumference; 
 
  return ( 
    <div className="flex flex-col items-center bg-white w-[31%] h-full font-iransansNumber rounded-xl px-6 py-4  "> 
    <p className ="flex flex-row justify-start items-start w-full  text-sm  font-medium  pr-3 " > درصد فروش تور ها </p>
      <svg className="w-36 h-36 transform -rotate-90"> 
        <circle 
          className="text-gray-300" 
          strokeWidth="12" 
          stroke="currentColor" 
          fill="transparent" 
          r={radius}  
          cy="64" 
          
        /> 
        <circle 
          className="text-green-500" 
          strokeWidth="12" 
          strokeDasharray={circumference} 
          strokeDashoffset={offset} 
  
          stroke="currentColor" 
          fill="transparent" 
          r={radius}  
          cy="64" 
          
        /> 
      </svg> 
      <div className=" flex justify-center items-center  text-base font-bold   rounded-full text-center w-10 h-10  ">{percentage}%</div> 
      <p className="text-center text-black  text-[10px]  font-light  "> 
        این میانگین فروش کل تورها میباشد </p>
        <p  className="text-[#000000 ] text-[10px] font-thin mt-[12px] ">  این میزان درصد تا به امروز محاسبه شده است  </p> 
      <img src="/image/Dashboard/Datachart.png" alt="" className='' /> 
    </div> 
  ); 
}; 

export default Annualincomestatus;