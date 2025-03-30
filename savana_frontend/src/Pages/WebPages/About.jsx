import { useState } from 'react';
import ShuffleHero from '../../Componentes/UI/CardsHero'
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';


const About = () => {

    const [isHovered, setIsHovered] = useState(false);
  
  
  return (
    <div data-scroll data-scroll-speed=".4" data-scroll-section className=' mt-[-40]  flex gap-20 flex-col rounded-3xl overflow-hidden'>
        <div className='flex items-center w-[97vw] justify-center shadow-[0_12px_30px_rgba(0,0,0,0.9)] bg-amber-50 pb-10 mb-16  mx-auto rounded-3xl '>

          <div className='h-[70vh] flex w-full mt-10'><ShuffleHero/></div>
          </div>
        <div className=' mt-[-20] mx-auto w-full py-20 px-10 shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] bg-zinc-100/50 rounded-3xl  '>
          <h1 className='funnel-sans-uniquifier pl-10 text-gray-900  mb-4 leading-[2.6vw]'>
          <span className='text-6xl'>Redefining Dating Standards :</span>
          </h1>
            <h1 className='funnel-sans-uniquifier pl-16 text-gray-900 text-3xl mb-20 mr-20 leading-[2.6vw]'>
            Love, friendship, or just good vibes—whatever you're looking for, we make it effortless! With smart matchmaking, a safe and inclusive space, and the highest standards of modern dating, we connect all genders, races, and personalities. Real connections start here!</h1>
        <div className='w-full flex justify-center gap-1 border-t-[2px] py-20   border-rose-300'>
            
            <div className='w-1/2 mt-16'>
            <button 
            className=' text-[#003510] text-7xl'>Our Approch :</button>
            <h1 className='p-8 mt-8 pt-10 mr-4 text-xl  text-[#032234]'>At <span className='text-2xl'>SAVANA</span>, <br/> we believe in making meaningful connections effortless. Our smart matching algorithm helps you find like-minded individuals, ensuring every swipe brings you closer to someone special. Whether you're looking for love, friendship, or something in between, we make dating simple, safe, and fun. Start your journey today and discover real connections that last!</h1>
            <h1 className='p-8 mt-8 pt-3 mr-4 text-xl  text-[#003510]'> Swipe. Match. Connect. Love—made simple.</h1>
          
          
          
             <button  
                           onMouseEnter={() => setIsHovered(true)}
                           onMouseLeave={() => setIsHovered(false)}
                       className='start flex relative flex-row gap-2 ml-7 bg-black w-[9rem] cursor-pointer rounded-full my-2 items-center'>
                       <div className='px-5 py-2  rounded-full text-base font-light'>Read More</div>
                    
                       <motion.div 
                        initial={{ y: 0, opacity: 1 }}
                        animate={isHovered ? { y: -10, opacity: 0 } : { y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                       className='w-11 h-11 absolute  right-0 flex justify-center items-center rounded-full '>
                           <MdArrowOutward/>
                           </motion.div>
           
                       <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                       className='w-11 absolute h-11 right-0 flex justify-center items-center rounded-full '>
                           <MdArrowOutward/>
                           </motion.div>   
           
           
           
           
                       </button>


            </div>

            <div className="w-1/3 mt-12 h-[70vh] ml-10 p-7 border-2 border-red-300 rounded-3xl  overflow-hidden">
  <img
    src="/pexels-ketut-subiyanto-4350098.jpg"
    className="w-full rounded-3xl h-full object-cover"
    alt="Image"
  />
</div>

        </div>

        <div className='w-full my-4 p-6 mt-10 space-y-3 flex flex-col justify-center items-center'>

          <div className='w-[90vw] h-[20vh] overflow-hidden rounded-3xl  border border-red-300' >


          </div>

      

        </div>
        
        </div>

          
    </div>
  )
}

export default About
