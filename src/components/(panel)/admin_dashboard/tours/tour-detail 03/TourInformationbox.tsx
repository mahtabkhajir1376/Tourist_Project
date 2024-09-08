import React from "react";

interface Props {
  title: string;
  explain: string[];
}

const TourInformationbox: React.FC<Props> = ({ title, explain }) => {
  return (
    <div className="w-[43.3%] mb-20 flx flex-col justify-center items-start h-[550px]">
      <h4 className="text-lg font-medium">{title}</h4>
      <textarea
        name=""
        id=""
        className=" w-full h-[278px] mt-6 mb-8 shadow-md outline-[#01A657] text-sm px-4 py-4"
        placeholder=". اینجا بنویسید"
        maxLength={300}
      ></textarea>
      {explain.map((item) => {
        return <li className="font-light text-sm leading-8">{item}</li>;
      })}
    </div>
  );
};

export default TourInformationbox;
