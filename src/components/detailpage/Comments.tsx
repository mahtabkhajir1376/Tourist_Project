import React from "react";
import SingleComment from "./SingleComment";


const Comments: React.FC = () => {
  return (
    <>
    <h2 className="flex flex-row w-[90%] mx-auto mt-40 mb-[78px] font-iransansNumber text-[32px] font-medium">نظرات مسافران :</h2>
    <div className="flex flex-row justify-around items-center w-[79%] mx-auto">
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
    </>
  );
};

export default Comments;
