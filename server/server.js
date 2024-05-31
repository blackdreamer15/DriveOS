//import express from 'express' //setting up express
 const express =require('express') //function for express
// const MongoClient =require('mongodb').MongoClient;
const cors = require('cors')
// const multer = require('multer')
const app = express() // linking express to app

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));



 app.get("/api", (req, res) =>{
  res.json({"users": ["userOne","userTwo","userThree","UserFour"]})
})

app.listen(5000,()=>{console.log("Server started")})
// }) //opens the api on a localhost 5000 because the default local host for the client is 3000
