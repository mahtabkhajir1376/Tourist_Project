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
          <div className="flex flex-col w-[60%]">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="font-regular text-base leading-8 text-justify mt-12">
              {describtion}
            </p>
          </div>
          <img src={image} alt="" className="w-[268px] h-[268px]" />
        </>
      ) : (
        <>
          <img src={image} alt="" className="w-[268px] h-[268px]" />

          <div className="flex flex-col w-[60%]">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="font-regular text-base leading-8 text-justify mt-12">
              {describtion}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionsandAnswers;
