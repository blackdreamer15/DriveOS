
//So, now it is working! :).....

// import React,{useEffect,useState } from 'react'

// function App() {
//   const [backendData, setbackendData] =useState([{}]) //set variable that will contain backend data from the backend api

//   useEffect(() =>{
// fetch("http://localhost:5000/api").then(
//   response => response.json()
// ).then(
//   data => {
//     setbackendData(data)
//   }
// )
//   }, 
//   [])//fetch backend api
//   return (
//     <div>

//      {(typeof backendData.users ==='undefined') ? (
//       <p>Loading....</p>
//     ) : (
//       backendData.users.map((user, i) => (
//         <p key={i}> {user}</p>
//       ))

//     )} 
//     </div>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react'
import Home from './components/screens/Home'
import { BrowserRouter,
    Routes,
    Route
 } from 'react-router-dom';
 import { history } from './helper/history';
 import Login from './components/screens/provider/Login';
 import Notifications from './components/screens/provider/Notifications';
 import Personnel from './components/screens/provider/Personnel';
 import Requests from './components/screens/provider/Requests';
 import Transactions from './components/screens/provider/Transactions';
 import Signup from './components/screens/provider/Signup';
 import HomePage from './components/screens/provider/HomePage';
 import ProtectedRoute from './components/PrivateRoute';
import ProvLayout from './components/Layouts/ProvLayout';
import Dashboard from './components/screens/provider/Dashboard';
import Account from './components/screens/provider/Account';
import NavBar from './components/AppBar/Navbar';
import ProtectedLayout from './components/protectedLayout';
function App() {
  const [backendData, setbackendData] =useState([{}]) //set variable that will contain backend data from the backend api

  useEffect(() =>{
fetch("/api").then(
  response => response.json()
).then(
  data => {
    setbackendData(data)
  }
).catch(error => error); //to catch errors from the server
  }, 
  [])//fetch backend api
  return (
    <BrowserRouter>
   
   <div className = "w-full h-screen">
    <Routes>
      <Route path ="/" element={<Home/>} />
      < Route path ="/login" element={<Login/>} />
      < Route path = "/signup" element={<Signup/>} />
    </Routes>

   
    
    <Routes>
      <Route path="/transactions" element={<ProvLayout />} />
      <Route path="/provider/dashboard" element={<Dashboard />} />
      <Route path="/provider/notifications" element={<Notifications />} />
      <Route path="/provider/personnel" element={<Personnel />} />
      <Route path="/provider/requests" element={<Requests />} />
      <Route path="/provider/transactions" element={<Transactions />} />
      
      < Route path = "/dashboard" element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      } />

      < Route path = "/account" element={
        <ProtectedRoute>
          <Account/>
        </ProtectedRoute>
      } />
    </Routes>
   </div>
   
   </BrowserRouter>
  
  )
}

export default App