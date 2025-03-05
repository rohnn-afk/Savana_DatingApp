import { ArrowUpDown, GraduationCap, Heart, Quote, Users2 } from "lucide-react"
import { ProfileStore } from "../../Store/ProfileStore"
import { useState } from "react"

const POV = () => {


  const{userImages,userData}= ProfileStore()

  const[showMore,setShowMore] = useState(false)

  return (
    <div className="w-full min-h-screen py-12">
     <div className="mx-10 p-28 bg-base-200 rounded-lg min-h-screen shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                        <div className=" flex-col flex gap-28 items-center lg:flex-row">
                          <div className='flex items-center flex-col justify-center mr-12'>

                          <div className='overflow-hidden mx-16  rounded-2xl'>
                         
                          <div className="carousel rounded-2xl w-[26vw] h-[70vh] ">
                            { 
                            userImages && Object.values(userImages).filter(value=> typeof value === 'object' && value !== null && value.image)?.map((image,index)=>(<div key={index} className="carousel-item w-full">
                                          
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

                           <h1 className="text-7xl pb-10 leading-none font-bold">
                           {userData?.name}
                           </h1>

                         </div>
                          
                               <div className="p-1 px-2 flex flex-row gap-4">
                               <p className="text-md   ">
                                 {userData?.age}
                               </p>
                               <p>|</p>
                               <p className="text-md  ">
                                 {userData?.gender}
                               </p>
                               <p className='text-md'>|</p>
                               <p className="text-md ">
                                 {userData?.location}
                               </p>
                               <p className='text-md'>|</p>
                               <p className="text-md ">
                                 straight
                               </p>
                               </div>
           
                               <div className="flex flex-row items-center px-2 gap-4 pt-8">

                                   <ArrowUpDown size={18}  />
                                     <p className="text-sm  ">{userData?.height}
                                     </p>
                                 </div>
            
                               <div className="flex flex-row items-center px-2 gap-4 py-3">

                                   <Users2 size={18}/> 
                                    <p className="text-sm  ">{userData?.preference}
                                    </p>
                                   </div>

                                <div className="flex flex-row items-center px-2 gap-4 pb-4">

                                 <GraduationCap size={18}/> 
                                 <p className="text-sm  ">{userData?.education}
                                 </p>
                                 </div>
                                 <div className="flex flex-row items-center gap-4 py-4 px-2 mb-6 ">

             <Heart size={18}/> 

             {userData?.interests &&  Object.keys(userData?.interests).map((keys,index)=>(
              <div key={index} className='rounded  p-2 flex items-center justify-center'>   
                <p className="text-sm pr-2 ">{keys}
             </p> 
             </div>
             ))}
           
             </div>

            
             <div className="flex flex-row gap-3 items-start mt-1">
            <Quote className="" size={20}/>
             <p className="text-lg text-wrap break-words  text-rose-900 min-h-[50px] max-h-[64px] max-w-[370px] truncate">
              {userData?.bio}</p>

            </div>

                         <p className="py-6 my-">
                          Prompt :
                         </p>
                         <div className='mt-16'>

                         <button onClick={()=>setShowMore(true)} className="btn btn-primary">More</button>
                         </div>
                         </div>
                         </div>
      </div>
     
     {showMore && <div className="mx-10 my-4 p-28 bg-base-200 rounded-lg min-h-screen shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                        <div className=" flex-col flex gap-28 items-center lg:flex-row">
                         
                         <div className='w-2/3 px-10'>
                         <div className='w-full flex flex-row justify-between'>

                           <h1 className="text-7xl pb-10 leading-none font-bold">
                           {userData?.name}
                           </h1>
                          <button onClick={()=>setShowMore(false)} >X</button>

                         </div>
                          
                               <div className="p-1 px-2 flex flex-row gap-4">
                               <p className="text-md   ">
                                 {userData?.age}
                               </p>
                               <p>|</p>
                               <p className="text-md  ">
                                 {userData?.gender}
                               </p>
                               <p className='text-md'>|</p>
                               <p className="text-md ">
                                 {userData?.location}
                               </p>
                               <p className='text-md'>|</p>
                               <p className="text-md ">
                                 straight
                               </p>
                               </div>
           
                               <div className="flex flex-row items-center px-2 gap-4 pt-8">

                                   <ArrowUpDown size={18}  />
                                     <p className="text-sm  ">{userData?.height}
                                     </p>
                                 </div>
            
                               <div className="flex flex-row items-center px-2 gap-4 py-3">

                                   <Users2 size={18}/> 
                                    <p className="text-sm  ">{userData?.preference}
                                    </p>
                                   </div>

                                <div className="flex flex-row items-center px-2 gap-4 pb-4">

                                 <GraduationCap size={18}/> 
                                 <p className="text-sm  ">{userData?.education}
                                 </p>
                                 </div>
                                 <div className="flex flex-row items-center gap-4 py-4 px-2 mb-6 ">

             <Heart size={18}/> 

             {userData?.interests &&  Object.keys(userData?.interests).map((keys,index)=>(
              <div key={index} className='rounded  p-2 flex items-center justify-center'>   
                <p className="text-sm pr-2 ">{keys}
             </p> 
             </div>
             ))}
           
             </div>

            
             <div className="flex flex-row gap-3 items-start mt-1">
            <Quote className="" size={20}/>
             <p className="text-lg text-wrap break-words  text-rose-900 min-h-[50px] max-h-[64px] max-w-[370px] truncate">
              {userData?.bio}</p>

            </div>

                         <p className="py-6 my-">
                          Prompt :
                         </p>
                         <div className='mt-16'>

                         </div>
                         </div>
                         </div>
      </div>}
    </div>
  )
}

export default POV
