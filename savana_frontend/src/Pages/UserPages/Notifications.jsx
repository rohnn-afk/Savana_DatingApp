import { useEffect } from "react"
import { BackgroundGradientAnimation } from "../../Componentes/UI/RGBbackground"
import { NotificationStore } from "../../Store/NotificationStore"
import { UIStore } from "../../Store/UIStore"
import { motion } from "framer-motion";
import { BellPlus, Sparkles } from 'lucide-react';
import { MatchStore } from "../../Store/MatchStore";

const Notifications = () => {


  const {notifications,unReadCount,markReadNotification} = NotificationStore()
    const {likeCount} = UIStore()
  const {matches } = MatchStore()


    const formatISTDate = (timestamp) => {
      return new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      }).format(new Date(timestamp));
    };
  
    useEffect(() => {
      return () => markReadNotification(); 
    }, []);

  return (
    <div className="min-h-screen bg-slate-100/10">
    <BackgroundGradientAnimation>
    </BackgroundGradientAnimation>
      <div className=" flex flex-row ">

      <div className="w-1/5 ml-2 mt-3 h-full text-white z-[900] flex flex-col gap-3  ">
      <motion.div
      initial={{ x: "-100vw", opacity: 0 }} // Start from off-screen (left)
      animate={{ x: 0, opacity: 1 }} // Move to its normal position
      transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}  
      className=" h-[11vh] shadow-2xl  w-2/3 leckerli-one-regular leading-none rounded-xl  bg-slate-100/10 flex flex-col px-6 justify-center ">
        <div className="text-xl pl-2 flex flex-row justify-between items-center"><h1>Likes</h1><h1>:</h1><h1 className="zain-regular text-xl mt-1" >{likeCount}</h1></div>
        <div className="text-xl flex flex-row  justify-between items-center"><h1>Hearts</h1><h1>:</h1><h1 className="zain-regular text-xl mt-1" >{likeCount}</h1></div>
      </motion.div>
   
      <motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.9, 
    ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for smoother pop effect
    bounce: 0.5, delay: 0.4
  }}
  className="w-full rounded-xl border shadow-2xl  border-red-300 zain-regular bg-slate-100/10 flex flex-col"
>
  <div tabIndex={0} className="collapse collapse-plus">
    <div className="collapse-title text-xl font-medium">
      See who likes you ..
    </div>

    {/* Wrapping the collapse-content in a scrollable div */}
      <div className="collapse-content text-sm">
        <div className="h-[50vh] overflow-y-auto scrollbar-hidden" onWheel={(e) => e.stopPropagation()}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="p-2 mb-2">Item {i + 1}</div>
        ))}
      </div>
    </div>

  </div>
</motion.div>


        
      


      </div>
     
      <div className="w-1/2  mt-2 mx-5 min-h-screen ">

      <motion.div 
       initial={{ opacity: 0, y: -50 }} 
       animate={{ opacity: 1, y: 0 }} 
       transition={{ 
         duration: 0.6, 
         ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for smoother pop effect
         bounce: 0.5
       }}
       
      className={`w-full rounded-xl mt-4  flex  `}
      >
      
        <div tabIndex={0} className="collapse shadow-2xl  text-white border border-rose-300 backdrop-blur-lg collapse-plus">
  <div className="collapse-title text-xl flex justify-between font-normal">Notifications :  {unReadCount > 0 ? (<p className="font-thin text-base flex gap-2 items-center "><Sparkles size={16}/>{unReadCount} New</p>) : ('')}  </div>


  <div className="collapse-content text-sm flex flex-col gap-1 overflow-y-auto max-h-64 scrollbar-hidden"
    onWheel={(e) => e.stopPropagation()} 
    >
{notifications.length == 0 ?
(<h1 className="p-7 text-base">No notifications, start swiping</h1>)
:
  (notifications.map((item, index) => (
    <button key={index} className="px-3 shadow-2xl  rounded-lg bg-zinc-100/5 hover:bg-zinc-100/10 flex flex-row justify-between items-center">
    <div className="flex  p-3  flex-row text-sm items-center gap-4">
    <BellPlus size={18} /> <h1>{item?.type} </h1>: <h1>{item?.message}</h1>  <h1>{item?.senderdata?.name }</h1>- {item.type === 'MATCH' ? (<h1>matched with you !!</h1>): (<h1>liked you !!</h1>)}
    </div>
    <div className="text-xs gap-3 flex items-center"> {item.isRead ? ('') : (<div className="text-xs py-1 px-2 rounded-lg bg-zinc-200/10 flex gap-1 items-center shadow-2xl  "><Sparkles size={10} />NEW</div>) } <h1>{formatISTDate(item.timestamp)}</h1></div>
    </button>
  )))
}
</div>



  
</div>
 </motion.div> 

      </div>

      <div className="w-1/4 m-2 z-[300] flex flex-col gap-3 items-center">
      <motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.9, 
    ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for smoother pop effect
    bounce: 0.5, delay: 0.4
  }}
  className="w-full rounded-xl shadow-2xl  zain-regular bg-slate-100/20 text-white flex flex-col"
>
  <div tabIndex={0} className="collapse collapse-plus">
    <div className="collapse-title text-xl font-medium">
      Your matches ..
    </div>

    {/* Wrapping the collapse-content in a scrollable div */}
      <div className="collapse-content text-base">
        <div className="h-[50vh] overflow-y-auto scrollbar-hidden" onWheel={(e) => e.stopPropagation()}>
        
        {
           
          matches.map((user) => (
            <button
            key={user?._id}
            // onClick={() => setSelecteduser(user)}
            className={`
              w-full p-2 flex items-center gap-3
              hover:bg-base-200/10 rounded-xl transition-colors
              `}
              >
              <div className="relative mx-auto lg:mx-0">
              <img
              src={user?.userimage || "/avatar.png"}
              alt={user?.name}
              className="size-12 object-cover rounded-full"
              />
              </div>
              
              {/* User info - only visible on larger screens */}
              <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user?.name}</div>

              </div>
              </button>
            ))
          }
      </div>
    </div>

  </div>
</motion.div>

      <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.9, 
            ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for smoother pop effect
            bounce: 0.5,delay:0.4
          }}
      className={`w-full shadow-2xl  rounded-xl zain-regular bg-slate-100/20 text-white flex flex-col `}
      >
      <div tabIndex={0} className="collapse collapse-plus">
  <div className="collapse-title text-xl font-semibold">New Messages</div>

  <div className="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>

</div>

</motion.div>


      </div>
      </div>

    </div>
  )
}




export default Notifications
