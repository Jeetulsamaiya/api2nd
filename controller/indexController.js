const User = require('../models/userModel')
const {sendToken} = require('../utils/auth')

exports.homepage = (req, res, next) =>{
        console.log(req);
        res.status(200).json({message: 'Welcome to the Homepage'});
   
}

exports.signup = async (req, res, next) =>{
    try {
        const {username , password , email} = req.body
        const newuser = new User({username, password, email})
       const createdUser =  await newuser.save()
         sendToken(res,200,createdUser)
        // res.status(201).json(createdUser)
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.signin = async (req, res, next) =>{
    try {
        const {username , password} = req.body
        const loggedInUser = await User.findOne({username})
                .select("+password")
                .exec();
        if (!loggedInUser) return res.status(404).json({error : "user not found"})
        const isPasswordCorrect = await loggedInUser.comparePassword(password)
        if (!isPasswordCorrect) return res.status(401).json({error : "incorrect credentials"})
        sendToken(res,200,loggedInUser)
        // res.status(200).json({message : "logged in successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}