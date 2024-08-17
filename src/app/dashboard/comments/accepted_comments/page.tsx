import React from "react";
import AcceptedHeader from "@/components/dashboard/comments/AcceptedHeader";
import CommentBox from "@/components/dashboard/comments/CommentBox";
import Pagination from "@/components/dashboard/comments/Pagination";

function page() {
  return (
    <div className="w-full  relative h-lvh  overflow-y-auto">
      <AcceptedHeader />
      <div className="flex flex-row  flex-wrap justify-between items-center 2xl:w-[88%] md:w-[95%] mx-auto my-4">
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </div>
      <Pagination/>
    </div>
  );
}

export default page;
