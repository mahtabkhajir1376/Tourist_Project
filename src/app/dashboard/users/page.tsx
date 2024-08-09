import React from "react";
import Users from "@/components/dashboard/users/Users";
import SearchBox from "@/components/dashboard/users/SearchBox";

function page() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="w-full ">
        <SearchBox />
        <Users />
      </div>
      <div className="join font-iransansNumber my-4 w-[25%] flex flex-row justify-between items-center ">
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
    </div>
  );
}
export default page;
