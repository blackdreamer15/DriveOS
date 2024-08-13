'use client';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Drop({trigger}) {
  const navigate = useNavigate();


    return (
      <Box className='bg-[#f5ffff] w-max p-2 shadow'>
            
    <Dropdown>
      <MenuButton className='text-slate-400'>{trigger}</MenuButton>
      <Menu className='bg-[#f5ffff] shadow-md px-2 border border-slate-200 py-2'>
      <MenuItem style={{ cursor: 'pointer' }} onClick={() => navigate('/account')}>My account</MenuItem>
      {/* <MenuItem style={{ cursor: 'pointer' }} onClick={() => navigate('/notifications')}>Notification preferences</MenuItem> */}
      </Menu>
    </Dropdown>
      </Box>
  );
}
