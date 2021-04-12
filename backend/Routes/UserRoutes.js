import express from 'express'
import {registerUser, 
    getAllUsers, 
    loginUser,
    getUserProfile, 
    deleteUser, 
    updateUserProfile,
    UpdateSingleuserToAdmin, 
    getSingleUserProfile} from '../Controllers/UserController.js'
import {protect, admin} from '../Middleware/AuthMiddleware.js'

    const router = express.Router()

        router.route('/')
        .get(protect, admin, getAllUsers)
        .post(registerUser)
        router.route('/login')
        .post(loginUser)
        router.route('/profile')
        .get(protect, getUserProfile)
        .put(protect, updateUserProfile)
        router.route('/:id')
        .get(protect, admin, getSingleUserProfile )
        .put(protect, admin, UpdateSingleuserToAdmin )
        .delete(deleteUser)

       

    export default router