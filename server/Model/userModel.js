const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your business name']
        },
        email: {
            type: String,
            required: [true, 'Please enter your email']
        },
        phone: {
            type: Number,
        },
        service: {
            type: Array,
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

const User = mongoose.model('User', userSchema);

module.exports = User;