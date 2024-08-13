const jwt = require('jsonwebtoken')
const { secret } = require('../config.json')
const mongoose = require('mongoose')
const PersonalToken = require('../Model/personalTokenModel')


function generateJwtToken({ id }) {
    if (!id) {
        throw new Error('ID and email are required to generate a JWT token');
    }

    // const jwtTokenLimit = jwt.sign({ sub: id, id: id }, secret, { expiresIn: '1h' });
    const jwtTokenLimit = jwt.sign({ sub: id, id: id }, secret);
    return personalTokenStorage (jwtTokenLimit, id);
}


async function personalTokenStorage (token, id) {
    const personalToken = await PersonalToken.create({
        token: token,
        expires: new Date(Date.now() + 5 * 60 * 60 * 1000),
        userId: id,
    });
    // const personalToken = await PersonalToken.create({
    //     token: token,
    //     expires: new Date(Date.now() + 60 * 60 * 1000),
    //     userId: id,
    // });

    return personalToken;

}


module.exports = { generateJwtToken }