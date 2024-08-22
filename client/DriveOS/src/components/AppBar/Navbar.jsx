import React, { useState, useEffect, useRef, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { AuthContext } from "../Context/AuthContext";
import DropDown from "../dropdowns/Dropdown";

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


    return (
      <div className="w-full py-3 bg-[#f5ffff] flex flex-row px-3 items-center justify-between">
        <NavLink to="/">
          <img
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="w-20 h-8"
          />
        </NavLink>
        
        <div className="flex flex-row space-x-4 items-center">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li> */}
            
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="focus:outline-none">
                My transactions
              </button>
              {isDropdownOpen && (
                <ul className="z-40 absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                  <li>
                    <NavLink to="/provider/notifications" onClick={handleOptionClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Notifications</NavLink>
                  </li>
                  <li>
                    <NavLink to="/provider/personnel" onClick={handleOptionClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Personnel</NavLink>
                  </li>
                  <li>
                    <NavLink to="/provider/requests" onClick={handleOptionClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Requests</NavLink>
                  </li>
                  <li>
                    <NavLink to="/provider/transactions" onClick={handleOptionClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Transactions</NavLink>
                  </li>
                </ul>
              )}
            </div>
          </ul>
          {/* <NavLink to="/provider/personnel">My Details</NavLink> */}
          {/* <NavLink to="/user">My</NavLink> */}
          <DropDown trigger="My transactions" />
          {/* <h3 className="text-base text-slate-700">name</h3> */}
        </div>
      </div>
    );
  




  // const {user} = useContext(AuthContext)
  // return (
  //   <nav className="w-full py-3 bg-[#f5ffff] flex flex-row px-3 items-center justify-between">
  //     <NavLink
  //       to="/"
  //     >

  //     <img
  //       src={"/logo.png"}
  //       width={100}
  //       height={100}
  //       alt="logo"
  //       className="w-20 h-8"
  //       />
  //       </NavLink>
  //     <div className="flex flex-row space-x-2 items-center">
  //       <NavLink to="/provider/personnel">My Details</NavLink>
  //       <NavLink to="/user">My</NavLink>
  //       {/* <Avatar alt={user?.name} className="w-7 h-7" /> */}
  //       <h3 className="text-base text-slate-700">name</h3>
  //       {/* <h3 className="text-base text-slate-700">{user?.name}</h3> */}
  //     </div>
  //   </nav>
  // );
};

export default Navbar;
