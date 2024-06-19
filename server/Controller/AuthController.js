const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../Model/userModel')
const bcrypt = require('bcryptjs');
const { signUpRequest, loginRequest } = require('../Request/auth')
const setTokenCookie = require('../function/setTokenCookies')
const { basicDetails } = require('../Service/basicService')
const { generateJwtToken } = require('../function/generateToken')

router.post('/signup', signUpRequest, signupUser);
router.post('/login', loginRequest, loginUser);

async function signupUser (req, res, next) {

    try {

        const { name, phone, email, password, service } = req.body;

        //first catch if user already exist
        if(await await User.findOne({ email })){
            console.log("He was found in the db");
            throw new Error('Email already exists.');
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name: name,
            phone: phone,
            email: email,
            service: service,
            password: hashedPassword,
        });

        const token = await generateJwtToken(user);

        setTokenCookie(res, token.token);

        res.status(200).json(basicDetails(user, token));
        // res.send(req.body);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

async function loginUser (req, res, next) {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email: email })

        //first catch if user already exist
        if(!user){
            console.log("He was not found in the db");
            throw new Error('Email or password is incorrect');
        }

        //Check user password
        if(!(await bcrypt.compare(password, user.password))){
            console.log("He was not found in the db");
            throw new Error('Email or password is incorrect');
        }

        const token = await generateJwtToken(user);

        setTokenCookie(res, token.token);

        res.status(200).json(basicDetails(user, token));
        // res.send(req.body);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}





module.exports = router