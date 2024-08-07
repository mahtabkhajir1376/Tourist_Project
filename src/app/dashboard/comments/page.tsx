import React from "react";
import CommentBox from "@/components/dashboard/comments/CommentBox";
import Header from "@/components/dashboard/comments/Header";
function page() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-row  flex-wrap justify-between items-center w-[88%] mx-auto my-4">
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />

      </div>
      <div className="join font-iransansNumber my-0 w-[25%] flex flex-row justify-between items-center mx-auto ">
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
