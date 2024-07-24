import React from "react";

const SingleComment = () => {
  return (
    <div className="w-[30.75%] h-[262px] shadow-2xl  px-6 py-[74px] font-iransansNumber opacity-40 rounded-md hover:opacity-100 hover:w-[35.5%] hover:h-[302px]">
      <div className="flex flex-col mb-6">
        <h6 className="mb-3 text-xs font-regular">کاظم میرانی</h6>
        <div className="flex flex-row w-[29%] justify-between items-center">
          <img src="/svg/commentstarempty.svg" className="w-4 h-4" alt="" />
          <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
          <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
          <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
          <img src="/svg/commentstarfill.svg" alt="" className="w-4 h-4" />
        </div>
      </div>
      <p className="text-xs font-light leading-[21.6px]">
        من اولین باره با تور شما سفر میکنم خیلی تجربه خوب و با خاطرات خوب برام
        ثبت شد عالی بود الخصوص تورلیدر که بسیار سرزنده و شاد و با حوصله بود ما
        تونستیم هر جایی که میخواستیم بریم و ایشون هم بهمون راهنمایی میکرد
      </p>
    </div>
  );
};

export default SingleComment;
