"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpDown, GraduationCap, Quote, Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import { UIStore } from "../../Store/UIStore";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const {checkoutSelectedPotentialMatch} = UIStore()

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };


  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    (<div className="w-full md:max-w-6xl mx-auto antialiased font-sans px-4 mt-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-[10vw]">


        <div>
          <div className="relative h-[60vh] w-[24vw]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial?.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 shadow-2xl rounded-3xl origin-bottom">
                  <img
                    src={testimonial?.userimage || "/bc9fd4bd-de9b-4555-976c-8360576c6708.jpg"}
                    alt={testimonial?.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col rounded-2xl shadow-2xl bg-blue-100 p-12 py-8">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>
            <h3 className="text-4xl pb-3 font-bold  text-black">
              {testimonials[active]?.name}
            </h3>
            <div className="p-1 py-2 flex flex-row gap-4">
            <p className="text-lg  text-gray-900 ">
              {testimonials[active]?.age}
            </p>
            <p>|</p>
            <p className="text-lg text-gray-900 ">
              {testimonials[active]?.gender}
            </p>
            <p>|</p>
            <p className="text-lg text-gray-900 ">
              {testimonials[active]?.location}
            </p>
            </div>
           
            <div className="flex flex-row items-center gap-4 pt-6">

                <ArrowUpDown size={18}  />
                  <p className="text-md text-gray-700 ">{testimonials[active]?.height}
                  </p>
              </div>
            
            <div className="flex flex-row items-center gap-4 py-2">

                <Users2 size={18}/> 
                 <p className="text-md text-gray-700 ">{testimonials[active]?.preference}
                 </p>
                </div>

             <div className="flex flex-row items-center gap-4 pb-4">

             <GraduationCap size={18}/> 
             <p className="text-md text-gray-700 ">{testimonials[active]?.education}
             </p>
             </div>
            
             <motion.div className="flex flex-row gap-3 items-start mt-4">
            <Quote className="" size={22}/>
             <p className="text-lg text-wrap break-words text-rose-900 min-h-[50px] max-h-[64px] max-w-[370px] truncate">
              {testimonials[active]?.bio}</p>

            </motion.div>

          </motion.div> 
          <div className="flex gap-4 items-center pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button">
              <IconArrowLeft
                className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button">
              <IconArrowRight
                className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
            <button onClick={()=>checkoutSelectedPotentialMatch(testimonials[active])} className="h-7 mx-8 rounded-2xl border  border-rose-500 text-rose-500  hover:bg-rose-500 hover:text-white pb-0.5  px-3">Checkout</button>
          </div>
        </div>

      </div>
    </div>
    )
  )
};
