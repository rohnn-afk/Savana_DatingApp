import { motion } from 'framer-motion'
import { UIStore } from '../../Store/UIStore';
// import { Link } from 'react-router-dom'

const Footer = () => {

    const { setUserPage } = UIStore();
  
  
  return (
    <div className="flex flex-col h-screen">
   
    <div className="w-full h-1/5 text-2xl flex items-center shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] justify-between px-[10vw] bg-rose-400">
      <motion.button onClick={()=>{setUserPage()}} whileHover={{letterSpacing: "0.1em",color: "#000000",transition: { duration: 0.3 },}} className="lexend-exa-uniquifier py-14 px-30">CREATE ACCOUNT</motion.button>
      <motion.button onClick={()=>{setUserPage()}} whileHover={{letterSpacing: "0.1em",color: "#000000",transition: { duration: 0.3 },}}className="lexend-exa-uniquifier py-14 px-30">EXISTING USER</motion.button>
      <motion.button onClick={()=>{}} whileHover={{letterSpacing: "0.1em",color: "#000000",transition: { duration: 0.3 },}}className="lexend-exa-uniquifier py-14 px-30">MAIL-US</motion.button>
    </div>
  
    
    <div className="flex-grow w-full p-8 flex">
      <div className="w-1/2 p-8">
        <h1 className="subpixel-antialiased text-[6vw] uppercase leckerli-one-regular leading-none">
          ENDING
        </h1>
        <h1 className="subpixel-antialiased text-[6vw] uppercase leckerli-one-regular leading-none">
          PAGE 
        </h1>
      </div>
      <div className="w-1/4 flex flex-col">
      <h1 className='lexend-exa-uniquifier text-7xl tracking-tighter  p-8'>LINKS :</h1>
      <h2 className='lexend-exa-uniquifier text-2xl px-12'>HOME</h2></div>
    </div>
  
   
    <div className="w-full h-[5vh] rounded-t-3xl shadow-[0_-12px_30px_rgba(0,0,0,0.9)] bg-rose-900 flex items-center justify-center">
      
    </div>
  </div>
  
  )
}



export default Footer
