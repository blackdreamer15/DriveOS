const repairRequestRoutes = require('./routes/repairRequests');
const express =require('express') //function for express
const cors = require('cors')
const mongoose = require('mongoose');
const app = express() // linking express to app
require('dotenv').config();




var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
}

app.use(cors(corsOptions));
app.use('/api/repair-requests', repairRequestRoutes);

const APIROUTE = require('./routes/api');


mongoose.
connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to the db')
}).catch((error) => {
  console.log(error)
})



app.use('/api/v1', APIROUTE);


app.get("/api", (req, res) =>{
  res.json({"users": ["userOne","userTwo","userThree","UserFour"]})
})//setting route for api and creating backend api to help fetch user array and display in frontend

 
app.listen(5000,()=>{console.log("Server started")})
