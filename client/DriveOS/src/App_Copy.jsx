import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/provider/Login';
import Notifications from './components/screens/provider/Notifications';
import Personnel from './components/screens/provider/Personnel';
import Requests from './components/screens/provider/Requests';
import Transactions from './components/screens/provider/Transactions';
import Signup from './components/screens/provider/Signup';
import Dashboard from './components/screens/provider/Dashboard';
import NavBar from './components/AppBar/Navbar';
import ProtectedRoute from './components/PrivateRoute';
import ProvLayout from './components/Layouts/ProvLayout';

function App() {
  const [backendData, setBackendData] = useState([{}]); // set variable that will contain backend data from the backend api

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => error); // to catch errors from the server
  }, []); // fetch backend api

  const protectedRoutes = [
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/notifications', element: <Notifications /> },
    { path: '/personnel', element: <Personnel /> },
    { path: '/requests', element: <Requests /> },
    { path: '/transactions', element: <Transactions /> },
  ];

  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <NavBar />

        <Routes>
          <Route path="/transactions" element={<ProvLayout />} />
          <Route path="/provider/dashboard" element={<Dashboard />} />
          <Route path="/provider/notifications" element={<Notifications />} />
          <Route path="/provider/personnel" element={<Personnel />} />
          <Route path="/provider/requests" element={<Requests />} />
          <Route path="/provider/transactions" element={<Transactions />} />

          {protectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<ProtectedRoute>{route.element}</ProtectedRoute>}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
