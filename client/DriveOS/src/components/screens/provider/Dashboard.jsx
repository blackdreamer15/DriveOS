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
import { Box, FormControlLabel, Switch } from '@mui/material';
import React from 'react'
import DataCard from '../../Cards/DataCard';
import DataChart from '../../Charts/DataChart';
import RatingCard from '../../Cards/RatingCard';

const Dashboard= () => {
  const label = { inputProps: { 'aria-label': 'Available' } }
  return (
    <Box className="flex-1 flex flex-col space-y-5">
      <div className="flex w-full flex-row justify-between">
        <div></div>
        <div className="bg-[#f5ffff] w-72 py-1 px-2 ">
          <FormControlLabel control={<Switch defaultChecked />} label="Available to receive requests" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <DataCard
          value={243}
          tooltip={"Total number of completed requests for the month"}
          label={"Completed Requests"}
        />
        <DataCard
          value={2432}
          tooltip={"Total money earned for the month"}
          label={"Total Revenue"}
          prefix={"₵"}
          down
        />
        <DataCard value={243} tooltip={"Employees"} label={"Total employees"} />
        <DataCard value={243} tooltip={"Employees"} label={"Total employees"} />
      </div>

      <div className="w-full flex flex-row space-x-5 justify-between py-5">
        <div className="flex-1">
          <DataChart
            title={"Completed Requests"}
            subtitle={"February"}
            type={"line"}
          />
        </div>
        <div className="flex-1">
          <DataChart
            title={"Completed Requests"}
            subtitle={"February"}
            type={"bar"}
          />
        </div>
      </div>
      <div className="flex-1 bg-white space-x-5 p-3">
        {/* <DataTable /> */}
        <div className="flex-1">
        <RatingCard />

        </div>
        <div className="flex-1">

        </div>
      </div>
      {/* <div className=' w-80 flex flex-col bg-[#f5ffff]'> */}
      {/* <div className='flex flex-row justify-between flex-wrap  items-center'>
          <DataList title={'Top Service Providers'} />
          <DataList title={'Top Cities'} />
          <DataList title={'Top Service Providers'} />
          <DataList title={'Top Cities'} />
        </div> */}
      {/* </div> */}
    </Box>
  );
}

export default Dashboard;
