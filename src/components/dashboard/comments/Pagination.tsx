import React from 'react'

function Pagination() {
  return (
    <div className="join font-iransansNumber my-0 w-[20%] flex flex-row justify-between items-center mx-auto py-4  bottom-0 right-[50%] ">
    <button className=" join-item">
      <img src="/svg/dashboard/pagination_arrow_right.svg" alt="" />
    </button>
    <button className="w-8 h-8 hover:shadow-md hover:shadow-[#E3EBE9] opacity-60 rounded-md hover:opacity-100 ">1</button>
    <button className="w-8 h-8  hover:shadow-md hover:shadow-[#E3EBE9]  rounded-md opacity-60  hover:opacity-100 ">2</button>
    <button className="w-8 h-8  hover:shadow-md hover:shadow-[#E3EBE9]  rounded-md opacity-60  hover:opacity-100 ">3</button>
    <button className="w-8 h-8  hover:shadow-md hover:shadow-[#E3EBE9]  rounded-md opacity-60  hover:opacity-100  ">4</button>
    <button className="w-8 h-8  hover:shadow-md hover:shadow-[#E3EBE9]  rounded-md opacity-60  hover:opacity-100  ">5</button>
    <button className="join-item ">
      <img src="/svg/dashboard/pagination_arrow_left.svg" alt="" />
    </button>
  </div>
  )
}

export default Pagination