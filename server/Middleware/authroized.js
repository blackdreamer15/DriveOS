var { expressjwt: jwt } = require('express-jwt');
const { secret } = require('../config.json');

module.exports = authorize

function authorize() {

    return [

        // authenticate JWT token and attach user to request object (req.user)
        jwt({ secret, algorithms: ['HS256'] }),

        // Decode Base64-encoded JWT token
        async (req, res, next) => {
            try {
                if (!req.headers.authorization) {
                    throw new Error('Authorization header missing');
                }
                
                next();

            } catch (error) {
                return res.status(401).json({ message: 'Unauthorized', error: error.message });
            }
        },
        
    ];
}