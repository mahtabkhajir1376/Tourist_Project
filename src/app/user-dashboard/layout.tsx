import React from "react";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8F8F8]">
      <Navbar bgColor="bg-[#F8F8F8]" />
      <main className="flex flex-row bg-[#FCFCFC]">
        <Dashboard />
        {children}
      </main>
    </div>
  );
}
