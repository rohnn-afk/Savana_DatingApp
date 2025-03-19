import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"
import {io} from 'socket.io-client'

const BASE_URL= 'https://savana-datingapp-backend.onrender.com/'
// 'http://localhost:5000'

export const UserAuthStore = create((set,get)=>({
   
authuser : null,
isSigningIn:false,
isLoggingIn:false,
isUpdatingUser:false,
isCheckingAuth:true,
socket:null,
onlineUsers:null,

checkAuth : async ()=>{

    try {
        const res = await axiosInstance('/user/check')
        if(res.data.success){
            set({authuser:res.data.user})
            toast.success('User Logged-in')
            get().connectSocket()
        }
    } catch (error) {
       toast.error(error.response.data.message)
       set({authuser:null})
    } finally {
        set({isCheckingAuth:false})
    }

},

signup : async(data)=>{
    set({isSigningIn:true})
    try {
        const res = await axiosInstance.post('/user/createuser',data)
        if(res.data.success){
            set({authuser:res.data.user})
            toast.success('user created successfully')
            get().connectSocket()
        }
    } catch (error) {
        toast.error(error.response.data.message)
    } finally {
        set({isSigningIn:false})
    }

},

login : async(data)=>{

    set({isLoggingIn:true})
    try {
        const res = await axiosInstance.post('/user/login',data)
        if(res.data.success){
            set({authuser:res.data.user})
            toast.success('Login successfull')
            get().connectSocket()
        }
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    } finally {
        set({isLoggingIn:false})
    }
},

logout : async () =>{

    try {
        const res = await axiosInstance.post('/user/logout')
        if(res.data.success){
            toast.success('User Logged-Out')
            set({authUser:null})
            window.location.reload()
            get().disconnectSocket()
        }
    } catch (error) {
        toast.error(error.response.data.message)
    }

},

updateUserImage : async (data)=>{

    set({isUpdatingUser:true})
    try {
        const res = await axiosInstance.post('/user/updateuserimage',data, {headers: {'Content-Type': 'multipart/form-data'}})
        if(res.data.success){
            toast.success('image updated')
        }
        
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    } finally {
    set({isUpdatingUser:false})
    }
},
connectSocket : ()=>{
    const {authuser} = get()

    if(!authuser || get().socket?.connected)  return

    const socket = io(BASE_URL,{
        query:{userID : authuser._id }
    })

    socket.connect()
    set({socket:socket})

    socket.on('onlineUsers',(userIDs)=>{
        set({onlineUsers:userIDs})
    })
},
disconnectSocket : ()=>{
    if(get().socket?.connected) get().socket.disconnect()
}


}))