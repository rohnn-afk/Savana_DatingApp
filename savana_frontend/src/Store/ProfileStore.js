import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'


export const ProfileStore = create((set,get)=>({
    userImages:null,
    updatingimages:false,
    isupdatingProfile:false,
    userData:null,
    
    fetchData : async() => {
       
        try {          
            const response = await axiosInstance.post('/user/fetchbio',{},{ withCredentials: true })
            const responseImages = await axiosInstance.post('/user/fetchimages',{},{ withCredentials: true })

            if(response){
                set({userData:response.data.profileData})
            }else{
                alert('User data unavailable')
            }
            
            if(responseImages){
                set({userImages:responseImages.data.userImages})
            }else{
                alert('user image unavailable')
            }

        } catch (error) {
            console.log("userdata error",error)
        }
    },

    updateProfile : async(data) => {
        set({isupdatingProfile:true})
        try {
            const response = await axiosInstance.post("/user/updatebio", data);
            if (response.data.success) {
              toast.success("Profile updated successfully");
              const fetchdata =get().fetchData
              fetchdata()
            } else {
              toast.error("Profile update denied");
            }
          } catch (error) {
            console.log(error)
            toast.error("Error updating profile");
          } finally {
        set({isupdatingProfile:false})
          }
    },
    deleteProfile : async()=>{
        try {
            const response = await axiosInstance.post('/user/deletebio',{})
            if(response.data.success){
                toast.success('Profile deleted successfully')
                return true
            }
            else{
                toast.error('please try again later')
                return false
            }
        } catch (error) {
          toast.error("error while deleteing , please try again later")
            console.log(error)
        }
    }
    ,
    updateImages : async (formdata)=>{
        set({updatingimages:true})
        try {
            const response = await axiosInstance.post('/user/updateimages',formdata, {headers: {'Content-Type': 'multipart/form-data'}})
            if(response.data.success){
                toast.success('images updated succesfully')
            }

        } catch (error) {
            console.log(error)
            toast.error('error while updating , please try again later')
        } finally {set({updatingimages:false})}
    }
    
}))