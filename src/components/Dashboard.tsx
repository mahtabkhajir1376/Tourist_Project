import React from "react";
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
    <div className="w-[29%] shadow-2xl h-[663px]  my-4 mr-11 flex flex-col justify-around items-center font-iransansNumber">
      <div className="bg-gradient-to-r from-[#7B4794] from-50%  to-[#01A688]  text-transparent bg-clip-text  w-full  mr-2 flex flex-row justify-start items-center text-2xl font-demiBold ">
        <img
          src="/svg/logo-new/Logo_dashboard.svg"
          className="w-12 ml-2"
          alt=""
        />
        سفرجو
      </div>
      <div className=" flex flex-col justify-around items-center w-full h-[400px] mb-10 text-[#333333]  ">
        {dashboardList.map((item) => {
          return (
            <Link
              href={item.rout}
              className="flex flex-row justify-start items-center w-full hover:bg-[#D8BFD829] hover:border-l-8 hover:border-[#7B4794] hover:rounded-l-md pr-9 py-4"
            >
              <img src={item.iconPath} alt=""  className=""/>
              <p className="mr-6 text-base font-medium">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <Link
        href="/"
        className="flex flex-row justify-start items-center w-full text-[#333333]  hover:bg-[#D8BFD829] pr-9 py-4 hover:border-l-8 hover:border-[#7B4794]  hover:rounded-l-md"
      >
        <img src="/svg/dashboard/logout_icon.svg" alt="" />
        <p className="mr-5 text-base font-medium">خروج از حساب کاربری</p>
      </Link>
    </div>
  );
};

export default Dashboard;
