import React from "react";
import CommentBox from "@/components/dashboard/comments/CommentBox";
import Header from "@/components/dashboard/comments/Header";
import Pagination from "@/components/dashboard/comments/Pagination";

function page() {
  return (
    <div className="w-full relative h-lvh  overflow-y-auto">
      <Header />
      <div className="flex flex-row  flex-wrap justify-between items-center 2xl:w-[88%] md:w-[88%] xl:w-[88%] mx-auto my-4">
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </div>
      <Pagination />
    </div>
  );
}

export default page;
