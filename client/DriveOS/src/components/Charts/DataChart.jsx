'use client';
import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement,
  Legend,
  Tooltip,
  PointElement
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Box } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import Tooltipx from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip
);


const DataChart = ({ title, subtitle, label, tooltip, type }) => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: '',
        fill: true,
        backgroundColor:'skyblue',
        data: [10, 15, 56, 63, 96, 23, 33],

      },
    ]
  };
  return (
    <Box className='w-full flex flex-col py-5 px-10 shadow-sm rounded-md border border-slate-200 bg-[#f5ffff]'>
      <div className='flex flex-row justify-between'>
        <div className='space-y-2'>
        <h2 className='text-lg text-slate-700 font-semibold'>{title}</h2>
        <h3 className='text-sm font-semibold text-gray-400'>{subtitle}</h3>
        </div>
        <Tooltipx title={tooltip} className=' h-min w-min rounded-full'>
                  <IconButton>
                      <InfoOutlinedIcon className='text-lg text-gray-300' />
      </IconButton>
    </Tooltipx>
      </div>
      <div className='flex-1 min-w-min'>
        <Chart type={type} data={data} className='h-full w-full' />
      </div>
    </Box>
  )
}

export default DataChart