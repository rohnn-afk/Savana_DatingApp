import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
    userID: { type:String,require:true},
    image1:{type:Object},
    image2:{type:Object},
    image3:{type:Object},
    image4:{type:Object},
    image5:{type:Object},
    image6:{type:Object},

})

 const  ImagesModel = new mongoose.model("userimage",imageSchema)

 export default ImagesModel