// // src/pages/Dashboard.jsx
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
//       <p>This is a protected route. Only logged-in users can access this page.</p>
//     </div>
//   );
// };

// export default HomePage;
import React from "react";
// import Navbar from "../Navs/Navbar";
// import Sidebar from "../Navs/Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const HomePage = () => {
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

export default HomePage;
