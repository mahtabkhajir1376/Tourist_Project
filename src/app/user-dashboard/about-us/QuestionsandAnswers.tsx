import React from "react";

interface Props {
  title: string;
  describtion: string;
  image: string;
  index: number;
}

const QuestionsandAnswers: React.FC<Props> = ({
  title,
  describtion,
  image,
  index,
}) => {
  return (
    <div
      className="flex flex-row  w-[93%] justify-between items-center mx-auto my-4"
      key={index}
    >
      {index % 2 ? (
        <>
          <div className="flex flex-col 2xl:w-[60%]">
            <h3 className="2xl:text-lg md:text-sm  lg:text-base xl:text-lg font-medium">{title}</h3>
            <p className="font-regular 2xl:text-base md:text-xs lg:text-sm xl:text-base 2xl:leading-8  lg:leading-6 md:leading-5 xl:leading-8 text-justify mt-12">
              {describtion}
            </p>
          </div>
          <img src={image} alt="" className="2xl:w-[268px] 2xl:h-[268px] md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60" />
        </>
      ) : (
        <>
          <img src={image} alt="" className="2xl:w-[268px] 2xl:h-[268px] md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60" />

          <div className="flex flex-col w-[60%]">
            <h3 className="2xl:text-lg md:text-sm lg:text-base xl:text-lg font-medium">{title}</h3>
            <p className="font-regular 2xl:text-base md:text-xs lg:text-sm xl:text-base  md:leading-5 2xl:leading-8 lg:leading-6 xl:leading-8 text-justify mt-12">
              {describtion}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionsandAnswers;
