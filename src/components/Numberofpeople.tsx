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
      <div className="flex flex-col justify-between mt-6 ">  
        <div className="w-full h-7"> 
          <h2 className="font-iransans font-medium text-lg leading-7">فیلتر کردن:</h2> 
        </div> 

        <div className="flex flex-col md:flex-row items-center mt-20 "> 
          <h2 className="text-black text-base leading-7 font-medium">تعداد نفرات:</h2> 

          <div className="flex flex-row items-center gap-2 mr-[25px] "> 
            <button className="bg-[#99DBBC] text-[#01A657] w-8 h-8 rounded-lg flex items-center justify-center" onClick={increment}>+</button> 
            <p className="text-black text-lg font-medium leading-7">{state.count}</p> 
            <button className="bg-[#EDB1B1] text-[#D23D3D] w-8 h-8 rounded-lg flex items-center justify-center" onClick={decrement}>-</button> 
          </div> 
        </div> 
      </div> 
    </> 
  ); 
} 

export default Numberofpeople;
