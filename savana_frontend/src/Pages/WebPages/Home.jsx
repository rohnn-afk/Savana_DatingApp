import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
import { UIStore } from '../../Store/UIStore';
import { useState } from 'react';


const Home = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);


      const { setshowJourney} = UIStore()

    return (
    <div data-scroll data-scroll-speed="-.8" data-scroll-section className='w-full h-screen flex flex-col justify-between  b border-t-1'>
        <div className='w-full h-10'>

        </div>
        <div className='textstructure  px-20'>
            <div className='masker flex mb-8'>
                <h1 className=' gowun-dodum-regular text-9xl  tracking-tighter'>FEELING BORDED?</h1>
            </div>
            <div className='masker  flex flex-row'>
                <motion.div initial={{width:0}} animate={{width:'20vw'}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}}  className=' m-2 ml-2 w-[30vw] h-20 bg-[#E73879]'></motion.div>
                <h1 className=' gowun-dodum-regular text-8xl tracking-tighter'>MEET NEW PEOPLE</h1>
            </div>
            <div className='masker'>
                <h1 className=' gowun-dodum-regular text-8xl tracking-tighter'>ONLINE .</h1>
            </div>
        </div>
        <div 
         style={{ borderImage: "linear-gradient(to right, #E50046, #FFFFFF) 1" }}
        className='border-t  flex justify-between items-center text-lg lexend-exa-uniquifier py-2  px-1 pr-10'>
                {["Relationships / Hookups", "Connect verified people only"].map(
  (item, index) => (
    <motion.div
      key={index}
      className="relative overflow-hidden flex justify-center text-sm items-center cursor-pointer py-4 rounded-lg w-1/4"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Wrapper to control stacking and prevent flickering */}
      <div className="relative flex justify-center items-center w-full">
        {/* Default text (visible initially) */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={
            hoveredIndex === index
              ? { y: -10, opacity: 0 }
              : { y: 0, opacity: 1 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          {item}
        </motion.div>

        {/* Hovered text (appears on hover) */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={
            hoveredIndex === index
              ? { y: 0, opacity: 1 }
              : { y: 10, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          {item}
        </motion.div>
      </div>
    </motion.div>
  )
)}

         
            <button onClick={()=>{setshowJourney()}} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            className='start flex flex-row gap-2 cursor-pointer rounded-full my-2 items-center'>
            <div className='px-5 py-2  rounded-full text-base font-light'>Start the Journey</div>
         
            <motion.div 
             initial={{ y: 0, opacity: 1 }}
             animate={isHovered ? { y: -10, opacity: 0 } : { y: 0, opacity: 1 }}
             transition={{ duration: 0.5, ease: "easeInOut" }}
            className='w-11 h-11 absolute right-4 flex justify-center items-center rounded-full '>
                <MdArrowOutward/>
                </motion.div>

            <motion.div 
             initial={{ y: 10, opacity: 0 }}
             animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
             transition={{ duration: 0.5, ease: "easeInOut" }}
            className='w-11 absolute h-11 right-4 flex justify-center items-center rounded-full '>
                <MdArrowOutward/>
                </motion.div>   




            </button>

        </div>
      
    </div>
  )
}

export default Home 
