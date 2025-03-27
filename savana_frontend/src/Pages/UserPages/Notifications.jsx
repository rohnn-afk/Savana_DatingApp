import { useEffect } from "react"
import { BackgroundGradientAnimation } from "../../Componentes/UI/RGBbackground"
import { NotificationStore } from "../../Store/NotificationStore"

const Notifications = () => {


  const {notifications,isNotificationLoading,unReadCount,markReadNotification} = NotificationStore()

  useEffect(() => {
    markReadNotification()

  }, [markReadNotification])
  

  console.log(notifications,isNotificationLoading,unReadCount)

  return (
    <div className="min-h-screen bg-slate-100/10">
    <BackgroundGradientAnimation>
    </BackgroundGradientAnimation>
      <div className=" flex flex-row ">

      <div className="w-1/4 m-6 mt-10 rounded-2xl h-[56vh] z-[900]  leckerli-one-regular leading-none bg-slate-600/30 flex flex-col gap-6 items-center justify-center ">
        <div>Likes</div>
        <div>Roses</div>
        <div>Chats</div>
        <div>Matches</div>


      </div>
      <div className="w-1/2 m-6 rounded-2xl h-[90vh] z-[900] bg-slate-100/40 flex flex-col gap-6 p-4  ">
        <div className="text-3xl  leckerli-one-regular leading-none px-4 ">new notifications :-</div>
        <div className="p-2">

        <div>Roses</div>
        <div>Chats</div>
        <div>Matches</div>
        </div>


      </div>
      <div className="w-1/4 m-6 mt-16 rounded-2xl h-[56vh] z-[300] bg-slate-600/30 flex flex-col gap-6 items-center p-4 ">
        <div>Whats new</div>
        


      </div>
      </div>
    {/* <Marquee color={"bg-rose-400"} text={"we are SAVANA ."} /> */}

    </div>
  )
}

export default Notifications
