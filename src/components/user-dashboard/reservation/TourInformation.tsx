import React from "react";
import Link from "next/link";

export interface ItemData {
  title: string;
  capacity: number;
  price: number;
  date: string;
  value: string;
  index: number;
  canceled: boolean;
}

const TourInformation: React.FC<ItemData> = ({
  title,
  capacity,
  price,
  date,
  value,
  index,
  canceled = false,
}) => {
  return (
    <div
      key={index}
      className={`w-full bg-white flex flex-row justify-between items-center h-14 font-iransansNumber px-6 py-3 rounded-md border-r-4 mb-4 ${
        index % 2 ? "border-[#7B4794]" : "border-[#01A657]"
      }`}
    >
      <span className="text-sm font-medium">{title}</span>
      <span className="text-sm font-medium">{`${capacity} نفر`}</span>
      <span className="text-sm font-medium">{` ${price}  تومان`}</span>
      <span className="text-base font-light">{date}</span>
      {canceled ? (
        <span>استرداد شد</span>
      ) : (
        <>
          <Link href="" className="text-xs font-regular text-[#01A657]">
            مشاهده جزئیات
          </Link>
          <input
            type="checkbox"
            value={value}
            className="checkbox checkbox-success w-6 h-6 text-white bg-[#DDFFF8] border-none  md:w-4 md:h-4 lg:w-6 lg:h-6"
            defaultChecked
          />
        </>
      )}
    </div>
  );
};

export default TourInformation;
