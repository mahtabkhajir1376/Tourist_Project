import React from "react";
import Dashboard from "@/components/(panel)/Dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="flex flex-row bg-[#FCFCFC]">
        <Dashboard />
        {children}
      </main>
  );
}

