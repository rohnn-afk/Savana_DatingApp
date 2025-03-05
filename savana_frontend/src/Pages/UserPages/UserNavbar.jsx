import { Link } from 'react-router-dom'
import { UserAuthStore } from '../../Store/UserAuth'
import { ProfileStore } from '../../Store/ProfileStore'
import { motion } from "framer-motion"
import { MatchStore } from '../../Store/MatchStore'

const UserNavbar = () => {

    const {matches} = MatchStore()
  

    const {userData} = ProfileStore()
    const {logout} = UserAuthStore()


  return (
    <div className='relative z-[900] '>
<div className="px-8 flex items-center justify-between  backdrop-blur-xl ">
  <div className="">
  <h1 className="text-red-400 subpixel-antialiased text-3xl prata-regular outfit-uniquifier tracking-widest">
                    SAVANA
                </h1>
  </div>
  <div className="flex w-full py-0 my-0 justify-between items-center">
  <div className="flex w-full ">
    <ul className="flex  justify-between  text-lg mx-24 ml-96">
      <Link className='mx-12 hover:bg-base-300 px-4 py-2  rounded-md' to={'/'}><li><a>Home</a></li></Link>
      <Link className='mx-12 hover:bg-base-300 px-4 py-2  rounded-md' to={'/wall'}><li><a>Wall</a></li></Link>
      <Link className='mx-12 hover:bg-base-300 px-4 py-2  rounded-md' to={'/chat'}><li className='indicator'><a>Matches<span className="badge badge-lg zain-regular indicator-item">{matches?.length}</span></a></li></Link>
      <Link className='mx-12 hover:bg-base-300 px-4 py-2  rounded-md' to={'/notifications'}><li className='indicator'><a>Notifications
      <span className="badge badge-lg zain-regular indicator-item">9</span></a></li></Link>

      

     
    </ul>
  </div>


    <div className="dropdown dropdown-end pt-1">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-11 rounded-full">
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
<motion.div
  className="h-0.5 bg-zinc-100 rounded-full origin-left"
  initial={{ scaleX: 0, rotate: -10 }}
  animate={{ scaleX: 1, rotate: 0 }}
  transition={{ duration: 3, ease: [0.6, 0.05, -0.01, 0.9]}}
/>
<motion.div
      className="h-0.5 bg-zinc-900 rounded-full origin-left"
      initial={{ scaleX: 0, rotate: -10 }}
      animate={{ scaleX: 1, rotate: 0 }}
      transition={{ duration: 3, ease: [0.6, 0.05, -0.01, 0.9]}}
    />




   
    </div>
  )
}

export default UserNavbar
