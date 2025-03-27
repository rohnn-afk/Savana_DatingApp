import {create } from 'zustand'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'
import { UserAuthStore } from './UserAuth'
import { UIStore } from './UIStore'

export const MatchStore = create((set,get)=>({

    isFindingPotentialMatch : false,
    potentialMatch : null,
    messages:[],
    matches:[],
    notifications:[],
    selecteduser:null,
    isMatchesLoading:false,
    isMessageLoading:false,

    FindingPotentialMatch : async ()=>{
        set({isFindingPotentialMatch:true})
        try {
            const res = await axiosInstance.post('/match/potentialmatches',{})
            if(res.data.potentialMatches.length > 0){
                set({potentialMatch:res.data.potentialMatches})          
            }
        } catch (error) {
            console.log(error)
            toast.error('couldnt find matches at the moment')
        } finally {
            set({isFindingPotentialMatch:false})
        }
    },
    likePotentialMatch: async (data)=>{

        try {

            const res = await axiosInstance.post('/match/like',{likeduserID:data?._id})
            if(res.data.success && !res.data.match){
                toast.success('donelike')
                set((state)=>({potentialMatch: state.potentialMatch.filter(match=> match._id !== data._id)}))
                UIStore.getState().removeCheckout()
                UIStore.getState().setShowHeartstrue()
                get().getMatches()
            }

            if(res.data.match){
                toast.success('Its a Match')
                set((state)=>({potentialMatch: state.potentialMatch.filter(match=> match._id !== data._id)}))
                UIStore.getState().removeCheckout()
                UIStore.getState().setShowConfettitrue()
                get().getMatches()

            }

        } catch (error) {
            console.log(error)
            toast.error('couldnt find matches at the moment')
        }
    },
    getMatches : async()=>{

        set({isMatchesLoading:true})
        try {
            const res = await axiosInstance.post('/messages/allmatches',{})
            if(res.data.success){
                set({matches:res.data.matches})
            }
            
        } catch (error) {
            console.log(error)
            toast.error('couldnt get your matches at the moment')
        } finally{
        set({isMatchesLoading:false})
        }
    },
    unMatch: async (id)=>{

        try {
            const res = await axiosInstance.post('/match/unmatch',{matchId:id})
            if(res.data.success){
                toast.success('Match Removed')
                get().setSelecteduser(null)
                get().getMatches()
            }

            
        } catch (error) {
            console.log(error)
            toast.error('couldnt Un-Match at the moment')
        }


    },


    setSelecteduser : (user)=> set({selecteduser:user})
    ,
    fetchMessages: async (data)=>{
        set({isMessageLoading:true})
        try {
            const res = await axiosInstance.post(`/messages/${data}`,{})

                set({messages:res.data})
            
        } catch (error) {
            console.log(error)
            toast.error('couldnt get your messages at the moment')
        } finally{
        set({isMessageLoading:false})
        }
    },
    sendMessages: async (data)=>{
        
        const {selecteduser,messages}  = get()

        try {
            const res = await axiosInstance.post(`/messages/send/${selecteduser.userID}`,data)

                set({messages:[...messages,res.data]})
            
        } catch (error) {
            console.log(error)
            toast.error('couldnt send message at the moment')
        }
    },

    subscribeToMessages : ()=>{

        const selecteduser = get()

        if(!selecteduser)  return 

        const socket = UserAuthStore.getState().socket

        socket.on('newmessage',(newmessage)=>{

            if(newmessage.senderID !== selecteduser.selecteduser.userID)  return
            
            set({messages:[...get().messages,newmessage]})

        })
    },

    unsubscribeToMessages : ()=>{
        const socket = UserAuthStore.getState().socket

        socket.off('newmessage')

    }
}))