import UserModel from "../Models/UserModel.js"

export const DailyLikesChecker = async (userID) =>{

    if(!userID){
        return {error:'userid not provided'}
    }

    const userdata = await UserModel.findById(userID)

    
    if(!userdata){
        return {error:'user dont exist'}
    }

    const datetoday = new Date()
    const lastupdated = new Date(userdata.dailyLikes.lastReset)

    if(datetoday.toDateString() !== lastupdated.toDateString()){

        userdata.dailyLikes.count = 0 
        userdata.dailyLikes.lastReset = datetoday
        userdata.save()
    }

    return userdata

}