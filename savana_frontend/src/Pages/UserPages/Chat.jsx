import { useEffect } from "react"
import Sidebar from "../../Componentes/Sidebar"
import { MatchStore } from "../../Store/MatchStore"
import NoChatSelected from "../../Componentes/UI/Skeletons/NoChatSelected"
import ChatContainer from "../../Componentes/ChatContainer"

const Chat = () => {

   const {getMatches,selecteduser} = MatchStore()

     useEffect(() => {
  
              getMatches()

     }, [getMatches])




  return (
    <div className="h-screen bg-base-300 mt-1 w-full fixed">
      <div className="flex items-center justify-center ">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-8xl h-[calc(107vh-1rem)]">
          <div className="flex h-full w-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selecteduser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
