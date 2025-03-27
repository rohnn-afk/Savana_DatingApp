import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { UserAuthStore } from "./UserAuth";


export const NotificationStore = create((set,get)=>({

    notifications: [],
    unReadCount : 0,
    isNotificationLoading:false,

    addNotifications: (notification)=>{
        set((state)=>({
            notifications : [notification,...state.notifications],
            unReadCount : state.unReadCount + 1
        }))
    },

    fetchNotification : async ()=>{


        set({isNotificationLoading:true}) 
        try {
            const response = await axiosInstance.post('/match/notification',{})
            set({notifications:response.data.notifications})

            // const unreadCount = get().notifications.filter(n => !n.isRead).length;
            // set({unReadCount:unreadCount})

        } catch (error) {
            console.log(error)
            toast.error('couldnt get your notifications at the moment')
        }
        finally{
        set({isNotificationLoading:false})
        }

    },

    markReadNotification: async ()=>{
      
        try {
            
            await axiosInstance.post('/match/readnotification',{})

            return
        } catch (error) {
            console.log(error)
            toast.error('couldnt mark notifications read at the moment')
        }

        set({unReadCount:0})

        
    },

    subscribetoNotification : ()=>{

        const socket = UserAuthStore.getState().socket


        socket.on('matchnotification',(notification)=>{
            toast.success(notification.message)
            get().addNotifications(notification)
        })

        socket.on('likenotification',(notification)=>{
            toast.success(notification.message)
            get().addNotifications(notification)

        })

    },



}))