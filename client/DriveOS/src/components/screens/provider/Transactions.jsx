import { Box } from '@mui/material'
import React from 'react'
import TransTable from '../../components/Table/TransTable'
import TransCard from '../../components/Cards/TransCard'

const Transactions = () => {
  return (
    <Box className="flex-1 flex flex-col space-y-5">
          <div className='w-full flex flex-wrap space-x-10 items-center'>
              <TransCard title={'Total Transactions'} />
              <TransCard title={'Total Profits'}/>
          </div>
          <div>
              <TransTable />
          </div>
    </Box>
  )
}

export default Transactions