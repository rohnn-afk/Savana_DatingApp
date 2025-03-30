import { AnimatePresence, motion } from "framer-motion";
import  {  useState } from "react";
import MovingLine2 from "../../Componentes/UI/Movingline";
import { MdArrowOutward } from "react-icons/md";
import { UIStore } from "../../Store/UIStore";


const Featured = () => {

        const { setshowJourney} = UIStore()
  


  const [isHovered, setIsHovered] = useState(false);



  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);

  return (
    <div className="mb-16 rounded-3xl ">
        <MovingLine2  shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2  shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2  shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>
        <MovingLine2  shadow={'[0_0_15px_rgba(255,20,147,0.7)]'}/>



      <AnimatePresence>
        <div className="w-full pb-14 z-[1] mt-30 mb-10 shadow-[0_20px_30px_-10px_rgba(0,0,0,0.9)]  rounded-b-[500rem] border-b-1 border-red-300  ">
          <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "125px", opacity: 1 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.6  }}
                viewport={{ once: true}}
          className="px-20 w-full  border-b-4 flex  bg-gradient-to-r from-white via-[#62FBFD] to-[#62FBFD]  border-[#FFEB55] ">
            <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="text-8xl    text-[#1e0820] leckerli-one-regular">
              {" "}
             <span className="text-9xl">C</span>ore Highlights :-
            </motion.h1>
          </motion.div>
          <div className="p-12 my-20  mb-20 pb-8">
          <div className="cards  mt-16 ml-20 pr-20 rounded-xl p-7 flex gap-8 w-full mb-28">
              <div
                onMouseEnter={() => setHovering1(true)}
                onMouseLeave={() => setHovering1(false)}
                className="cardcontainer w-1/3 relative h-[50vh]  "
              >
                <h1 className="absolute flex overflow-hidden left-full text-[#62FBFD] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[900] text-8xl tracking-tighter funnel-sans-uniquifier leading-none">
                  {
                    //fyde
                    "VERIFIED".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering1 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.02,
                        }}
                        className="inline-block "
                        key={index+10}
                      >
                        {item}
                      </motion.span>
                    ))
                  }
                </h1>
                <motion.div
                  whileHover={{
                    scale: 0.95,
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  }}
                  className="card w-full h-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.3),0_-12px_30px_rgba(0,0,0,0.3)] object-center flex items-center bg-[#cdfeff] justify-center  overflow-hidden border-0 rounded-3xl  border-zinc-800"
                >
                  <motion.img
                    whileHover={{
                      scale: 0.8,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                    className="w-5/6 h-5/6  bg-cover shadow-[0px_10px_30px_rgba(0,0,0,0.8)] rounded-3xl "
                    alt="w"
                    src="/Homepage-Photo-663x469.jpg"
                  ></motion.img>
                </motion.div>
                
              </div>
              <div
                onMouseEnter={() => setHovering2(true)}
                onMouseLeave={() => setHovering2(false)}
                className="cardcontainer relative w-1/3  h-[50vh] "
              >
                <h1 className="absolute flex overflow-hidden right-full text-[#62FBFD] translate-x-1/3 top-1/2 -translate-y-1/2 z-[900] text-8xl tracking-tighter funnel-sans-uniquifier leading-none">
                  {
                    //VISe
                    "USERS".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.02,
                        }}
                        className="inline-block "
                        key={index}
                      >
                        {item}
                      </motion.span>
                    ))
                  }
                </h1>
                <motion.div
                  whileHover={{
                    scale: 0.9,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                  className="card w-full h-full object-cover bg-[#1A1A19]  shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] object-center rounded-3xl    overflow-hidden flex justify-center items-center"
                >
                  <motion.img
                    whileHover={{
                      scale: 0.8,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 10,
                      },
                    }}
                    className="w-4/6 h-4/6 bg-cover shadow-[0px_10px_30px_rgba(0,0,0,0.8)] rounded-3xl "
                    alt="w"
                    src="/Fyde_Illustration_Crypto_2-663x551.png"
                  ></motion.img>
                </motion.div>
              </div>
              <div className="flex flex-col mt-10 justify-between  mr-[1vw] w-[25vw] h-[38vh] border-red-300 text-white items-end mx-10 ">
              <div className=" flex flex-col justify-end items-end">
                        
                            <motion.h2    
                            initial={{ opacity: 0, y: 50 }} // Start position
                            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            whileHover={{
                              scale: 1.05,
                              transition: { type: "spring", stiffness: 300, damping: 15 },
                            }}
                            viewport={{ once: true }} className="text-xl px-6 py-3 hover:cursor-none gowun-dodum-regular rounded-md uppercase">
                                        
                                              Only Verified Users
                             </motion.h2>

                             <motion.h2      initial={{ opacity: 0, y: 50 }} // Start position
  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
  whileHover={{
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  }}
  viewport={{ once: true }}  className="text-xl px- py-3 hover:cursor-none gowun-dodum-regular  rounded-md uppercase">
                                        
                                              Strictly Monitored Community
                             </motion.h2>

                             <motion.h2       initial={{ opacity: 0, y: 50 }} // Start position
  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
  whileHover={{
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  }}
  viewport={{ once: true }}  className="text-xl px-6 py-3 hover:cursor-none gowun-dodum-regular backdrop-blur-md  rounded-md  uppercase">
                                        
                                              Privacy Focused
                             </motion.h2>
                              
                             </div>
                             <motion.button    
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                initial={{ opacity: 0, y: 50 }} // Start position
                                whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                                whileHover={{
                                  scale: 1.05,
                                  transition: { type: "spring", stiffness: 300, damping: 15 },
                                }}
                                viewport={{ once: true }} className="text-xl px-5 py-2 mr-3 flex flex-row items-center justify-center gap-3 gowun-dodum-regular backdrop-blur-md bg-black rounded-full  uppercase">
                                        
                                              <div className='px-5 py-2 mr-4 text-[#FFEB55]  rounded-full text-base font-light'>Learn More</div>
                                                     
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
                             </motion.button>
              </div>
              
          </div>
          </div>

          <div className="p-10 mb-20 pb-8">
                      
            <div className="cards flex gap-7 pl-6 pr-16 w-full mb-10">
            <div className="flex flex-col  mr-[1vw] w-[30vw] rounded-xl border-1 border-red-300  items-end">
                 
                  <motion.h2
                      initial={{ opacity: 0, y: 50 }} // Start position
                      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300, damping: 15 },
                      }}
                      viewport={{ once: true }}
                    className="text-xl p-2 hover:cursor-none gowun-dodum-regular flex justify-center  items-center uppercase"
                  >
                    PREMIUM  DESIGN 
                  </motion.h2>
                  <motion.h2
                       initial={{ opacity: 0, y: 50 }} // Start position
                       whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                       transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                       whileHover={{
                         scale: 1.05,
                         transition: { type: "spring", stiffness: 300, damping: 15 },
                       }}
                       viewport={{ once: true }}
                    className="text-xl p-2 hover:cursor-none gowun-dodum-regular flex justify-center  items-center uppercase"
                  >
                    Enhanced User Experience
                  </motion.h2>
                   <motion.h2
                       initial={{ opacity: 0, y: 50 }} // Start position
                       whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                       transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                       whileHover={{
                         scale: 1.05,
                         transition: { type: "spring", stiffness: 300, damping: 15 },
                       }}
                       viewport={{ once: true }}
                    className="text-xl p-2 hover:cursor-none gowun-dodum-regular flex justify-center  items-center uppercase"
                  >
                   Smoothly Designed 
                  </motion.h2>
                  
                </div>
              <div
                onMouseEnter={() => setHovering3(true)}
                onMouseLeave={() => setHovering3(false)}
                className="cardcontainer w-2/3 relative h-[50vh]  "
              >
                <h1 className="absolute flex overflow-hidden left-full text-yellow-300 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[900] text-9xl tracking-tighter funnel-sans-uniquifier leading-none">
                  {
                    //fyde
                    "PREMIUM".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering3 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.08,
                        }}
                        className="inline-block "
                        key={index+20}
                      >
                        {item}
                      </motion.span>
                    ))
                  }
                </h1>
                <motion.div
                  whileHover={{
                    scale: 0.9,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className="card w-full h-full object-cover object-center bg-[#0B192C] rounded-3xl overflow-hidden"
                >
                  <motion.img
                    whileHover={{
                      scale: 0.9,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    className="w-full h-full bg-cover scale-80 rounded-3xl"
                    alt="w"
                    src="/Frame-3876-663x550.jpg"
                  ></motion.img>
                </motion.div>
                
              </div>
              <div
                onMouseEnter={() => setHovering4(true)}
                onMouseLeave={() => setHovering4(false)}
                className="cardcontainer relative w-2/3  h-[50vh] "
              >
                <h1 className="absolute flex overflow-hidden right-full text-yellow-300 translate-x-1/2 top-1/2 -translate-y-1/2 z-[900] text-9xl tracking-tighter funnel-sans-uniquifier leading-none">
                  {
                    //VISe
                    "BLEND".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering4 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.08,
                        }}
                        className="inline-block "
                        key={index+30}
                      >
                        {item}
                      </motion.span>
                    ))
                  }
                </h1>
                <motion.div
                  whileHover={{
                    scale: 0.95,
                    transition: { type: "spring", stiffness: 200, damping: 20 },
                  }}
                  className="card w-full h-full object-cover  object-center  overflow-hidden flex justify-center items-center border-2 rounded-3xl border-[#62FBFD]"
                >
                  <motion.img
                    whileHover={{
                      scale: 0.9,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      },
                    }}
                    className="w-4/6 h-4/6 bg-cover rounded-2xl "
                    alt="w"
                    src="/PB-Front-4-663x551.png"
                  ></motion.img>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
      <div className="w-full rounded-t-[60rem] mt-52 flex h-44 overflow-hidden  bg-white shadow-2xl" >
      <div className='text   text-black whitespace-nowrap flex uppercase leckerli-one-regular'>
            <div className='text relative border-zinc-300 text-black whitespace-nowrap flex uppercase leckerli-one-regular'>
                <AnimatePresence> 
                <motion.h1 key={'1'} initial={{x:'50%'}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:10}} className='text-[5vw] py-5 leading-none ml-44 left-40 pr-[100px] '>{`SUBSCRIBE  ....`}</motion.h1>
                <motion.h1 key={'2'} initial={{x:0}} animate={{x:'-200%',}} transition={{ease:'linear',repeat:Infinity,duration:8}} className='text-[3vw] py-5 leading-none  pr-[100px] ml-4'>{`PREMIUM ...`}</motion.h1>
                <motion.h1 key={'3'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:8}} className='text-[5vw] py-5 leading-none mt-16 absolute left-1/3  pr-[100px]'>{`JOIN ...`}</motion.h1>
                <motion.h1 key={'4'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:10}} className='text-[4vw] py-5 leading-none absolute left-1/2 mt-6  pr-[100px] '>{`REGULATED ....`}</motion.h1>
                <motion.h1 key={'5'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:8}} className='text-[2vw] py-5 leading-none bottom-0 absolute right-1/4 pr-[100px] ml-4'>{`COMMUNITY ..`}</motion.h1>
                <motion.h1 key={'6'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:15}} className='text-[5vw] py-5 leading-none  pl-[100px]'>{`SAVANA  ....`}</motion.h1>
                
                </AnimatePresence>
            </div>
            </div>
      </div>
      <div className="relative w-full flex flex-col items-center">
  {/* Top Black Section */}
  <div className="w-full rounded-b-[50rem] shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] flex items-center justify-center space-x-40 h-44 z-[300] bg-black relative ">
    <motion.h1
     initial={{ opacity: 0, scale: 0.5 }}
     whileInView={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
     viewport={{ once: true }} 
     className="text-3xl text-white text-center">
    Go Premium – Unlock the Best of Dating!
    </motion.h1>
    <button 
    onClick={()=>{setshowJourney()}}  className="rounded-full p-6 w-1/3 bg-[#E50046]  text-white ">
      Learn More
    </button>
  </div>

  {/* Bottom Green Section */}
  <motion.div 
     initial={{ height: 0, opacity: 0 }}
     whileInView={{ height: "244px", opacity: 1 }}
     transition={{ duration: 0.9, ease: "easeOut" , delay: 0.2 }}
     viewport={{ once: false, amount: 0.2 }}
  className="w-full rounded-b-[12rem] flex items-end pb-5 justify-center h-60 bg-[#255F38] absolute z-[200]">
    <h1 className="text-xl text-white text-center">
      Take control of your love life with our premium plan—smarter matches, enhanced privacy, and the best tools to connect with like-minded people.
    </h1>
  </motion.div>
  <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "275px", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4  }}
            viewport={{ once: false, amount: 0.2 }}
    
   className="w-full rounded-b-[13rem] flex items-end pb-1  shadow-[0_12px_30px_rgba(0,0,0,0.9)]  justify-center  bg-[#FFEB55] absolute z-[100]">
    <div className="text-xl  w-3/6 flex flex-row justify-between items-end text-black text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.4 }}
        viewport={{ once: true }} 
      >
        Exclusive Community
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.5 }}
        viewport={{ once: true }} >
      Unlimited Swipes
      </motion.h1>
       <motion.h1  initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.7}}
            viewport={{ once: true }} >
       Ad-Free Experience 
      </motion.h1>
    </div>
  </motion.div>
</div>

    </div>
  );
};

export default Featured;
