import {  motion } from "framer-motion";
import { BentoGridThirdDemo } from "../../Componentes/UI/ReviewHeroGrid";
import { AnimatedTooltipPreview } from "../../Componentes/UI/AnimatedToolReview";
import CountUpTimer from "../../Componentes/UI/Clock";


const Insights = () => {
    return (
      <div className=" space-y-8 bg-gradient-to-br pb-20 from-[#2DAA9E] via-[#004D40] to-black" >
          <div className='w-full h-[250vh]  p-20 rounded-4xl'>
              <motion.h1
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                 viewport={{ once: true }} 
              className='text-7xl underline font-bold pl-32 text-zinc-800 lexend-exa-uniquifier tracking-tighter'>Our Family reviews</motion.h1>
          <div className='w-full h-screen py-10 flex flex-col gap-36  my-32 '> 

            <BentoGridThirdDemo/>
            <AnimatedTooltipPreview/>

<motion.div
  initial={{ x: "-100vw", opacity: 0 }} // Start from off-screen (left)
  animate={{ x: 0, opacity: 1 }} // Move to its normal position
  transition={{ type: "tween", duration: 0.8, ease: "easeOut", delay:0.5 }}  
  viewport={{ once: true }} 

className=" w-full flex gap-32 justify-center sm:flex-col md:flex-col lg:flex-row my-4 ">
            <CountUpTimer/>
<fieldset 

className="fieldset w-[40rem] flex flex-col bg-zinc-100/10  p-4 rounded-box">
  <h1 className="my-4 text-center text-2xl lexend-exa-uniquifier tracking-tighter font-bold underline">write a review ?</h1>
  
  <label className="fieldset-label my-2">Name : </label>
  <input type="text" className="input my-2" placeholder="name" />
  
  <label className="fieldset-label  my-2">Review : </label>
  <textarea className="textarea h-24 my-2" placeholder="Bio"></textarea>

  
  <button className="btn btn-neutral mt-4">Submit</button>
</fieldset>

</motion.div>
       
          </div>
          </div>
  
          {/* {cards} */}
          <div data-scroll data-scroll-speed=".3" data-scroll-section >
  
          <div className='flex items-center justify-center p-10 mt-20 '>
            <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
             className='text-8xl text-white mb-10 uppercase leckerli-one-regular'>COMPANY</motion.h1></div>
          <div className='p-25 w-full h-[88vh] pb-28  py-16 rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] border-t-1 border-zinc-800 flex flex-row justify-center bg-zinc-900'>
  
              <div className='container mt-10 w-3/4 rounded-xl flex justify-center items-center m-20 '>
                  <div className='cards shadow-[0_12px_30px_rgba(0,0,0,0.9)] bg-zinc-800 rounded-xl relative  h-full w-full flex items-center justify-center'>
                  <h1 className='text-7xl subpixel-antialiased prata-regular outfit-uniquifier tracking-widest text-rose-400'>SAVANA</h1>
                  <button className='absolute left-10 bottom-10 text-xl px-3  border-2 rounded-full hover:text-white hover:bg-red-300 transition duration-300 ease-in-out text-red-300'><span className='text-md'>©</span>2025 savana.co</button>
                  </div> 
              </div>
              <div className='container mt-10  w-3/4 m-8 flex flex-row gap-8 '>
                  <div className='cards shadow-[0_12px_30px_rgba(0,0,0,0.9)] rounded-xl w-1/2 overflow-hidden relative h-110 bg-rose-900'>
                  <img src='/istockphoto-909568522-612x612.jpg'></img>
                  <div className="w-full h-[33vh] flex items-center justify-center">
                  <h1 className='text-5xl gowun-dodum-regular tracking-tighter '>Ratings</h1>
                  </div>
                  </div>
                  <div className='cards relative w-1/2 flex items-center justify-center object-cover object-center  overflow-hidden rounded-xl h-110  bg-gradient-to-br from-[#3a3a3a] via-[#5a5a5a] to-[#2a2a2a] shadow-[0_12px_30px_rgba(0,0,0,0.9)]'>
                  <img src='/Untitleddesign (1).png' className='w-3-4 h-3/4 rounded-xl'></img>
                  <button className='absolute left-23 bottom-3 text-xl px-3  rounded-full hover:text-white hover:bg-white-700 transition duration-300 ease-in-out text-gray-900'><span className='text-md'>©</span>delhiboys.ventuer</button>
                  </div>
              </div>
              
          </div>
  
        
          </div>
      </div>
    )
  }
  
  export default Insights
  