import { motion } from 'framer-motion'
import { UIStore } from '../../Store/UIStore';
// import { Link } from 'react-router-dom'

const Footer = () => {

    const { setUserPage } = UIStore();
  
  
  return (
    <div className="flex flex-col h-screen bg-white">
   
    <div className="w-full  text-xl flex items-center  justify-between px-[10vw] bg-[#032234]">
      <motion.button onClick={()=>{setUserPage()}} whileHover={{letterSpacing: "0.1em",color: "#FFED00",transition: { duration: 0.3 },}} className="lexend-exa-uniquifier py-8 px-30">CREATE ACCOUNT</motion.button>
      <motion.button onClick={()=>{setUserPage()}} whileHover={{letterSpacing: "0.1em",color: "#FFED00",transition: { duration: 0.3 },}}className="lexend-exa-uniquifier py-8 px-30">EXISTING USER</motion.button>
      <motion.button onClick={()=>{}} whileHover={{letterSpacing: "0.1em",color: "#FFED00",transition: { duration: 0.3 },}}className="lexend-exa-uniquifier py-8 px-30">MAIL-US</motion.button>
    </div>
  
    
    <div className="flex-grow w-full text-black p-8 flex">
      <div className="w-1/2 p-8">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }} 
        className="subpixel-antialiased text-[5vw] uppercase leckerli-one-regular leading-none">
          ENDING
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }} 
        className="subpixel-antialiased text-[4vw] uppercase leckerli-one-regular leading-none">
          PAGE 
        </motion.h1>
      </div>
      <div className="w-5/6 flex flex-col">
      <h1 className='lexend-exa-uniquifier text-5xl tracking-tighter  p-8'>LINKS :</h1>
      <div className="mt-1 flex justify-between text-lg text-[#073B26] w-3/4 p-10  gap-y-6"> {/* Adjusted layout to flex-row */}
          <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
           viewport={{ once: true }} 
          className="flex flex-col font-semibold space-y-3">
            <h4 className="font-semibold">Products</h4>
            <p>Features</p>
            <p>Integrations</p>
            <p>Pricing 01</p>
            <p>Contact 01</p>
          </motion.div>

          <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
           viewport={{ once: true }} 
          className="flex flex-col font-semibold space-y-3">
            <h4 className="font-semibold">Company</h4>
            <p>About</p>
            <p>Blogs</p>
            <p>Contact 02</p>
            <p>Blog Details</p>
          </motion.div>

          <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
           viewport={{ once: true }} 
          className="flex flex-col font-semibold space-y-3">
            <h4 className="font-semibold">Support</h4>
            <p>Privacy</p>
            <p>Conditions</p>
            <p>FAQs</p>
          </motion.div>
        </div>
      
    </div>
    
  
  </div>
   
    <motion.div    
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
    viewport={{ once: true }} 
    
    className="w-full h-8 z-50 rounded-t-3xl shadow-[0_-12px_30px_rgba(0,0,0,0.2)] prata-regular outfit-uniquifier tracking-widest bg-[#032234] flex items-center justify-center">
    
    </motion.div>
  </div>
  )
}




export default Footer
