const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const authorize = require('../Middleware/authroized');
const User = require('../Model/userModel')
const setTokenCookie = require('../function/setTokenCookies')
const { fullUserDetails } = require('../Service/basicService')
const { generateJwtToken } = require('../function/generateToken')

router.get('/account', getUserAccount);
// router.get('/account', authorize(), getUserAccount);

async function getUserAccount (req, res, next) {

    try {
        const userId = '6692a225b14f15b96f6f6870';
        // const userId = req.auth.id;

        // Convert string userId to ObjectId
        const objectId = new mongoose.Types.ObjectId(userId);

        // Fetch user details from MongoDB
        const userDetails = await User.findOne({ _id: objectId });

        // Check if the user was found
        if (!userDetails) {
            return res.status(404).json({ message: 'User not found' });
        }

        const token = await generateJwtToken(userDetails);

        setTokenCookie(res, token.token);
        
        // Send the user details as a response
        res.status(200).json(fullUserDetails(userDetails, token));

    } catch (error) {
        // Pass any errors to the error-handling middleware
        next(error);
    }
    
}


module.exports = router