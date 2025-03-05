import { useEffect, useState } from "react";
import { UIStore } from "./Store/UIStore"
import Splashsrc from "./Pages/WebPages/SplashSrc";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./Componentes/Navbar";
import Home from "./Pages/WebPages/Home";
import Marquee from "./Componentes/Marquee";
import About from "./Pages/WebPages/About";
import Eyes from "./Componentes/Eyes";
import Featured from "./Pages/WebPages/Features";
import Insights from "./Pages/WebPages/Insights";
import Banner from "./Pages/WebPages/Banner";
import Footer from "./Pages/WebPages/Footer";
import MovingLine2 from "./Componentes/UI/Movingline";
import { UserAuthStore } from "./Store/UserAuth";
import {Loader} from "lucide-react"
import { Navigate, Route, Routes } from "react-router-dom";
import UserHome from "./Pages/UserPages/Home";
import Login from "./Pages/UserPages/Login";
import Setting from "./Pages/UserPages/Setting";
import Profile from "./Pages/UserPages/Profile";
import Signup from "./Pages/UserPages/Signup";
import { Toaster } from "react-hot-toast";
import UserNavbar from "./Pages/UserPages/UserNavbar";
import { ProfileStore } from "./Store/ProfileStore";
import Chat from "./Pages/UserPages/Chat";
import POV from "./Pages/UserPages/POV";
import Preferences from "./Pages/UserPages/Preferences";
import Pictures from "./Pages/UserPages/Pictures";
import Notifications from "./Pages/UserPages/Notifications";
import Wall from "./Pages/WebPages/Wall";
import {motion } from 'framer-motion'
import Journey from "./Pages/WebPages/Journey";



function App() {

  const {userpage } = UIStore()
  const {authuser,isCheckingAuth,checkAuth} = UserAuthStore()
  const { theme ,showJourney,setshowJourney} = UIStore();
  const {fetchData} = ProfileStore()


  const [showSplash, setShowSplash] = useState(true);
  // const [showJourney,setshowJourney] = useState(false)
  
  
  
  useEffect(() => {
    
    const locomotiveScroll = new LocomotiveScroll()
    
    const timer = setTimeout(() => setShowSplash(false), 2000);
    
          return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    checkAuth()
    fetchData()

  }, [checkAuth,fetchData])


 


  if( isCheckingAuth && userpage){

    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin'/>
      </div>
    )
  }





  return  userpage ? 
  
  (   <div data-theme={theme} className=" min-h-screen overflow-visible">
      {authuser ? <UserNavbar /> : null }
    
    <div className="z-[-20]">  
      <Routes>
        <Route path="/" element={authuser ? <UserHome /> :  <Navigate to={'/login'} />} />
        <Route path="/signup" element={!authuser ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!authuser ? <Login /> : <Navigate to="/" />} />
        <Route path="/setting" element={authuser ? <Setting /> : <Navigate to="/login" /> } />
        <Route path="/profile" element={authuser ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/chat" element={authuser? <Chat/> : <Navigate to="/login" />}/>
        <Route path="/pov" element={authuser? <POV/> : <Navigate to="/login" />}/>
        <Route path="/preferences" element={authuser? <Preferences/> : <Navigate to="/login" />}/>
        <Route path="/pictures" element={authuser? <Pictures/> : <Navigate to="/login" />}/>
        <Route path="/notifications" element={authuser? <Notifications/> : <Navigate to="/login" />}/>
        <Route path="/wall" element={authuser? <Wall/> : <Navigate to="/login" />}/>


        {/* pink-900 */}

      </Routes>
    </div>
  
    <Toaster />
  </div>
  )  
  :                                                                        
  (  <div>

      {showSplash ? (null):(<Navbar />)}
         
           { showJourney && 
           <motion.div initial={{ x: "100%", opacity: 0 }}animate={{ x: "0%", opacity: 1 }}exit={{ x: "-100%", opacity: 0 }}transition={{ duration: 1, ease: "easeInOut" }}
            className=" z-[998] top-0 left-0  fixed backdrop-blur-sm w-full h-[100vh]">
             <div className="w-full flex  flex-col items-center justify-center h-full z-[999]  bg-zinc-400/10">

            <Journey/>
            <button className="bg-black text-white rounded-md py-2 px-8 mt-1 w-[80vw] hover:bg-zinc-100 hover:text-rose-500  " onClick={()=>setshowJourney()}>Take me home</button>

        </div>
             
         
           </motion.div>
         
           }
         <div className={`relative w-full min-h-screen bg-gradient-to-br from-pink-900 via-black  to-zinc-100  text-white ${showSplash ? "overflow-hidden" : ""} `}>
         
          {showSplash && (
                          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/50 z-999">
                               <Splashsrc />
                          </div>
          )}
        
        <div data-scroll-container className={`${showSplash ? "blur-md" : "blur-0"} transition-all duration-700`}>

        <div id='home'>
        <Home />
        <Marquee color={"bg-rose-400"} text={"we are SAVANA ."} />
        </div>


        <div className="border-b-2 z-[1]  border-rose-300 bg-gradient-to-br from-black via-[#004D40] to-black" id='about'>
        <MovingLine2 color={'green'} index={'-20'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2 color={'green'} index={'-20'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2 color={'green'} index={'-20'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2 color={'green'} index={'-20'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2 color={'green'} index={'-20'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2 color={'green'} index={'-20'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2 color={'green'} index={'-20'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>

        <About  />
        <div className='flex justify-center pb-40 border-rose-300 rounded-3xl'>
        <Eyes  />
        </div>
        <div>
   

     

        </div>
        </div>

        <div className=" rounded-3xl  overflow-hidden " id='features'>
          <MovingLine2 color={'pink'} index={'-10'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
          <MovingLine2 color={'pink'} index={'-10'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
          <MovingLine2 color={'pink'} index={'-10'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
          <MovingLine2 color={'pink'} index={'-10'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
          <MovingLine2 color={'pink'} index={'-10'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
          <MovingLine2 color={'pink'} index={'-10'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
          <MovingLine2 color={'pink'} index={'-10'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
          <MovingLine2 color={'pink'} index={'-10'} shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>


        <Featured  />
        <Marquee color={"bg-green-400"} text={"DELULUU  .  Romance   .  SMASH  .  W-RIZZ   .  SIMP  .  SLIDE  .  DATE   ."} />
        </div>

        <div id='insights'>
        <Insights  />
        </div>

        <div id='services'>
        <Banner  />
        </div>

        <div id='contactus'>
        <Footer />
        </div>

     
      </div>



    </div>

    </div>
  )
}

export default App
