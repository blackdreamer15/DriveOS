// src/pages/Dashboard.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      <p>This is a protected route. Only logged-in users can access this page.</p>
    </div>
  );
};

export default HomePage;
