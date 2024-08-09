"use client"; 
import { useReducer } from "react"; 

const initialState = { count: 0 }; 

function reducer(state, action) { 
  switch (action.type) { 
    case 'increase':  
      return { count: state.count + 1 }; 
    case 'decrease': 
      return { count: state.count > 0 ? state.count - 1 : 0 }; 
    default: 
      return state; 
  } 
} 

function Numberofpeople() { 
  const [state, dispatch] = useReducer(reducer, initialState); 

  function increment() { 
    dispatch({ type: "increase" }); 
  } 
   
  function decrement() { 
    if (state.count > 0) { 
      dispatch({ type: "decrease" }); 
    } 
  } 

  return ( 
    <> 
      <div className="flex flex-col justify-between  ">  
        <div className="w-full h-7"> 
          <h2 className="font-iransans font-medium text-lg ">فیلتر کردن:</h2> 
        </div> 

        <div className="flex flex-row  items-center mt-14 "> 
          <h2 className="text-black text-base font-medium">تعداد نفرات:</h2> 

          <div className="flex flex-row items-center justify-between w-[19%] gap-2 mr-[25px] "> 
            <img src="/svg/showlist/positive_icon.svg" alt="" className="cursor-pointer" onClick={increment} />
            <p className="text-black text-lg font-medium ">{state.count}</p> 
            <img src="/svg/showlist/negative_icon.svg" alt=""  className="cursor-pointer"  onClick={decrement} />
          </div> 
        </div> 
      </div> 
    </> 
  ); 
} 

export default Numberofpeople;
