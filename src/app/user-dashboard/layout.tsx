import React from "react";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col  h-lvh ">
      <Navbar bgColor="bg-[#F8F8F8]" />
      <div className="flex flex-row  bg-[#F8F8F8] h-max">
      <Dashboard />
      {children}
      </div>
    </main>
  );
}
