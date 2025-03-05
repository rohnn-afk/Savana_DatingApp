import { uploadCloudImage } from "../Config/Cloudinary.js"
import BioModel from "../Models/UserBio.js"
import ImagesModel from "../Models/UserImages.js"
import UserModel from "../Models/UserModel.js"




export const updateProfileImages = async (req,res) =>{

    const userID = req.user._id.toString()

try{

    if(!userID){
        return res.status(400).json({success:false,message:"User ID not provided for image update"})
    }

    const imageData = {}

    for(let i=1;i<=6;i++ ){

        const key = `newimage${i}`

        if(req.files && req.files[key] && req.files[key].image){

            imageData[`image${i}`] = {
                image : await uploadCloudImage(req.files[key].image),
                title : req.body[key].title 
            }
        }
    }

    if(!imageData){
        return res.status(400).json({success:false,message:"no information provided"})
    }


    const updatedUser = await ImagesModel.findOneAndUpdate({userID}, { $set: imageData }, { new: true });


    return res.status(202).json({success:true,message:'images updated successfully',updatedUser})


  } catch (error) {
    console.log(error)
        return res.status(400).json({success:false,message:"Error while image updation",error})
  }


}



export const updateProfileData = async (req,res) =>{

    const userID = req.user._id 

    const {name,age,gender,height,location,preference,education,bio,interests,prompts,personality,socialmedia,lookingFor} = req.body

        try {

            if(!userID){
                return res.status(400).json({success:false,message:"User ID not provided"})
            }
    
            if(!name && !age && !gender && !height && !location && !preference && !education && !bio && !interests && !prompts && !personality && !socialmedia){
                return res.status(400).json({success:false,message:"Data was not provided"})
            }
            
            const olduserProfile = await BioModel.findOne({userID})
            
            
            if(!olduserProfile){
                return res.status(400).json({success:false,message:"User dont exists"})
            }
    
    
            const formData = {
                userID: userID || olduserProfile.userID,
                name: name || olduserProfile.name,
                age: age || olduserProfile.age,
                gender: gender || olduserProfile.gender,
                height: height || olduserProfile.height,
                location: location || olduserProfile.location,
                preference:preference || olduserProfile.preference ,
                education:education || olduserProfile.education ,
                bio: bio || olduserProfile.bio,
                interests: interests || olduserProfile.interests ,
                prompts:prompts || olduserProfile.prompts,
                personality: personality || olduserProfile.personality,
                socialmedia: socialmedia || olduserProfile.socialmedia,
                lookingfor: lookingFor || olduserProfile.lookingfor,
                image:"",
            }

            
            const updatedProfile = await BioModel.findOneAndUpdate({userID},formData,{new:true})
            
            return res.status(202).json({success:true,message:"Profile updated",updatedProfile})

    }catch(error) {
        return res.status(400).json({success:false,message:"Error while updating",error})
    }

    
}


    // {--------------fetching bio data}

export const fetchProfile = async (req,res) =>{

    const userID = req.user._id.toString()

    try {

        if(!userID){
            return res.status(400).json({success:false,message:"User id not provided"})
          }

          const profileData = await BioModel.findOne({userID})

    if(!profileData){
        return res.status(400).json({success:false,message:"User dont exists"})
    }
    
    return res.status(202).json({success:true,profileData})

   } catch (error) {
    return res.status(400).json({success:false,message:"Error while fetching profile",error})
     
   }
    
}

// {for deleting profileee-----------------------------------------------}


export const deleteProfile = async (req,res) =>{

    const userID = req.user._id
    const userIDString = req.user._id.toString()
    
    try {
        if(!userID){
        return res.status(400).json({success:false,message:"User dont exists"})
        }

        const deletedProfile = await BioModel.findOneAndDelete( {userID:userIDString});
        const deletedUser = await UserModel.findByIdAndDelete( userID );
        const deleteimages = await ImagesModel.findOneAndDelete({userID:userIDString})

        if(!deletedProfile){
            return res.status(400).json({success:false,message:"Profile dont exists"})
        }

    return res.status(202).json({success:true,message:"Profile deleted succesfully"})


    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false,message:"Error while deleteing profile",error})
        
    }
}



export const fetchImages = async (req,res) => {

    const userID = req.user._id.toString()

    try {
        if(!userID){
            return res.status(202).json({success:false,message:"user dont exist"})
        }

        const userImages = await ImagesModel.findOne({userID})
        if(!userImages){
            return res.status(400).json({success:false,message:"User dont exists"})
        }
        
        return res.status(202).json({success:true,userImages})
    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false,message:"Error while fetching images",error})
    }
}

export const updateuserImage = async (req,res) =>{

    const userID = req.user._id.toString()

    try {
        if(!userID){
            return res.status(202).json({success:false,message:"user dont exist"})
        }


        const userimage = await uploadCloudImage(req.files.image)


        const response = await BioModel.findOneAndUpdate({userID}, { $set: { userimage: userimage } },{ new: true })
     
        if(!response){
            return res.status(400).json({success:false,message:"User dont exists"})
        }
        
        return res.status(202).json({success:true,response})


    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false,message:"Error while updating user images",error})
    }


}

