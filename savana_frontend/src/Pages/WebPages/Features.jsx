import { AnimatePresence, motion, useInView } from "framer-motion";
import  { useRef, useState } from "react";

const Featured = () => {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });


  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);

  return (
    <div className="rounded-4xl">
      <AnimatePresence>
        <div className="w-full py-14 mt-30 mb-20 border-b-1 border-red-300 rounded-4xl ">
          <div className="px-12 w-full rounded-3xl    border-b-2 border-red-300 py-10">
            <h1 className="text-8xl uppercase mb-10  leckerli-one-regular">
              {" "}
              FEATUREs :-
            </h1>
          </div>
          <div className="p-12 my-20  mb-20 pb-8">
          <div className="cards  mt-12 ml-20 pr-20 rounded-xl p-7 flex gap-8 w-full mb-10">
              <div
                onMouseEnter={() => setHovering1(true)}
                onMouseLeave={() => setHovering1(false)}
                className="cardcontainer w-1/3 relative h-[52vh]  "
              >
                <h1 className="absolute flex overflow-hidden left-full text-green-400 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[900] text-8xl tracking-tighter funnel-sans-uniquifier leading-none">
                  {
                    //fyde
                    "VERIFIED".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering1 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.08,
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
                    scale: 0.95,
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  }}
                  className="card w-full h-full object-cover object-center flex items-center justify-center  overflow-hidden border-0 rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.8)] border-zinc-800"
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
                    className="w-5/6 h-5/6  bg-cover shadow-[0px_10px_30px_rgba(0,0,0,0.8)] rounded-2xl "
                    alt="w"
                    src="/Homepage-Photo-663x469.jpg"
                  ></motion.img>
                </motion.div>
                
              </div>
              <div
                onMouseEnter={() => setHovering2(true)}
                onMouseLeave={() => setHovering2(false)}
                className="cardcontainer relative w-1/3  h-[52vh] "
              >
                <h1 className="absolute flex overflow-hidden right-full text-green-400 translate-x-1/3 top-1/2 -translate-y-1/2 z-[900] text-8xl tracking-tighter funnel-sans-uniquifier leading-none">
                  {
                    //VISe
                    "USERS".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.08,
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
                  className="card w-full h-full object-cover bg-zinc-100 object-center rounded-2xl border-2 shadow-[0px_10px_30px_rgba(0,0,0,0.8)] border-red-300 overflow-hidden flex justify-center items-center"
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
                    className="w-4/6 h-4/6 bg-cover shadow-[0px_10px_30px_rgba(0,0,0,0.8)] rounded-2xl "
                    alt="w"
                    src="/Fyde_Illustration_Crypto_2-663x551.png"
                  ></motion.img>
                </motion.div>
              </div>
              <div className="flex flex-row justify-center mt-5 mr-[1vw] w-[25vw] rounded-xl border-1 border-red-300  items-center   mx-12 p-6">
                            {/* <div className="h-6 w-6  rounded-xl border-2 featuretext mr-9 border-zinc-800"></div> */}
                            {/* <motion.h2
                              whileHover={{
                                scale: 1.05,
                                textDecoration: "underline",
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 15,
                                },
                              }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 4, ease: "easeOut" }}
                              className="text-2xl p-2 text-zinc-900 text-bold gowun-dodum-regular flex justify-center items-center uppercase"
                              >
                              interactive 
                              audience
                            </motion.h2> */}
                            <motion.h2 ref={ref}
                               initial={{ opacity: 0, y: 50 }} // Start further down for a more visible animation
                               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                               transition={{ duration: 0.5, ease: "easeOut" }}
                               whileHover={{
                                 scale: 1.05,
                                 transition: { type: "spring", stiffness: 300, damping: 15 },
                               }}  className="text-xl p-2 hover:cursor-none gowun-dodum-regular flex justify-center items-center uppercase">
                                        
                                              interactive audience
                             </motion.h2>
              </div>
          </div>
          </div>

          <div className="p-10 mb-20 pb-8">
                      
            <div className="cards flex gap-7 pl-6 pr-16 w-full mb-10">
            <div className="flex flex-row justify-center mt-5 mr-[1vw] w-[30vw] rounded-xl border-1 border-red-300  items-center   mx-12 p-6">
                 
                  <motion.h2
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-xl p-2 hover:cursor-none gowun-dodum-regular flex justify-center  items-center uppercase"
                  >
                    PREMIUM  DESIGN
                  </motion.h2>
                  
                </div>
              <div
                onMouseEnter={() => setHovering3(true)}
                onMouseLeave={() => setHovering3(false)}
                className="cardcontainer w-2/3 relative h-[55vh]  "
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
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className="card w-full h-full object-cover object-center bg-zinc-800 rounded-2xl overflow-hidden"
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
                    className="w-full h-full bg-cover scale-80 rounded-2xl"
                    alt="w"
                    src="/Frame-3876-663x550.jpg"
                  ></motion.img>
                </motion.div>
                
              </div>
              <div
                onMouseEnter={() => setHovering4(true)}
                onMouseLeave={() => setHovering4(false)}
                className="cardcontainer relative w-2/3  h-[55vh] "
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
                        key={index}
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
                  className="card w-full h-full object-cover  object-center  overflow-hidden flex justify-center items-center border-2 rounded-2xl border-red-300"
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
    </div>
  );
};

export default Featured;
