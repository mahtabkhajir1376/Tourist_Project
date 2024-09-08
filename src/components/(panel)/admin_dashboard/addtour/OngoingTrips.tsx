"use client";
import React from "react";
import Link from "next/link";

export default function OngoingTrips() {
  const tours = [
    {
      name: "کمپ جنگل گیسوم",
      type: "طبیعت گردی / کمپ / چادر",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
      price: "1.500.000 تومان",
    },
    {
      name: "آبشار مخمل کوه لرستان",
      type: "طبیعت گردی / کمپ / هتل",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
      price: "2.500.000 تومان",
    },
    {
      name: "کویر سمنان",
      type: "کویر گردی / گروهی / چادر",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
      price: "2.500.000 تومان",
    },
    {
      name: "کمپ جنگل گیسوم",
      type: "طبیعت گردی / کمپ / چادر",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
      price: "2.500.000 تومان",
    },
    {
      name: "آبشار مخمل کوه لرستان",
      type: "طبیعت گردی / کمپ / هتل",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
      price: "2.500.000 تومان",
    },
    {
      name: "کمپ جنگل گیسوم",
      type: "طبیعت گردی / کمپ / چادر",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
      price: "2.500.000 تومان",
    },
  ];

  const renderAccessIcons = (tour) => (
    <div className="flex justify-center gap-2">
      <img
        src="/image/DetailsTour/TourdetailsCard/deleteiconaddtour.svg"
        alt="Delete"
        className="w-4 h-4"
      />
      <img
        src="/image/DetailsTour/TourdetailsCard/editiconaddtour.svg"
        alt="Edit"
        className="w-4 h-4"
      />
    </div>
  );

  return (
    <div className="overflow-x-auto flex justify-center items-center mt-8">
      <table className="table bg-white w-[80%] border-collapse">
        <thead className="bg-[#7B4794] text-white">
          <tr>
            <th className="p-4 text-center">نام و شهر تور</th>
            <th className="p-4 text-center">امکانات تور</th>
            <th className="p-4 text-center">دسته بندی و نوع تور</th>
            <th className="p-4 text-center">قیمت</th>
            <th className="p-4 text-center">دسترسی ها</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tours.map((tour, index) => (
            <tr className="border-b" key={index}>
              <th className="p-4 text-center font-regular">{tour.name}</th>
              <td className="p-4 text-center">{tour.facilities}</td>
              <td className="p-4 text-center">{tour.type}</td>
              <td className="p-4 text-center">{tour.price}</td>
              <td className="p-4 text-center">
                {renderAccessIcons(tour)}
                <Link
                  href="/dashboard/comments/tourinfo"
                  className="text-sm text-[#01A657] mt-2 block"
                >
                  مشاهده جزئیات
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
