import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Drop from '../dropdowns/Dropdown'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Txtinput from '../ui/Txtinput';



function createData(id,reqId, name, amount,fee, date,status) {
  return { id,reqId, name, amount,fee, date,status };
}

const rows = [
  createData(17048,12737,'Ann Chambers', 329,44, '07/06/2023 9:30am','pending'),
  createData(17093,13822,'Louisa Henry', 427,25, '07/06/2023 9:30am','pending'),
  createData(15310,18468,'Lelia Simmons', 346,49, '07/06/2023 9:30am','pending'),
  createData(17144,16842,'Janie Harrison', 278,5, '07/06/2023 9:30am','pending'),
  createData(19591,17476,'Willie Singleton', 150,40, '07/06/2023 9:30am','pending'),
];

export default function TransTable() {
  return (
    <TableContainer className='bg-[#f5ffff] rounded-md shadow p-2'>
      <div className=' w-full flex flex-row items-center justify-between m-2'>
        <h3 className="text-lg font-semibold text-slate-700 mt-2">All Transactions</h3>
        <div className=" w-64">
            <Txtinput
              placeholder="Search "
              type="text"
              icon={<SearchOutlinedIcon className="w-5 h-5 text-slate-400" />}
            />
          </div>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className=' text-slate-400'>Transaction ID</TableCell>
            <TableCell align="left" className=' text-slate-400'>Request ID</TableCell>
            <TableCell align="left" className=' text-slate-400'>Name</TableCell>
            <TableCell align="left" className=' text-slate-400'>Amount</TableCell>
            <TableCell align="left" className=' text-slate-400'>Fee</TableCell>
            <TableCell align="left" className=' text-slate-400'>Date</TableCell>
            <TableCell align="left" className=' text-slate-400'>Status</TableCell>
            <TableCell align="left" className=' text-slate-400'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                #{row.id}
              </TableCell>
              <TableCell align="left">
                #{row.reqId}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.fee}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
                  <TableCell align="left">
                      <Drop trigger={<MoreHorizIcon className='w-5 h-5' />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}