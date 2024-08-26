// import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import React from 'react'
// import Txtinput from '../../../ui/Txtinput';
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import DataTable from '../../Table/DataTable';
// import Navbar from '../../AppBar/Navbar';


// const Requests = () => {
//   return (
//     <Box className="flex-1 flex flex-col space-y-5">
//       <Navbar/>
//       <div className="flex space-x-3 items-center m-2">
//         <div className=" w-full flex flex-row space-x-3">
//           <div className="w-72">
//             <Txtinput
//               placeholder="Search request id"
//               type="text"
//               icon={<SearchOutlinedIcon className="w-5 h-5 text-slate-400" />}
//             />
//           </div>
//           <div className="w-60">

//           <FormControl className="w-full h-10 flex flex-row items-center rounded-md bg-[#F5FFFF] shadow">
//             <InputLabel id="demo-simple-select-label">Filter</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               label="Filter"
//               className="w-full h-full"
//             >
//               <MenuItem value={10}>Accepted</MenuItem>
//               <MenuItem value={20}>Completed</MenuItem>
//               <MenuItem value={30}>En Route</MenuItem>
//               <MenuItem value={30}>Declined</MenuItem>
//               <MenuItem value={30}>Cancelled</MenuItem>
//             </Select>
//           </FormControl>
//           </div>
//         </div>
//         {/* <div className="flex items-center justify-center w-max">
//           <button className="text-sm w-max p-2 rounded-md shadow bg-[#f5ffff] cursor-pointer">
//             Add New Personnel
//           </button>
//         </div> */}
//       </div>
//       <div>
//         <DataTable />
//       </div>
//     </Box>
//   )
// }

// export default Requests


import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import Txtinput from '../../../ui/Txtinput';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Navbar from '../../AppBar/Navbar';
import DataTable from '../../Table/DataTable';

const Requests = () => {

  const [requests, setRequests] = useState([
    {
        "carDetails": {
            "make": "Toyota",
            "model": "Corolla",
            "year": 2020,
            "licensePlate": "ABC123"
        },
        "location": {
            "latitude": 40.7128,
            "longitude": -74.006,
            "address": "123 Main St, New York, NY 10001"
        },
        "_id": "66ca71d349da71cff5fb8836",
        "userId": "user123",
        "serviceType": "flatTyre",
        "additionalInfo": "Left front tyre is flat",
        "status": "inProgress",
        "createdAt": "2024-08-24T23:50:43.703Z",
        "updatedAt": "2024-08-26T00:33:23.559Z",
        "__v": 0,
        "providerName": "Elton Doe",
        "serviceCharge": "50.00"
    },
    {
        "carDetails": {
            "make": "Toyota",
            "model": "Camry",
            "year": 2020,
            "licensePlate": "ABC123"
        },
        "location": {
            "latitude": 40.7128,
            "longitude": -74.006,
            "address": "123 Main St, New York, NY 10001"
        },
        "_id": "66cbb3aacb3cc9420b0464ab",
        "userId": "user123",
        "serviceType": "flatTyre",
        "additionalInfo": "Left front tyre is flat",
        "status": "pending",
        "createdAt": "2024-08-25T22:43:54.178Z",
        "updatedAt": "2024-08-25T22:43:54.178Z",
        "__v": 0
    },
]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://backendflow12-9a3b18291504.herokuapp.com/api/repair-requests');
        setRequests(response.data);
        console.log("response",response)
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <Box className="flex-1 flex flex-col space-y-5">
      <Navbar />
      <div className="flex space-x-3 items-center m-2">
        <div className=" w-full flex flex-row space-x-3">
          <div className="w-72">
            <Txtinput
              placeholder="Search request id"
              type="text"
              icon={<SearchOutlinedIcon className="w-5 h-5 text-slate-400" />}
            />
          </div>
          <div className="w-60">
            <FormControl className="w-full h-10 flex flex-row items-center rounded-md bg-[#F5FFFF] shadow">
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Filter"
                className="w-full h-full"
              >
                <MenuItem value="accepted">Accepted</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="enRoute">En Route</MenuItem>
                <MenuItem value="declined">Declined</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <DataTable rows={requests} />
        )}
      </div>
    </Box>
  );
};

export default Requests;