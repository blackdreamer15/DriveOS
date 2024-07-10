// "use client";
import React from "react";
import CountUp from "react-countup";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import { Box } from "@mui/material";

const DataCard = ({ tooltip, label, value, down, prefix }) => {
  return (
    <Box className="bg-[#f5ffff] min-w-56 p-3 shadow-sm rounded-md space-y-5 border border-slate-200">
      <div className="flex flex-row items-center justify-between">
        <div className="w-max p-1 flex flex-row items-center bg-sky-100 rounded-md">
          {down && (
            <ArrowCircleDownOutlinedIcon className="text-base text-red-600" />
          )}
          {!down && (
            <ArrowCircleUpOutlinedIcon className="text-base text-blue-600" />
          )}
        </div>
        <h3 className="text-base font-semibold text-slate-700">{label}</h3>
        <Tooltip title={tooltip} className="p-1">
          <IconButton>
            <InfoOutlinedIcon className="text-lg text-gray-300" />
          </IconButton>
        </Tooltip>
      </div>
      <div className="flex flex-col items-center">
        <CountUp
          prefix={prefix}
          end={value}
          separator=","
          duration={3.2}
          className="text-2xl text-slate-700 font-bold"
        />
      </div>
    </Box>
  );
};

export default DataCard;
