import { Box } from "@mui/material";
import React from "react";

const DataList = ({ title }) => {
  return (
    <Box className="bg-[#f5ffff] w-52 py-5 px-2 shadow-sm rounded-md space-y-4">
      <h2 className="text-slate-700 font-bold text-lg">{title}</h2>
      <ul className="px-5 w-full">
        <li className="text-sm font-medium text-slate-500 list-disc">
          James Azicoco
        </li>
        <li className="text-sm font-medium text-slate-500 list-disc">
          Sheila Akpene
        </li>
        <li className="text-sm font-medium text-slate-500 list-disc">
          Joojo Sean
        </li>
        <li className="text-sm font-medium text-slate-500 list-disc">
          Joojo Sean
        </li>
      </ul>
    </Box>
  );
};

export default DataList;
