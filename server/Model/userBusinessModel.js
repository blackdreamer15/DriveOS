const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        businessName: {
            type: String,
            required: [true, 'Please enter your first name']
        },
        email: {
            type: String,
            required: [true, 'Please enter your email']
        },
        businessPhone: {
            type: String
        },
        businessServices: {
            type: Array
        },
        password: {
            type: String,
            required: [true, 'Please enter your password']
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('UserBusiness', userSchema);

module.exports = User;