import express from 'express'
import { checkAuth, createUser, fetchLikeCount, loginUser, logout } from '../Controllers/Login.js'
import { deleteProfile, fetchImages, fetchProfile, updateProfileData, updateProfileImages, updateuserImage } from '../Controllers/Profile.js'
import { UserAuth } from '../Middleware/AuthUser.js'

const UserRouter = express.Router()

UserRouter.get('/check',UserAuth, checkAuth)

UserRouter.post('/createuser',createUser)
UserRouter.post('/login',loginUser)
UserRouter.post('/logout',logout)





UserRouter.post('/updatebio',UserAuth,updateProfileData)
UserRouter.post('/fetchbio',UserAuth,fetchProfile)
UserRouter.post('/deletebio',UserAuth,deleteProfile)
UserRouter.post('/fetchimages',UserAuth,fetchImages)
UserRouter.post('/updateimages',UserAuth,updateProfileImages)
UserRouter.post('/updateuserimage',UserAuth,updateuserImage)
UserRouter.post('/fetchlikecount',UserAuth,fetchLikeCount)



export default UserRouter