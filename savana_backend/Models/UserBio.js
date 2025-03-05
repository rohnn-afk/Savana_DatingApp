import mongoose from "mongoose";


const bioSchema = new mongoose.Schema({
    userID: { type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
    name: {type:String , required:true},
    age: {type:String ,},
    gender: {type:String },
    height: {type:String },
    location: {type:String  },
    preference: {type:String ,},
    education: {type:String ,},
    bio: {type:String ,  },
    interests: {type:Object},
    prompts:{type:Object},
    lookingfor:{type:String},
    socialmedia:{type:Object },
    userimage:{type:String},
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:'profile'}],
    matches:[{type:mongoose.Schema.Types.ObjectId,ref:'profile'}],

})

 const  BioModel = new mongoose.model("profile",bioSchema)

 export default BioModel