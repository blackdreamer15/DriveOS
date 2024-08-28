import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import Txtinput from '../../../ui/Txtinput';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Navbar from '../../AppBar/Navbar';
import DataTable from '../../Table/DataTable';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://backendflow12-9a3b18291504.herokuapp.com/api/repair-requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleSubmit = async () => {
    if (!selectedRequestId) return;
    try {
      const response = await axios.put(
        `https://backendflow12-9a3b18291504.herokuapp.com/api/repair-requests/${selectedRequestId}/accept`
      );
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === selectedRequestId ? { ...request, status: "accepted" } : request
        )
      );
    } catch (error) {
      console.error('Error updating request:', error);
    }
  };

  const handleRequestSelection = (event) => {
    setSelectedRequestId(event.target.value);
  };

  return (
    <Box className="flex-1 flex flex-col space-y-5">
      <Navbar />
      <div className="flex space-x-3 items-center m-2">
        <div className="w-full flex flex-row space-x-3">
          <div className="w-72">
            <Txtinput
              placeholder="Search request id"
              type="text"
              icon={<SearchOutlinedIcon className="w-5 h-5 text-slate-400" />}
            />
          </div>
          <div className="w-60">
            <FormControl className="w-full h-10 flex flex-row items-center rounded-md bg-[#F5FFFF] shadow">
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Filter"
                className="w-full h-full"
                onChange={handleRequestSelection}
              >
                {requests.map((request) => (
                  <MenuItem key={request._id} value={request._id}>
                    {request._id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <DataTable rows={requests} />
        )}
      </div>
      <div className="m-2">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!selectedRequestId}
        >
          Accept Request
        </Button>
      </div>
    </Box>
  );
};

export default Requests;
