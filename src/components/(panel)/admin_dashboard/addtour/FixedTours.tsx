"use client";
import React, { useState } from "react";
import Link from "next/link";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import transition from "react-element-popper/animations/transition";

function Modal({ show, onClose, content }) {
  const [checkedPopular, setCheckedPopular] = useState(false);
  const [checkedSpecial, setCheckedSpecial] = useState(false);

  if (!show) {
    return null;
  }

  const inputFields = [
    { label: "ظرفیت ", name: "capacity" },
    { label: "تخفیف ", name: "off" },
    { label: "قیمت ", name: "price" },
    { label: "غذا ", name: "food" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-lg w-[500px] h-[650px] flex flex-col justify-between">
        <div className="flex flex-col gap-4 items-center mb-4 w-full">
          {inputFields.map((field, index) => (
            <div key={index} className="flex flex-col w-full  pl-4 pr-4">
              <div className="flex items-center justify-between">
                <img
                  src="/image/LoginForm/Edit.png"
                  alt="Edit"
                  className="w-4 h-4 ml-2"
                />
                <label className="w-1/4 text-right">{field.label}:</label>
                <input
                  type="text"
                  className="input input-bordered input-success w-full h-8 max-w-xs"
                />
              </div>
              <span className="text-gray-400 text-[10px] mt-1  mr-[27%] text-right leading-4"> 
                {field.name === "capacity"
                  ? "زمان دقیق روز و شب (مثال : 2 روز و 1 شب )"
                  : field.name === "off"
                    ? "میزان درصد تخفیف مدنظر خود را در کادر وارد کنید"
                    : field.name === "price"
                      ? "قیمت تور مورد نظر را به تومان وارد کنید"
                      : field.name === "food"
                        ? "وعده های که سرو میشوند (صبحانه / نهار / شام) قید شود"
                        : ""}
              </span>
            </div>
          ))}

          
          <div className="flex flex-row mt-4 justify-between items-center w-full">
            <h2 className="text-base text-black font-regular w-[30%]">تاریخ برگزاری :</h2>
            <div className="flex flex-col sm:flex-row justify-between items-center w-[70%]">
              <p className="text-[rgb(0,0,0,0.5)] font-light pl-2">از</p>
              <DatePicker
                className="green"
                calendar={persian}
                locale={persian_en}
                animations={[transition({ duration: 800, from: 100 })]}
                calendarPosition="bottom-right"
                inputClass="custom-input border px-2 rounded-md placeholder:text-[#01A657] placeholder:text-xs placeholder:text-center border-[#01A657] w-[94%] h-8 p-1 bg-white shadow-md transition-shadow duration-200 text-center focus:outline-none focus:border-[#01A657]"
                placeholder="__  / __  / __"
              />
              <p className="text-[rgb(0,0,0,0.5)] font-light pl-2">تا</p>
              <DatePicker
                className="green"
                calendar={persian}
                locale={persian_en}
                animations={[transition({ duration: 800, from: 100 })]}
                calendarPosition="bottom-right"
                inputClass="custom-input border placeholder:text-[#01A657] px-2 placeholder:text-xs placeholder:text-center rounded-md border-[#01A657] w-[94%] h-8 flex flex-row justify-center items-center bg-white shadow-md transition-shadow duration-200 focus:outline-none focus:border-[#01A657]"
                placeholder="__  / __  / __"
              />
            </div>
          </div>

          
          <div className="flex flex-row mt-4 justify-between items-center w-full text-sm ">
            <label className=" text-black font-regular w-[70%] text-right">
              الویت نمایش در بخش محبوب ها
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-success"
                checked={checkedSpecial}
                onChange={() => setCheckedSpecial(!checkedSpecial)}
              />
            </label>
          </div>
          <div className="flex flex-row mt-4 justify-between items-center w-full text-sm">
            <label className=" text-black font-regular w-[70%] text-right">
              الویت نمایش در بخش تخفیفات ویژه
            </label>
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-success"
                  checked={checkedSpecial}
                  onChange={() => setCheckedSpecial(!checkedSpecial)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-[#01A657] text-white px-4 py-2 rounded-md h-[40px] w-[250px]"
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TableAddtour() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const tours = [
    {
      name: "کمپ جنگل گیسوم",
      type: "طبیعت گردی / کمپ / چادر",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
    },
    {
      name: "آبشار مخمل کوه لرستان",
      type: "طبیعت گردی / کمپ / هتل",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
    },
    {
      name: "کویر سمنان",
      type: "کویر گردی / گروهی / چادر",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
    },
    {
      name: "کمپ جنگل گیسوم",
      type: "طبیعت گردی / کمپ / چادر",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
    },
    {
      name: "آبشار مخمل کوه لرستان",
      type: "طبیعت گردی / کمپ / هتل",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
    },
    {
      name: "کمپ جنگل گیسوم",
      type: "طبیعت گردی / کمپ / چادر",
      facilities: "امکانات: غذا / تورلیدر / عکاس",
    },
  ];

  const handleShowClick = (tour) => {
    setModalContent(
      `نام تور: ${tour.name}\nنوع تور: ${tour.type}\nامکانات: ${tour.facilities}`
    );
    setModalOpen(true);
  };

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
      <img
        src="/image/DetailsTour/TourdetailsCard/showtouriconaddtour.svg"
        alt="Show"
        className="w-4 h-4 cursor-pointer"
        onClick={() => handleShowClick(tour)}
      />
    </div>
  );

  return (
    <>
      <div className="relative mt-2 flex justify-start mr-[10%]">
        <Link
          href="/add_tour"
          className="text-[#01A657] text-sm bg-white w-[184px] h-12 flex justify-center items-center relative shadow-[#E3EBE9] shadow-md rounded-md"
        >
          <img
            src="/image/DetailsTour/TourdetailsCard/addtour.svg"
            alt="Add Tour"
            className="absolute right-4 w-6 h-6 object-cover"
          />
          اضافه کردن تور
        </Link>
      </div>

      <div className="overflow-x-auto flex justify-center items-center mt-8">
        <table className="table bg-white w-[80%] border-collapse">
          <thead className="bg-[#7B4794] text-white">
            <tr>
              <th className="p-4 text-center">نام و شهر تور</th>
              <th className="p-4 text-center">امکانات تور</th>
              <th className="p-4 text-center">دسته بندی و نوع تور</th>
              <th className="p-4 text-center">دسترسی ها</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tours.map((tour, index) => (
              <tr className="border-b" key={index}>
                <th className="p-4 text-center font-regular">{tour.name}</th>
                <td className="p-4 text-center">{tour.facilities}</td>
                <td className="p-4 text-center">{tour.type}</td>
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

      <Modal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
      />
    </>
  );
}
