import React from "react";
import Header from "@/components/user-dashboard/about-us/Header";
import QuestionsandAnswers from "./QuestionsandAnswers";

const aboutusData = [
  {
    title: "تنوع زیاد",
    describtion:
      "ما اینجا هم داخلی داریم هم خارجی ، از شمال و جنوب بگیر تا غرب و شرق ، از تفریحی تا زیارتی ، دیگه تاریخی و بومگردی رو محاله بتونی جایی غیر از سفرجو ببینی ! ",
    image: "/image/dashboard/About us second.svg",
  },
  {
    title: "قیمت های به‌صرفه",
    describtion:
      "دیگه اگه جزو کاربرای ثابت ما هستین که میدونین چقدر به فکرتونیم ، اگرم اومدین سری به سایت ما بزنین باید بگم که قیمت‌های سفرجو تو هیچ سایت دیگه‌ای پیدا نمیشه وقتشه اینجا موندگار شی رفیق !",
    image: "/image/dashboard/About us-third.svg",
  },
  {
    title: "سلامت تور",
    describtion:
      "خیالت از بابت جو و فضای تورها راحت باشه ، ما حواسمون به همه چی هست ، برای حریم خصوصیت ارزش قائلیم ، کمپ های سفرجو با رعایت تمام ارزش های اخلاقی برگزار میشه!",
    image: "/image/dashboard/About us-four.svg",
  },
  {
    title: "امکانات کافی",
    describtion:
      "سفر با سفر فرق داره ، ولی بدون امکانات مورد نظر هر توری که بری برات فراهمه ، در ضمن سفرجو عکاس اختصاصی ام داره تا بتونی لحظات ناب سفرت رو همیشه به یاد بیاری !",
    image: "/image/dashboard/About us-five.svg",
  },
];

function page() {
  return (
    <div className="font-iransansNumber  w-full relative h-lvh  overflow-y-auto bg-[#F8F8F8] ">
      <div className="w-[85.5%] bg-white h-[1994px] mx-auto my-4 rounded-md shadow-md mb-4">
        <Header />
        <div className="flex flex-row  w-[93%] justify-between items-center mx-auto my-4">
          <div className="flex flex-col w-[60%]">
            <h3 className="text-lg font-medium">
              ما کی هستیم و چیکار میکنیم ؟
            </h3>
            <p className="font-regular text-base leading-8 text-justify mt-12">
              سلام خدمت تمام کاربران سفرجو ، عرضم به خدمت شما که سفرجو یک تیم
              بزرگ تهیه تورهای داخلی و خارجی برای مردم عزیز کشورمونه ، ما سعی
              کردیم هر توری که فکر میکنیم میتونه برای شما جذاب باشه رو جمع آوری
              کنیم و اینجا در اختیارتون باشه ، تنها دلخوشی تیم سفرجو رضایت شماست
              ، امیدوارم بتونیم با بهترین خدمات و امکانات خاطره های خوبی براتون
              به یادگار بذاریم .,
            </p>
          </div>
          <img
            src="/image/dashboard/About us-fist.svg"
            alt=""
            className=" h-[264px]"
          />
        </div>
        <div className="flex flex-col justify-between mt-36">
          <h3 className="font-medium text-lg w-[93%] mx-auto mb-8">حالا چرا سفرجو ؟</h3>
          {aboutusData.map((item, index) => {
            return (
              <QuestionsandAnswers
                index={index}
                title={item.title}
                describtion={item.describtion}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
