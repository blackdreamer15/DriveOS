import { Box } from '@mui/material'
import React from 'react'
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Avatar from "@mui/material/Avatar";

const RatingCard = () => {
  return (
    <Box className="bg-[#f5ffff] min-w-56 p-3 shadow-sm rounded-md space-y-5 border border-slate-200">
          <div className='flex items-center justify-between'>
          <div className="flex flex-row space-x-2 items-center">
        <Avatar alt="Remy Sharp" className="w-7 h-7">
          <img src={"/logo.png"} alt="avatar"  />
        </Avatar>
        <h3 className="text-base text-slate-700">Stunncust Autoworks</h3>
      </div>
              <Tooltip title={'tooltip'} className="p-1">
          <IconButton>
            <InfoOutlinedIcon className="text-lg text-gray-300" />
          </IconButton>
        </Tooltip>
          </div>         
          <div>
              <h3 className="text-lg text-slate-700">Review</h3>
                <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nobis iure, laudantium nesciunt, neque totam sunt consequatur odio quos est quaerat. Ducimus corporis magni sed!</p>
          </div>
          <h3 className='text-slate-200 text-sm'>Request ID #1234d4df4</h3>
    </Box>
  )
}

export default RatingCard