import React from "react";
import Navbar from "../AppBar/Navbar";
import Sidebar from "../AppBar/Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const ProvLayout = () => {
  return (
    <Box className=" w-full flex flex-col h-full bg-gray-100 max-h-screen overflow-y-hidden">
      <Navbar />
      {/* <span>Navbar</span> */}
      <div className="w-full flex flex-row h-full bg-gray-100 max-h-screen overflow-y-hidden ">
        <Sidebar />
        {/* <span>SIdebar</span> */}
        <div className="w-full h-full max-h-screen overflow-y-scroll pt-10 pb-20 max-w-full overflow-x-hidden mx-5">
          <Outlet />
        </div>
      </div>
    </Box>
  );
};

export default ProvLayout;
