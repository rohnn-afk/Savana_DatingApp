import UserModel from "../Models/UserModel.js"
import validator from 'validator'
import bcrypt from 'bcryptjs'
import BioModel from "../Models/UserBio.js"
import ImagesModel from "../Models/UserImages.js"
import { createToken } from "../Middleware/TokenMaker.js"



export const createUser = async (req,res)=>{
    const {name,email,password} = req.body

    try {
        
        
        const exists = await UserModel.findOne({email})
        
        if(exists){
            return res.status(400).json({success:false,message:'email already exists'})
        }
        
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false,message:'email is invalid'})
        }
        
        if(password.length < 9){
            return res.status(400).json({success:false,message:'password too weak'})
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashedpass = await bcrypt.hash(password,salt)
        
        const newuser = new UserModel({
            name,
            email,
            password:hashedpass,
        })
        
        const user = await newuser.save()

        const newBio = new BioModel({
            userID:user._id,
            name:name,
        })

        const profileBio = await newBio.save()
        const bioID = profileBio._id
        createToken(user._id,res)

        const newUserImages = new ImagesModel({
            userID:user._id
        })

        const imagesID = await newUserImages.save()


        return res.status(202).json({success:true,message:'user created',user})
        
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({success:false,message:'error while creating user',error})
    }
        

}

export const loginUser = async (req,res)=>{
    const {email,password} = req.body
    try {
        
        
        if(!email||!password){
            return res.status(400).json({success:false,message:'enter all details'})
        }
        
        const olduser = await UserModel.findOne({email})
        
        if(!olduser){
            return res.status(400).json({success:false,message:'user dont exist'})
        }
        
        const comparePassword = await bcrypt.compare(password,olduser.password)
        
        if(!comparePassword){
            return res.status(400).json({success:false,message:'Incorrect password'})
        }
        
        createToken(olduser._id,res)
        
        return res.status(202).json({success:true,message:'User Logged-in',user:olduser})
        

    } catch (error) {

        return res.status(400).json({success:false,message:'Error while loging-in',error})
    }
    }


export const checkAuth = async (req,res) =>{
    try {
        return res.status(201).json({success:true,user:req.user})
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error at checkauth ", error });
    }

}

export const logout = async (req,res) =>{

    try {
        res.clearCookie('jwt',{
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
        })
        return res.status(202).json({success:true, message:"user loggedout successfully"})
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error while logging-out user", error });
    }
    
} 