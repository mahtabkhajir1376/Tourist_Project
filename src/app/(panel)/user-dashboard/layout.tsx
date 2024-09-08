import React from "react";
import Dashboard from "@/components/(panel)/Dashboard";
import Navbar from "@/components/(main)/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8F8F8]">
      <Navbar bgColor="bg-[#F8F8F8]" />
      <main className=" bg-[#F8F8F8] flex flex-row">
        <Dashboard />
        {children}
      </main>
    </div>
  )
}
