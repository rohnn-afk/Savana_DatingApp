import { Link, useLocation } from 'react-router-dom'
import { UserAuthStore } from '../../Store/UserAuth'
import { ProfileStore } from '../../Store/ProfileStore'
import { motion } from "framer-motion"
import { MatchStore } from '../../Store/MatchStore'
import { NotificationStore } from '../../Store/NotificationStore'


const UserNavbar = () => {

    const {matches} = MatchStore()
    const {userData} = ProfileStore()
    const {logout} = UserAuthStore()
    const {unReadCount} = NotificationStore()

    const location = useLocation()


  return (
    <div className='relative z-[900] '>
<div className={` ${location.pathname == '/notifications' ? ('bg-base-100/50') : ('')} px-8 py-0.5 flex items-center justify-between  backdrop-blur-xl `}>
  <Link to={'/'} className="">
  <h1 className=" text-[#ff3e98] mt-3 subpixel-antialiased text-3xl prata-regular outfit-uniquifier tracking-widest">
                    SAVANA
                </h1>
  </Link>
  <div className="flex w-full py-0 my-0 justify-between items-center">
  <div className="flex w-full justify-end ">
    <ul className="flex  justify-between  text-sm ">
      <Link className='mx-2 hover:bg-base-300 transition duration-900 hover:shadow-xl rounded-xl px-4 pt-1  ' to={'/'}><li><a>Home</a></li></Link>
      <Link className='mx-2 hover:bg-base-300 transition duration-900  hover:shadow-xl rounded-xl px-4 pt-1 ' to={'/wall'}><li><a>Wall</a></li></Link>
      <Link className='mx-2 hover:bg-base-300 transition duration-900 hover:shadow-xl rounded-xl px-4 pt-1  ' to={'/chat'}><li className='indicator'><a>Matches :<span className="zain-regular ml-1  backdrop-blur-md px-1 pt-0.5 rounded-xl">{matches?.length}</span></a></li></Link>
      <Link className='mx-2 hover:bg-base-300 transition duration-900 hover:shadow-xl rounded-xl px-4 pt-1  ' to={'/notifications'}><li className='indicator'><a>Notifications :
      <span className="zain-regular ml-1 backdrop-blur-md px-1 pt-0.5 r">{unReadCount}</span></a></li></Link>

     
    </ul>
  </div>


    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-9 rounded-full">
          <img
            alt=""
            src={ userData?.userimage || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm absolute dropdown-content bg-base-100 rounded-box z-[900] mt-3 w-52 p-2 shadow">
       <Link to={'/profile'}>
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li></Link>
        <Link to={'/setting'}><li><a>Settings</a></li></Link>
        <Link onClick={logout}><li><a>Logout</a></li></Link>
      </ul>
    </div>
  </div>
</div>





   
    </div>
  )
}

export default UserNavbar
