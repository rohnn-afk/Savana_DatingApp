import  { useState } from 'react'

import SidebarSkeleton from './UI/Skeletons/SidebarSkeleton'
import { Users } from 'lucide-react'
import { MatchStore } from '../Store/MatchStore'
import { UserAuthStore } from '../Store/UserAuth'


const Sidebar = () => {

  const {matches , isMatchesLoading ,selecteduser ,setSelecteduser} = MatchStore()
  const {onlineUsers} = UserAuthStore()
   

      const [showOnlineOnly,setShowOnlineOnly]= useState(false)
    

    const filteredUsers = showOnlineOnly ? matches?.filter((user) => onlineUsers?.includes(user?._id)) : matches;
    

    if(isMatchesLoading) return <SidebarSkeleton/>

  return (
    <aside className="h-[70vh] w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full bg-base-200  p-3">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Matches</span>
        </div>
        {/* TODO: Online filter toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers?.length - 1} online)</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {filteredUsers.map((user) => (
          <button
            key={user?._id}
            onClick={() => setSelecteduser(user)}
            className={`
              w-full p-2 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${selecteduser?._id === user?._id ? "bg-base-300 ring-1 ring-base-300" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user?.userimage || "/avatar.png"}
                alt={user?.name}
                className="size-12 object-cover rounded-full"
              />
              {onlineUsers?.includes(user?.userID) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full "
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium newfont truncate">{user?.name}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers?.includes(user?.userID) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers?.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No Matches yet</div>
        )}
      </div>
    </aside>
  )
}


export default Sidebar
