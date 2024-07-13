import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './AppBar/Navbar';

const ProtectedLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
