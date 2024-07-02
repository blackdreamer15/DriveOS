import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Drop from '../dropdowns/Dropdown'

function createData(id, name, role, availability, rating) {
  return { id, name, role, availability, rating };
}

const rows = [
  createData(17048,'Ann Chambers', 'Mechanic', 'On-site',66),
  createData(17093,'Louisa Henry', 'Mechanic', 'On-site',51),
  createData(15310,'Lelia Simmons', 'Mechanic', 'On-site',95),
  createData(17144,'Janie Harrison', 'Mechanic', 'On-site',92),
  createData(19591,'Willie Singleton', 'Mechanic', 'On-site',98),
];

export default function BasicTable() {
  return (
      <TableContainer className='bg-[#f5ffff] rounded-md shadow p-2'>
        <h3 className="text-lg font-semibold text-slate-700 mt-2">Personnel</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className=' text-slate-400'>Employee ID</TableCell>
            <TableCell align="left" className=' text-slate-400'>Name</TableCell>
            <TableCell align="left" className=' text-slate-400'>Role</TableCell>
            <TableCell align="left" className=' text-slate-400'>Availability</TableCell>
            <TableCell align="left" className=' text-slate-400'>Rating</TableCell>
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
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.availability}</TableCell>
              <TableCell align="left">{row.rating}%</TableCell>
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