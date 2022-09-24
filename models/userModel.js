const mongoose = require('mongoose')
const {Schema , model} = mongoose
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userModel = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username'],
        unique: true,
        minLength:[5, 'Username must be at least 5 characters long'],
        maxLength:[20, 'Username must be at most 20 characters long']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        select:false,
        required: [true, 'Please enter your password'],
        minLength:[8, 'Password must be at least 8 characters long']
    },
    image:{
        type : String,
        default: "avatar.png"
    }
    
})

userModel.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userModel.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}





const User = model('user', userModel)

module.exports = User

