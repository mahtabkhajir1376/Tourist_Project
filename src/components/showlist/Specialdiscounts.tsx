"use client"
import { useState , useEffect, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state , action) {
  switch(action.type){
    case 'increase' : 
    return{count : state.count +1 }
    case 'decrease' :
      return {count : state.count -1}
      default:
        return state
  }
}


function Specialdiscounts() {

  const [state, dispatch] = useReducer(reducer, initialState);
  function increment () {
    dispatch({type: "increase"})
  }
  
  function decrement () {
    if(state.count === 0){
     
      return
    }
    dispatch({type: "decrease"})
  }


  return (
    <>
    <div className="flex flex-col  justify-between   mt-[24px] mr-[32px] ml-[32px] "> 
      <div className=" w-[428px]  h-[27px]   ">
        <h2 className=" font-iransans  font-medium  text-lg  leading-7  "> فیلتر کردن : </h2>
      </div>
    <div className=" w-[428px]  h-[27px]   flex  flex-row  justify-between mt-[75px]   ">
    <h2 className=" text-black text-base  leading-7  font-medium ">تعداد نفرات :</h2>
    <div className="flex flex-row" >
      <div  className=" flex  flex-row w-[83px] h-[27px]  justify-between mr-[32px] ml-[32px] ">
        <div className="flex  flex-row  w-[12px]  h-[27px] ">
       <p className="text-black  text-lg  font-medium  leading-7 ">{state.count} </p>
     
       </div>
       <div className=" flex  flex-row  w-[56px]  h-[24px] gap-2  ">
       <button  className=" bg-[#D8BFD8]  text-[#7B4794]  w-[20.47px] h-[20.47px] rounded-md " onClick={increment}>+</button>
       <button  className=" bg-[#D8BFD8]  text-[#7B4794]  w-[20.47px] h-[20.47px] rounded-md " onClick={ decrement}>-</button>
       </div>
       </div>
       </div>
       </div>
    </div>
      
    </>
  );
}

export default Specialdiscounts;