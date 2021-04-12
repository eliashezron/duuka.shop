import asyncHandler from 'express-async-handler'
import User from '../Models/userModel.js'
import generateToken from '../Utils/generateToken.js'

// registering a user

    const registerUser = asyncHandler(async(req, res)=>{
        const {userName, email, password}= req.body
        const userExists = await User.findOne({userName, email})

        if(userExists){
            res.status(400)
            throw new Error('User already exists')
        }

        const user = await User.create({
            userName, email, password
        })
        if(user){
            res.status(201).json({
                _id:user._id,
                userName:user.userName,
                email:user.email,
                token:generateToken(user._id)
            })
        }else{
            res.status(400)
            throw new Error('invalid user information')
        }
    })

    const loginUser = asyncHandler(async(req, res)=>{
        const {email, password} = req.body
        const user = await User.findOne({email})

        if(user &&  (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                userName:user.userName,
                email:user.email,
                token:generateToken(user._id)
            })
        }else{
            res.status(401)
            throw new Error('invalid email or password')
        }
    })
    // admin only route
    const getAllUsers = asyncHandler(async(req, res)=>{
        const users = await User.find({})
        res.json(users)
    })
    // admin only route
    const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
 
   if (user) {
     res.json({
       _id: user._id,
       name: user.name,
       email: user.email,
       isAdmin: user.isAdmin,
     })
   } else {
     res.status(404)
     throw new Error('User not found')
   }
 })
    // admin only route
    const updateUserProfile = asyncHandler(async(req, res)=>{
        const user = await User.findById(req.user._id)
        if (user){
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            if(req.body.password){
                user.password = req.body.password
            }
            const updatedUser = await User.save()
            res.json({
                _id:updatedUser._id,
                name:updatedUser.name,
                email:updatedUser.email,
                password:updatedUser.password,
                isAdmin:updatedUser.isAdmin,
                token:generateToken(updatedUser._id)
            })
        }else{
            res.status(404)
            throw new Error( "user not Found")
        }
    })
    //  admin access only
    const deleteUser = asyncHandler(async(req, res)=>{
        const user = await User.findById(req.user._id)
        if(user){
            await User.remove()
            res.json({message: "user remove"})
        }else{
            res.status(404)
            throw new Error ("user not Found")
        }
    })
 



export { registerUser, getAllUsers, loginUser, getUserProfile, deleteUser, updateUserProfile}