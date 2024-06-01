
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

function App() {
  const [backendData, setbackendData] =useState([{}]) //set variable that will contain backend data from the backend api

  useEffect(() =>{
fetch("/api").then(
  response => response.json()
).then(
  data => {
    setbackendData(data)
  }
).catch(error => console.error('Error fetching data:', error)); //to catch errors from the server
  }, 
  [])//fetch backend api
  return (
   <BrowserRouter>
   <div className = "w-full h-screen">
    <Routes>
        <Route path ="/" element={<Home/>} />
    </Routes>
   </div>
   
   </BrowserRouter>
  
  )
}

export default App