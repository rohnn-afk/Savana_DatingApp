import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    senderID:{type:mongoose.Schema.Types.ObjectId,ref:'user',require:true},
    recieverID:{type:mongoose.Schema.Types.ObjectId,ref:'user',require:true},
    type:{type:String,require:true},
    message:{type:String,require:true},
    timestamp:{type:Date,default:Date.now()},
    isRead:{type:Boolean,default:false}
})


export const NotificationModel = new mongoose.model('notification',notificationSchema)