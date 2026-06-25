const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const userModel = require("../models/user.model")
const blacklistModel = require("../models/blacklist.model")
const redis = require("../config/cache")

async function register(req,res){
    const {username, email, password} = req.body

    const isUserRegistered = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isUserRegistered){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password : hash
    })

    const token = jwt.sign({
        id : user._id,
        username : user.username
    },process.env.JWT_TOKEN,{
        expiresIn: "3d"
    })

    res.cookie("token",token)

    return res.status(200).json({
        message : "User registered successfully",
        user : {
            id : user._id,
            username : user.username,
            email : user.email
        }
    })
}

async function login(req,res){
    const {email, password, username} = req.body

    const user = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    }).select("+password")

    if(!user){
        return res.status(400).json({
            message : "Invalid Credentials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message : "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    },process.env.JWT_TOKEN,{
        expiresIn : "3d"
    })

    res.cookie("token",token)

    return res.status(200).json({
        message : "User logged in successfully",
        user : {
            username : user.username,
            email : user.email,
            id : user._id
        }

    })


}

async function getme(req,res){
    const user = await userModel.findById(req.user.id)


    return res.status(200).json({
        message : "User found",
        user
    })
}

async function logout(req,res){
    const token = req.cookies.token

    res.clearCookie("token")

    await redis.set(token, Date.now().toString())

    return res.status(200).json({
        message : "Logout Successfully"
    })
}

module.exports = {
    register,login,getme,logout
}