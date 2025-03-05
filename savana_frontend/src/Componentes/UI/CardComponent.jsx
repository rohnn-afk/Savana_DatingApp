import { ArrowUpDown, GraduationCap, Heart, Quote, Users2 } from "lucide-react"
import { UIStore } from "../../Store/UIStore"
import { MatchStore } from "../../Store/MatchStore"

const CardComponent = () => {


  const {wallProfile,wallProfileImages,removeWallProfile} =UIStore()
  const {likePotentialMatch} = MatchStore()



  return (
    <div>

                 <div className="card bg--100 w-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-zinc-100 text-black  mt-1">
  
                      <div className="card card-side">
 
                         <div className='overflow-hidden h-full'>
                         
                         <div className="carousel  w-[22vw] h-[53vh] ">
                           { 
                           wallProfileImages && Object.values(wallProfileImages).filter(value=> typeof value === 'object' && value !== null && value.image)?.map((image,index)=>(<div key={index} className="carousel-item  w-full">
                                         
                                          <img src={image?.image}  className="w-full object-cover roun "  alt="" />
                             
                             </div>))
                             }
                         </div>

                         </div>

                         <div className=" flex flex-col gap-3 px-6 py-4 ">
                        <div className="w-full flex justify-end">
                        <button className="hover:text-red-600" onClick={()=>removeWallProfile()}>X</button>
                        </div>

                         <div className="flex flex-row  items-center gap-4  ">

                         <ArrowUpDown size={15}  />
                              <p className="text-sm card-title ">{wallProfile?.height}
                              </p>
                        </div>
                       

                        <div className="flex flex-row items-center gap-4 ">

                        <Users2 size={15}/> 
                        <p className="text-sm  ">{wallProfile?.preference}
                        </p>
                        </div>

                        <div className="flex flex-row items-center gap-4">

                        <GraduationCap size={16}/> 
                        <p className="text-sm  ">{wallProfile?.education}
                        </p>
                        </div>

                        <div className="w-full flex items-center px-3 justify-center py-2  mt-10">
                        <button onClick={()=>likePotentialMatch(wallProfile)} className="badge badge-outline text-lg p-4 text-rose-500 hover:text-white hover:bg-rose-500 rounded-sm">Like</button>
                        </div>
                        <div className="w-full flex items-center px-3 justify-center py-2 mt-4">
                        <button onClick={()=>likePotentialMatch(wallProfile)} className="badge badge-outline text-lg p-4 text-rose-500 hover:text-white hover:bg-rose-500 rounded-sm">Heart</button>
                        </div>


                        
                       
                       </div>                
    </div>



    <div className="bg-white ">
      
      <div className="w-full flex justify-between items-center" > 
      <h2 className=" flex items-center capitalize text-4xl px-6  p-2">
      {wallProfile?.name}
    </h2>
      <div className="badge badge-secondary mx-4 rounded-sm py-1 leckerli-one-regular leading-none px-2">verified</div>
      </div>
      <hr className=" mx-6 h-0.5 bg-rose-500  border-none"/>
      <div className="w-full flex justify-between items-center">
      <div className="p-2 pt-3 px-6 flex flex-row gap-4">
                               <p className="text-md   ">
                                 {wallProfile?.age}
                               </p>
                               <p>|</p>
                               <p className="text-md  ">
                                 {wallProfile?.gender}
                               </p>
                               <p className='text-md'>|</p>
                               <p className="text-md ">
                                 {wallProfile?.location}
                               </p>
                               <p className='text-md'>|</p>
                               <p className="text-md ">
                                 straight
                               </p>
                               </div>
      </div>
      
      <div className="flex items-center gap-3 p-1 px-6 flex-row">    
      <Heart className="text-rose-500" size={18}/> 
                 {wallProfile?.interests &&  Object.keys(wallProfile?.interests).map((keys,index)=>(
                  <div key={index} className='rounded px-1 mx-1 flex flex-row items-center justify-center'>   
                    <p className="text-sm ">{keys}
                   </p> 
                  </div>
                  ))}
      </div>

      <div className="flex flex-row gap-3 items-start  p-2 px-6">
            <Quote className="text-rose-500 mr-2" size={18}/>
             <p className="text-lg text-wrap break-words leading-none  text-rose-900 min-h-[50px] max-h-[64px] max-w-[400px] truncate">
              {wallProfile?.bio}</p>

      </div>

      <p className="pb-4 px-6">
                          Prompt : hdhgyudhfhuih uudui9wdui aiuhduaid yiydiuas 8idyhiasud ouiasu
                         </p>




    </div>
    </div>
    </div>
  )
}

export default CardComponent
