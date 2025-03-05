import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String , require:true },
    email:{type:String , require:true , unique:true},
    password:{type:String , require:true},
},{minimize:false,timestamps:true})

const UserModel = new mongoose.model('user',userSchema)

export default UserModel