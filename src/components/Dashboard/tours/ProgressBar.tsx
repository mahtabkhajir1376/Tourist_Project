import React from "react";


interface Props {
  value:string
}


const ProgressBar:React.FC<Props> = ({value}) => {
  const titles = [
    { icon: "/svg/purpuleperson.svg", title: "بارگذاری تصاویر" },
    { icon: "/svg/dashboard/calender.svg", title: "ویژگی و اطلاعات دقیق" },
    { icon: "/svg/dashboard/list.svg", title: "توضیحات تور" },
  ];

  return (
    <div className="flex flex-row w-[90%] mx-auto my-4 justify-between items-center">
      <div className="flex flex-col justify-center items-center w-[95%] ">
        <div className="flex flex-row justify-between items-center w-full">
          {titles.map((item, index) => {
            return (
              <div
                className="flex flex-row justify-center items-center "
                key={index}
              >
                <img src={item.icon} alt="" />

                <span className="mr-3 text-base font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-5 h-2 bg-white rounded-full w-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r ${value} from-[#7B4794]  to-[#01A657]`}></div>
        </div>
      </div>
      <img
        src="/svg/dashboard/arrow_left.svg"
        alt=""
        className="2xl:w-[38px] 2xl:h-[38px] md:w-6 md:h-6 mt-5"
      />
    </div>
  );
};

export default ProgressBar;
