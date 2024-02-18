import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AdminSidebar from "../DashboardSection/AdminSection/AdminSidebar";

const DashboardLayout = () => {
  const [side, setSide] = useState(false);
  return (
    <div>
      {/* <h1>Toggle</h1> */}
      <div className="flex  gap-1 bg-gray-200 h-[100vh]">
        <div className="text-xl flex flex-col ">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="mt-4 w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
