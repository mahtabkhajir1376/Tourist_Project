import React from "react";
import TicketCard from "@/components/buyrecive/TicketCard";

function page() {
  return (
    <div className="w-full my-4">
      <TicketCard width="w-[84%]" margin="mb-4" shadowBox="none" bgColor="bg-white" />
      <TicketCard width="w-[84%]" margin="mb-4" shadowBox="none" bgColor="bg-white"  />
    </div>
  );
}

export default page;
