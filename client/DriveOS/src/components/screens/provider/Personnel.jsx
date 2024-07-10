import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import BasicTable from '../../components/Table/BTable';
import BasicTable from '../../../components/Table/BTable';
import Txtinput from '../../../ui/Txtinput';
import Drop from '../../../components/dropdowns/Dropdown';
import { Box } from '@mui/material';

const Personnel = () => {
  return (
    <Box className="flex-1 flex flex-col space-y-5">
      <div className="flex space-x-3 items-center">
        <div className=" w-full">
        <div className="w-72">
          <Txtinput
            placeholder="Search personnel"
            type="text"
            icon={<SearchOutlinedIcon className="w-5 h-5 text-slate-400" />}
          />
        </div>
        </div>
        <div className="flex items-center justify-center w-36">
          <Drop trigger={'Add Personnel'} />
        </div>
      </div>
      <div>
        <BasicTable />
      </div>
    </Box>
  )
}

export default Personnel