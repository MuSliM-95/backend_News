const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    nickname: String,
    role: {
        type: String,
        default: 'user'
    },
    login: {
        type: String,
        unique: true

    },
    password: String,


})

const User = mongoose.model('UserSchema', userSchema)

module.exports = User