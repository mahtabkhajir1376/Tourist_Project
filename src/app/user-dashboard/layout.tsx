import React from "react";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar bgColor="bg-[#FcFcFc]" />
      <main className="flex flex-row bg-[#FCFCFC]">
        <Dashboard />
        {children}
      </main>
    </>
  );
}
