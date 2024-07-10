import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const tabs = [
    {
      prent: "MAIN",
      chdren: [
        {
          name: "DashBoard",
          link: "/provider/dashboard",
          icon: (
            <GridViewOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
          ),
        },
        
        // {
        //   name: "Personnel",
        //   link: "/provider/personnel",
        //   icon: (
        //     <PeopleAltOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
        //   ),
        // },
        {
          name: "Analytics",
          link: "/provider/dashboard",
          icon: (
            <InsightsOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
          ),
        },
      ],
    },
    {
      prent: "HISTORY",
      chdren: [
        
        {
          name: "Transactions",
          link: "/provider/transactions",
          icon: (
            <PaidOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
          ),
        },
      ],
    },
    {
      prent: "Requests",
      chdren: [
        {
          name: "All",
          link: "/provider/requests",
          icon: (
            <FormatListBulletedOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
          ),
        },
        {
          name: "Incoming",
          link: "/provider/notifications",
          icon: (
            <FormatListBulletedOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
          ),
        },
        {
          name: "Completed",
          link: "/provider/requests",
          icon: (
            <FormatListBulletedOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
          ),
        },
        
       
      ],
    },
    // {
    //   prent: "OTHER",
    //   chdren: [
    //     {
    //       name: "Settings",
    //       link: "/provider/dashboard",
    //       icon: (
    //         <SettingsOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
    //       ),
    //     },
    //     {
    //       name: "Support",
    //       link: "/provider/dashboard",
    //       icon: (
    //         <LiveHelpOutlinedIcon className="w-5 h-5 text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400" />
    //       ),
    //     },
    //   ],
    // },
  ];
  return (
    <div className="w-12 overflow-x-clip hover:w-min flex flex-col  bg-[#f5ffff] min-h-screen h-screen max-h-screen py-5 duration-200 ease-in-out">
      {/* <div>
              <Image src={'/logo.png'} alt='Logo' width={100} height={100} className='w-28 h-8' />
          </div> */}
      <nav className="w-full flex flex-col">
        <ul className="flex flex-col space-y-10 px-2">
          {tabs.map((tab, index) => {
            return (
              <div key={index} className="space-y-2">
                <span className="text-[#999] text-[9.5px]">{tab.prent}</span>
                <div className="flex flex-col space-y-4">
                  {tab.chdren.map((child, index) => {
                    return (
                      <NavLink
                        key={index}
                        to={child.link}
                        className="flex items-center space-x-2 pl-3 pr-2 group focus-within:border-l-4 focus-within:rounded-l-sm focus-within:border-l-slate-700 "
                      >
                        {child.icon && child.icon}
                        <h3 className="font-semibold text-base text-gray-300 group-focus:text-slate-700 group-hover:text-gray-400 cursor-pointer">
                          {child.name}
                        </h3>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
