//import express from 'express' //setting up express
 const express =require('express') //function for express
// const MongoClient =require('mongodb').MongoClient;
const cors = require('cors')
const mongoose = require('mongoose');
// const multer = require('multer')
const app = express() // linking express to app
require('dotenv').config();


var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
}

// app.use(cors());
app.use(cors(corsOptions));

const APIROUTE = require('./routes/api');

// var CONNECTION_STRING ="mongodb+srv://eltonsablah55:Coronavirus.19@cluster0.bhexihn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// connect('mongodb+srv://danitsolutions3:dEno%56T@cluster0.bhexihn.mongodb.net/DriveSOS?retryWrites=true&w=majority&appName=Cluster0')


mongoose.
connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to the db')
}).catch((error) => {
  console.log(error)
})


// var DATABASENAME="Serviceproviders";
// var database;

//getting the routes
app.use('/api/v1', APIROUTE);


app.get("/api", (req, res) =>{
  res.json({"users": ["userOne","userTwo","userThree","UserFour"]})
})//setting route for api and creating backend api to help fetch user array and display in frontend

// app.listen(5000, () => {MongoClient.connect(CONNECTION_STRING,(error,client)=>{
//     database=client.db(DATABASENAME);console.log("Connection successful");
// }); 
app.listen(5000,()=>{console.log("Server started")})
// }) //opens the api on a localhost 5000 because the default local host for the client is 3000

// app.get("/api/Serviceproviders/GetNotes",(req,res)=> {
//     database.collection("services").find({}).toArray((error,results)=>{respond.send(results);

//     });
//     })

//     app.post("/api/Serviceproviders/AddNotes",multer().none(),(req,res) =>{
//         database.collection("services").count({},function(error,numofDocs){
//             database.collection("services").insertOne({
//                 id:(numofDocs+1).string(),
//                 description:req.body.newNotes
//             });
//             res.json("added successfully")
//         })
//     })

//     app.delete("/api/Serviceproviders/DeleteNotes",(req,res)=>{
//         database.collection("services").deleteOne({
//             id:req.query.id
//         });
//         res.json("Delete successfully")
//     })