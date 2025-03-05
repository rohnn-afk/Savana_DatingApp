import {v2 as cloudinary} from 'cloudinary'
import dotenv from "dotenv"
import fs from 'fs/promises';


dotenv.config()

const connectCloudinary = async () =>{

    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET_KEY
    })
}

export const uploadCloudImage = async (file) => {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "profile_images",
      });
  
      
      await fs.unlink(file.path);
  
      return result.secure_url; 
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      throw new Error("Failed to upload image");
    }
  };

export default connectCloudinary