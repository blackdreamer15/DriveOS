import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {

  const {user} = useContext(AuthContext)
  return (
    <nav className="w-full py-3 bg-[#f5ffff] flex flex-row px-3 items-center justify-between">
      <NavLink
        to="/"
      >

      <img
        src={"/logo.png"}
        width={100}
        height={100}
        alt="logo"
        className="w-20 h-8"
        />
        </NavLink>
      <div className="flex flex-row space-x-2 items-center">
        <Avatar alt={user?.name} className="w-7 h-7" />
        <h3 className="text-base text-slate-700">{user?.name}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
