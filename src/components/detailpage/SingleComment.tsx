import React from "react";

type data = {
  userName: string;
  comment: string;
};
export type CommentData = data[];

const SingleComment:React.FC<data> = ({userName,comment}) => {

  return (
    <div className="w-full h-[262px] shadow-2xl  2xl:px-6 sm:px-2 2xl:py-[74px] sm:py-2 font-iransansNumber rounded-md ">
      <div className="flex flex-col mb-6">
        <h6 className="mb-3 text-xs font-regular"> {userName}</h6>
        <div className="flex flex-row w-[29%] justify-between items-center">
          <img src="/svg/commentstarempty.svg" className="w-4 h-4" alt="" />
          <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
          <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
          <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
          <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
        </div>
      </div>
      <p className="text-xs font-light leading-[21.6px]">{comment}</p>
    </div>
  );
};

export default SingleComment;
