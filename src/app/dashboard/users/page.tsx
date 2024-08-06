import React from "react";
import Users from "@/components/dashboard/users/Users";
import SearchBox from "@/components/dashboard/users/SearchBox";

function page() {
  return (
    <div className="w-full">
      <SearchBox />
      <Users />
    </div>
  );
}

export default page;
