import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const mongoDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then(async ()=>{
        console.log('Database is connected')    
    })
    .catch((err)=>{
        console.log('Database couldnt connect',err)
    })
}

export default mongoDB