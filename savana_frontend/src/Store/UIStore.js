import {create } from "zustand"
import { axiosInstance } from "../lib/axios"


export const UIStore = create((set,get)=>({
    
    userpage : false,
    showJourney : false,
    fetching:false,
    selectedPotentialMatch : null,
    selectedPotentialMatchImages:null,

    theme : (localStorage.getItem('chat-theme'))  || "sunset",
    
    setTheme : ((theme)=>{
        
        localStorage.setItem('chat-theme',theme)
        set({theme})
    }),
    
    setUserPage : ()=> set((state)=>({userpage : !state.userpage})),
    setshowJourney : ()=>set({showJourney:!get().showJourney}),
    checkoutSelectedPotentialMatch:(data)=>{set({selectedPotentialMatch:data}),get().getSelectedPotentialMatchImages(data.userID)},
    removeCheckout : ()=>{set({selectedPotentialMatch:null})},
    getSelectedPotentialMatchImages : async (data)=>{

        try {
            const res = await axiosInstance.post('/match/getpotentialmatchimages',{data})
            if(res.data.success){
                set({selectedPotentialMatchImages:res.data.images})
            }
        } catch (error) {
            console.log(error)
        }
    },
    iswallProfile:false,
    removeWallProfile: ()=>{set({iswallProfile:false})},
    wallProfile: null,
    wallProfileImages:null,
    setWallProfile: async(profile)=>{

        set({iswallProfile:true});
        set({wallProfile:profile});

        try {
            const data= profile.userID
            const res = await axiosInstance.post('/match/getpotentialmatchimages',{data})
            if(res.data.success){
                set({wallProfileImages:res.data.images})
            }
        } catch (error) {
            console.log(error)
        }

    }

}))