const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const errorHandler = require('../Middleware/error-handler');

const app = express();

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
  }
  
  
  app.use(cors(corsOptions));

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

const USERCONTROLLER = require('../Controller/UserController');
const AUTHCONTROLLER = require('../Controller/AuthController');

app.use('/', AUTHCONTROLLER);
app.use('/user', USERCONTROLLER);

app.use(errorHandler);

// Catch-all route for undefined routes
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


module.exports = app;
