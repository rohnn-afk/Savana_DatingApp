import {create } from "zustand"
import { axiosInstance } from "../lib/axios"


export const UIStore = create((set,get)=>({
    
    userpage : false,
    showJourney : false,
    fetching:false,
    selectedPotentialMatch : null,
    selectedPotentialMatchImages:null,
    likeCount: 0 ,

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

    },
    showMatchDetailsCard : false,
    setShowMatchDetailsCard : ()=>{set({showMatchDetailsCard:!get().showMatchDetailsCard})},
    MatchDetailsCardImages : null,
    getMatchDetailsCardImages : async (data)=>{

        try {
            const res = await axiosInstance.post('/match/getpotentialmatchimages',{data})
            if(res.data.success){
                set({MatchDetailsCardImages:res.data.images})
            }
        } catch (error) {
            console.log(error)
        }
    },
    showConfetti:false,
    setShowConfettitrue: ()=>{
        set({showConfetti:true})
        setTimeout(() => {set({showConfetti:false}) }, 6000);
    },
    showHearts:false,
    setShowHeartstrue: ()=>{
        set({showHearts:true})
        setTimeout(() => {set({showHearts:false}) }, 6000);
    },

    fetchLikeCount : async ()=>{


        const res = await axiosInstance.post('/user/fetchlikecount',{})

        set({likeCount: 10 - res.data.count })

    }


}))