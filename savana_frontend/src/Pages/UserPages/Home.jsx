import { useEffect } from 'react'
import { UserAuthStore } from '../../Store/UserAuth'
import { ProfileStore } from '../../Store/ProfileStore'
import { AnimatedTestimonials } from '../../Componentes/UI/AnimatedTestimonials'
import BarPoll from '../../Componentes/UI/BarPoll'
import { MatchStore } from '../../Store/MatchStore'
import { UIStore } from '../../Store/UIStore'
import {motion} from "framer-motion"
import { ArrowUpDown, GraduationCap, Heart, Quote, Users2 } from 'lucide-react'

const UserHome = () => {

      const {checkAuth} = UserAuthStore()
      const {fetchData} = ProfileStore()
      const {FindingPotentialMatch,potentialMatch, likePotentialMatch,getMatches} = MatchStore()
      const {selectedPotentialMatch,removeCheckout,selectedPotentialMatchImages } = UIStore()
    

  useEffect(() => {

    fetchData()
    FindingPotentialMatch()
    getMatches()

  }, [checkAuth,fetchData,FindingPotentialMatch,getMatches,likePotentialMatch])



  return (
    <div className='min-h-screen px-2 bg-base-100'>
      {
       !potentialMatch ? (<div className='w-full h-[60vh] bg=base-300 flex items-center justify-center'><p>Please , go to profile , enter your details for savana to show u your prefrence profiles</p></div>)
       : 
       (
         potentialMatch.length == 0 ?  (<div className='w-full h-[60vh] bg=base-300 flex items-center justify-center'><p>you have liked every potential Match as of yet</p></div>)  : (<AnimatedTestimonials testimonials={potentialMatch} />)
       )

      }
      
  
    { selectedPotentialMatch   &&

      <div className="mx-10  p-28 bg-base-200 rounded-lg min-h-screen shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                        <div className=" flex-col flex gap-28 items-center lg:flex-row">
                          <div className='flex items-center flex-col justify-center mr-12'>

                          <div className='overflow-hidden mx-16  rounded-2xl'>
                         
                          <div className="carousel rounded-2xl w-[26vw] h-[70vh] ">
                            { 
                            selectedPotentialMatchImages && Object.values(selectedPotentialMatchImages).filter(value=> typeof value === 'object' && value !== null && value.image)?.map((image,index)=>(<div key={index} className="carousel-item w-full">
                                          
                                           <img src={image?.image}  className="w-full object-cover "  alt="" />
                              
                              </div>))
                              }
                          </div>

                          </div>
                          <div className='p-2'>
                            <p className='hover:text-zinc-500/50 cursor-none animate-pulse'>please swipe the picture from right to left</p>
                          </div>
                          </div>
                         <div className='w-2/3 px-10'>
                         <div className='w-full flex flex-row justify-between'>

                           <h1 className="text-7xl hkfont pb-10 leading-none font-bold">
                           {selectedPotentialMatch?.name}
                           </h1>
                           <button onClick={()=>{removeCheckout()}} className='text-2xl hover:text-red-500 btn'>x</button>

                         </div>
                          
                               <div className="p-1 px-2 newfont flex flex-row gap-4">
                               <p className="text-md   ">
                                 {selectedPotentialMatch?.age}
                               </p>
                               <p>|</p>
                               <p className="text-md  ">
                                 {selectedPotentialMatch?.gender}
                               </p>
                               <p className='text-md'>|</p>
                               <p className="text-md ">
                                 {selectedPotentialMatch?.location}
                               </p>
                               <p className='text-md'>|</p>
                               <p className="text-md ">
                                 straight
                               </p>
                               </div>
           
                               <div className="flex flex-row hkfont items-center px-2 gap-4 pt-8">

                                   <ArrowUpDown size={18}  />
                                     <p className="text-sm  ">{selectedPotentialMatch?.height}
                                     </p>
                                 </div>
            
                               <div className="flex flex-row items-center px-2 gap-4 py-3">

                                   <Users2 size={18}/> 
                                    <p className="text-sm  ">{selectedPotentialMatch?.preference}
                                    </p>
                                   </div>

                                <div className="flex flex-row items-center px-2 gap-4 pb-4">

                                 <GraduationCap size={18}/> 
                                 <p className="text-sm  ">{selectedPotentialMatch?.education}
                                 </p>
                                 </div>
                                 <div className="flex flex-row items-center gap-4 py-4 px-2 mb-6 ">

             <Heart size={18}/> 

             {selectedPotentialMatch?.interests &&  Object.keys(selectedPotentialMatch?.interests).map((keys,index)=>(
              <div key={index} className='rounded newfont p-2 flex items-center justify-center'>   
                <p className="text-sm pr-2 ">{keys}
             </p> 
             </div>
             ))}
           
             </div>

            
             <motion.div className="flex flex-row gap-3 items-start mt-1">
            <Quote className="" size={20}/>
             <p className="text-lg text-wrap break-words newfont text-rose-900 min-h-[50px] max-h-[64px] max-w-[370px] truncate">
              {selectedPotentialMatch?.bio}</p>

            </motion.div>

                         <p className="py-6 newfont my-">
                          Prompt :
                         </p>
                         <div className='newfont mt-16'>

                         <button onClick={()=>likePotentialMatch(selectedPotentialMatch)} className="btn mr-20 btn-primary hover:text-rose-500">Like</button>
                         <button className="btn btn-primary">More</button>
                         </div>
                         </div>
                         </div>
      </div>
      }

     
     
      <div className='w-full mt-10'>
        <BarPoll/>
      </div>
    </div>
  )
}

export default UserHome
