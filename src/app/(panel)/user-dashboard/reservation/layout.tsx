import React from "react";
import Navbar from "@/components/(panel)/user-dashboard/reservation/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-[#F8F8F8] font-iransansNumber mx-auto my-0">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
