const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    image: {
        type: String,
        default: "images.png"
    },
    imageSrc: String,
    nickname: String,
    name: String,
    surname: String,
    age: Number,
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