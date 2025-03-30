import { uploadCloudImage } from "../Config/Cloudinary.js"
import { NotificationModel } from "../Models/NotificationModel.js"
import BioModel from "../Models/UserBio.js"
import { ChatModel } from "../Models/UserChats.js"
import ImagesModel from "../Models/UserImages.js"
import { getUserSocketID ,io } from "../server.js"
import { DailyLikesChecker } from "./DailyLikesChecker.js"

export const likeUser = async (req,res)=>{

    const userID = req.user._id.toString()
    const {likeduserID} = req.body


    const userdata = await DailyLikesChecker(userID)

    if(userdata.error){
        return res.status(404).json({success:false,error:user.error})
    }

    const MAX_LIKES_PER_DAY = 10

    if(userdata.dailyLikes.count >= MAX_LIKES_PER_DAY){

        return res.status(404).json({success:false,message:'You have reached your daily like limit.'})
    }

    try {


    if(!userID || !likeduserID){
        return res.status(404).json({success:false,message:"users not provided"})
    }

    const user = await BioModel.findOne({userID})
    const likeduser = await BioModel.findOne({_id:likeduserID})


    if(!user || !likeduser){
        return res.status(404).json({success:false,message:"users not found"})
    }

    const recieverSocketID = await getUserSocketID(likeduser.userID)


    if(!user.likes.includes(likeduserID)){
        user.likes.push(likeduserID)
        await user.save()
    }

    if(likeduser.likes.includes(user._id)){
        user.matches.push(likeduserID)
        likeduser.matches.push(user._id)
        await user.save()
        await likeduser.save()
        
       
        
        if(recieverSocketID){

            io.to(recieverSocketID).emit('matchnotification',{message:'You got a Match',userID})
        }

            
            const response = new NotificationModel({
                senderID:userID,
                recieverID:likeduser.userID,
                type:'MATCH',
                message:'You got a Match!',
                senderdata:user,
                timestamp: new Date()
            })
            
            await response.save()

            userdata.dailyLikes.count += 1
            await userdata.save()

       
        return res.status(202).json({success:true,match:true,message:"users are a match"})
    }

    //notification for like

    if(recieverSocketID){
        io.to(recieverSocketID).emit('likenotification',{message:'Someone liked you',userID})
    }

        const response = new NotificationModel({
                senderID:userID,
                recieverID:likeduser.userID,
                type:'LIKE',
                message:'You got a Like!',
                senderdata:user,
                timestamp: new Date()
        })

        await response.save()

        userdata.dailyLikes.count += 1
        await userdata.save()


    return res.status(202).json({success:true,match:false,message:"users have been added to liked"})

    } catch (error) {
         console.log(error)
         return  res.status(500).json({ message: "Server error", error });
    }

}


export const fetchPotentialMatches = async (req,res)=>{

    const userID = req.user._id.toString()

    try{

    if(!userID){
        return res.status(404).json({success:false,message:"users not provided"})
    }

    const user = await BioModel.findOne({userID})

    if(!user){
        return res.status(404).json({success:false,message:"users donot exist "})
    }

    const likes = user.likes || [];
    const matches = user.matches || [];

    const potentialMatches = await BioModel.find({_id:{$ne:user._id,$nin:likes.concat(matches)},location:user.location,gender:user.lookingfor})

    if(!potentialMatches)  {
        return res.status(404).json({success:false,message:"no match found"})
    }


    return res.status(202).json({success:true,message:"potential matches",potentialMatches})

    } catch (error) {
          console.log(error)
          return res.status(500).json({ message: "Server error", error });
    }
}


export  const fetchMatches = async(req,res)=>{

    const userID = req.user._id.toString()

    try {
        if(!userID){
            return res.status(404).json({success:false,message:"users not provided"})
        }
    
        const user = await BioModel.findOne({ userID })
            .populate("matches",' name userID age gender height location preference education bio interests socialmedia userimage')
     
        if(!user){
            return res.status(404).json({success:false,message:"user dont exist"})
        }

    return res.status(202).json({success:true,message:"Matches",matches:user.matches})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error", error });
    }

}


export const fetchMatchInfo = async(req,res)=>{

    const userID = req.user._id.toString()

    const matchID = req.body

    try {

    if(!userID || ! matchID){
        return res.status(404).json({success:false,message:"users not provided"})
    }

    const user = await BioModel.find({userID})

    if(!user){
        return res.status(404).json({success:false,message:"users do not exist "})
    }

    if (!user.matches.includes(matchID)) {
        return res.status(403).json({ message: "This user is not in your matches" });
    }

    const matchProfile =  await BioModel.findOne({userID:matchID})

    if(!matchProfile){
        return res.status(404).json({success:false,message:"Match profile do not exist "})
    }

    return res.status(202).json({success:true,message:"Matches",matcheInfo:matchProfile})
    

     } catch (error) {
         console.log(error)
         return res.status(500).json({ message: "Server error", error });
     }

}



export const unmatch = async (req, res) => {
    
    try {
       
        const userID =  req.user._id.toString()
        const  {matchId}  = req.body


        if (!userID || !matchId) {
            return res.status(400).json({ message: "User ID and Match ID are required" });
        }

        const user = await BioModel.findOne({ userID });
        const matchedUser = await BioModel.findOne({ _id: matchId });


        if (!user || !matchedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        user.matches = user.matches.filter(id => id.toString() !== matchId);
        matchedUser.matches = matchedUser.matches.filter(id => id.toString() !== user._id.toString());

        await user.save();
        await matchedUser.save();

    
        res.json({ success: true, message: "Unmatched successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error", error });
    }
}


export const getpotentialmatchimages = async (req,res) =>{

    const userID = req.body.data
    
    try {

    if(!userID){
        return res.status(404).json({ message: "User ID is required" });
    }

    const images = await ImagesModel.findOne({userID})

    if(!images){
        return res.status(404).json({ message: "couldnt find potential user" });
    }

    return   res.json({ success: true, images });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error", error });
    }
}


export const getMessages = async(req,res) =>{

    const {id : userToChatID } = req.params
    const userID = req.user._id.toString()    

try {
    
    if(!userToChatID || !userID){
        return res.status(404).json({ message: "Users info not provided" });
    }
    
    const messages = await ChatModel.find({
        $or:[{recieverID:userToChatID,senderID:userID}
            ,{recieverID:userID,senderID:userToChatID}
        ]})

        return res.json(messages)  
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error", error });
    }
}


export const sendMessages = async (req,res) =>{

    const {id : userToChatID } = req.params
    const userID = req.user._id.toString()

    const text = req.body.text
    const image = req.files?.image

    try {
        
        if(!userToChatID || !userID){
            return res.status(404).json({ message: "Users info not provided" });
        }
        
        let imageurl
        
        if(image){
            imageurl = await uploadCloudImage(image)
        } 
        
        const newmessage = new ChatModel({
            recieverID:userToChatID,
            senderID:userID,
            message: text,
            image:imageurl
        })
        
        await newmessage.save()

        const socketID = await getUserSocketID(userToChatID)

        if(socketID){
           io.to(socketID).emit('newmessage',newmessage)
        }

        return res.status(201).json(newmessage)
        
        
    } catch (error) {
        console.log(error)
         return res.status(500).json({ message: "Server error", error });

    }


}