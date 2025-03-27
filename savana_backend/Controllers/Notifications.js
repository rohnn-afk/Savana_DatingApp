import { NotificationModel } from "../Models/NotificationModel.js"

export const fetchNotification = async (req,res) =>{



   const userID = req.user._id


    if(!userID){
      return  res.status(404).json({success:false,message:'userid not provided'})
    }

    try {
        
        const notifications = await NotificationModel.find({recieverID:userID}).sort({timestamp : -1})

        res.status(200).json({ success: true, notifications });


    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message: "Server error", error });
    }
}





export const markReadNotification = async (req,res) =>{

    
   const userID = req.user._id


   if(!userID){
     return  res.status(404).json({success:false,message:'userid not provided'})
   }

   try {
       
       await NotificationModel.updateMany({ recieverID: userID, isRead: false }, { isRead: true })


   } catch (error) {
       console.log(error)
       return res.status(500).json({success:false, message: "Server error", error });
   }

}

