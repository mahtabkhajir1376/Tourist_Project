import React from "react";
import TourInformation from "@/components/user-dashboard/reservation/TourInformation";

const data = [
  {
    title: "تور گردشگری 3 روزه‌ی کاشان",
    capacity: 2,
    date: "1403.02.12",
    price: 1.2,
    value: "",
  },
  {
    title: "تور گردشگری 3 روزه‌ی کاشان",
    capacity: 2,
    date: "1403.02.12",
    price: 1.2,
    value: "",
  },
];

function page() {
  return (
    <div className=" w-[88%] mx-auto my-0">
      {data.map((item, index) => {
        return (
          <TourInformation
            canceled={true}
            index={index}
            title={item.title}
            capacity={item.capacity}
            date={item.date}
            price={item.price}
            value={item.value}
          />
        );
      })}
    </div>
  );
}

export default page;
