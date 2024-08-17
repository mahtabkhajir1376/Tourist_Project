"use client"
import React,{useState} from "react";
import Link from "next/link";

interface item {
  iconPath: string;
  title: string;
  rout:string
}

type DashboardList = item[];

const Dashboard: React.FC = () => {


  const dashboardList: DashboardList = [
    { iconPath: "/svg/dashboard/dashboard_icon.svg", title: "داشبورد",rout:"/dashboard" },
    { iconPath: "/svg/dashboard/comment_icon.svg", title: "نظرات",rout:"/dashboard/comments"  },
    { iconPath: "/svg/dashboard/users_icon.svg", title: "کاربران",rout:"/dashboard/users"  },
    { iconPath: "/svg/dashboard/tours_icon.svg", title: "تور ها",rout:"/dashboard/tours"  },
    { iconPath: "/svg/dashboard/banner_icon.svg", title: "بنر ها",rout:"/dashboard/banners"  },
    { iconPath: "/svg/dashboard/reservation_icon.svg", title: "رزرو ها",rout:"/dashboard/reservations"  },
    { iconPath: "/svg/dashboard/manageroles_icon.svg", title: "مدیریت نقش ها",rout:"/dashboard/manage_roles"  },
    { iconPath: "/svg/dashboard/setting_icon.svg", title: "تنظیمات",rout:"/dashboard/setting"  },
  ];




  return (
    <div className={`2xl:w-[25%] md:w-[30%] sm:w-[27%] lg:w-[27%] xl:w-[20%] shadow-2xl 2xl:h-[663px] xl:h-[663px] sm:h-[520px]  my-4 mr-4 flex flex-col justify-around items-center font-iransansNumber   sticky top-0 h-screen`}>
     <div className="bg-gradient-to-r from-[#7B4794] from-50%  to-[#01A688]  text-transparent bg-clip-text  w-full  my-2 mr-2 flex flex-row justify-start items-center 2xl:text-2xl xl:text-2xl lg:text-lg font-demiBold ">
        <img
          src="/svg/logo-new/Logo_dashboard.svg"
          className="2xl:w-12 ml-2 xl:w-12 sm:w-6 lg:w-8"
          alt=""
        />
        سفرجو
      </div>
      <div className=" flex flex-col justify-around items-center w-full h-[400px] mb-2 text-[#333333]  ">
        {dashboardList.map((item) => {
          return (
            <Link
              href={item.rout}
              className="flex flex-row justify-start items-center w-full hover:bg-[#D8BFD829] hover:border-l-8 hover:border-[#7B4794] hover:rounded-l-md pr-9 py-2"
            >
              <img src={item.iconPath} alt=""  className="2xl:w-6 2xl:h-6 xl:w-6 xl:h-6 md:w-4 md:h-4 sm:w-2 sm:h-2 lg:w-5 lg:h-5"/>
              <p className="mr-6 2xl:text-sm md:text-[10px] sm:text-[8px] lg:text-xs font-medium">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <Link
        href="/"
        className="flex flex-row justify-start items-center w-full text-[#333333]  hover:bg-[#D8BFD829] pr-9 py-2 hover:border-l-8 hover:border-[#D23D3D]  hover:rounded-l-md"
      >
        <img src="/svg/dashboard/logout_icon.svg" alt="" className="2xl:w-6 2xl:h-6 xl:w-6 xl:h-6 md:w-4 md:h-4 sm:w-2 sm:h-2  lg:w-5 lg:h-5" />
        <p className="mr-5 2xl:text-sm md:text-[10px] sm:text-[8px] lg:text-xs  font-medium">خروج از حساب کاربری</p>
      </Link>
    </div>
  );
};

export default Dashboard;
