import React from "react";
import Navbar from "@/components/user-dashboard/reservation/Navbar";
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
    <div className="w-full bg-[#F8F8F8] font-iransansNumber">
      <Navbar />
      <div className="w-[88%] mx-auto my-0">
        {data.map((item, index) => {
          return (
            <TourInformation
            canceled={false}
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
    </div>
  );
}

export default page;
