const mongoose = require('mongoose')

const PersonalTokenSchema = mongoose.Schema(
    {
        token: {
            type: String,
            required: [true, 'Token is required']
        },
        expires: {
            type: Date,
            required: [true, 'Provide the expiry date']
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const personalTokenSchema = mongoose.model('PersonalToken', PersonalTokenSchema);

module.exports = personalTokenSchema;