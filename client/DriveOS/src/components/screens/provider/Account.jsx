
import { Box, Card, CardContent, Typography, } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Account= () => {
  // const label = { inputProps: { 'aria-label': 'Available' } }
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  

  useEffect(() => {
    // Fetch user details from the server
    const fetchUserDetails = async () => {
      try {
        // Get the cookie value
        const token = localStorage.getItem('token');

        console.log(token);

        // Check if the cookie exists
        if (!token) {
          navigate('/login'); // Redirect to login page
          return;
        }

        const response = await fetch("http://localhost:5000/api/v1/user/account", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: 'include', // Include credentials (cookies)
        });
       
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [navigate]);


  if (!userDetails) {
    
    // Show a loading message while data is being fetched
    return (
      <div className="flex-1 flex justify-center items-center min-h-screen">
        <Typography>Loading...</Typography>
      </div>
      
    )
  }
  //  function ImageAvatars() {
  //   return (
  //     <Stack direction="row" spacing={2}>
  //       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  //       </Stack>
  //   );
  // }

  return (
    
    <Box 
      className="flex-1 flex justify-center items-center min-h-96 space-x-7"
      sx={{ padding: 2 }}
    >
      <div className="flex rounded">
          <img
            src="/user.jpeg"
            alt="Contact Illustration"
            width={211}
            height={224.1}
            className='rounded-full'
          />
        </div>
      <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 3 }}>
        <CardContent>
          {/* <Typography variant="h6" component="div" gutterBottom>
            Id: {userDetails.id}
          </Typography> */}
          <Typography variant="h6" color="text.secondary">
            Name: {userDetails.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Email: {userDetails.email}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Phone Number: {userDetails.phone}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Service: {'{ ' + userDetails.service.join(', ') + ' }'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
       
  );
 
}

export default Account
