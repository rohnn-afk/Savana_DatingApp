import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    recieverID:{type:mongoose.Schema.Types.ObjectId , ref:'User',require:true},
    senderID:{type:mongoose.Schema.Types.ObjectId , ref:'User',require:true},
    message: {type:String},
    image:{type:String}
},{timestamps:true})

export const ChatModel = new mongoose.model('chat',ChatSchema)
