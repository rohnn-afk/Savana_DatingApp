"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MatchStore } from "../../Store/MatchStore";
import { UIStore } from "../../Store/UIStore";

export const ParallaxScroll = () => {


    const {potentialMatch} = MatchStore()
    const {setWallProfile} =UIStore()
  


  const scrollRef = useRef(null); // Reference for scrolling div
  const scrollY = useMotionValue(0); // Tracks manual scroll position
  const [scrollHeight, setScrollHeight] = useState(1); // Prevent division by zero

  // ✅ Update scroll position dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        setScrollHeight(scrollHeight - clientHeight); // Max scroll range
        scrollY.set(scrollTop);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollY]);

  // ✅ Gesture-based scrolling
  useEffect(() => {
    const handleWheelScroll = (event) => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += event.deltaY; // Enable smooth gesture scrolling
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  // ✅ Parallax effect using manual scroll tracking
  const scrollProgress = useTransform(scrollY, [0, scrollHeight], [0, 1]);
  const translateFirst = useTransform(scrollProgress, [0, 1], [0, -150]);
  const translateSecond = useTransform(scrollProgress, [0, 1], [0, 150]);
  const translateThird = useTransform(scrollProgress, [0, 1], [0, -150]);



  const third = Math.ceil(potentialMatch?.length / 3)
  const firstPart = potentialMatch?.slice(0, third);
  const secondPart = potentialMatch?.slice(third, 2 * third);
  const thirdPart = potentialMatch?.slice(2 * third);


  return (
    <div ref={scrollRef} className="h-screen w-full overflow-y-auto pb-60 scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 py-10 px-10 max-w-7xl mx-auto">

        
       <div className="grid gap-10 ">
          {potentialMatch && firstPart.map((el, idx) => (
            <motion.button onClick={()=>setWallProfile(el)} style={{ y: translateFirst }} key={"grid-1" + idx}>
              <img src={el?.userimage} className="h-96 w-full object-cover shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-lg" alt="" />
            </motion.button>
          ))}
        </div>

        <div className="grid gap-10">
          {potentialMatch &&  secondPart.map((el, idx) => (
               <motion.button onClick={()=>setWallProfile(el)}  style={{ y: translateSecond }} key={"grid-2" + idx}>
                 <img src={el?.userimage} className="h-96 w-full object-cover shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-lg" alt="" />
               </motion.button>
          ))}
        </div>

        <div className="grid gap-10">
          {potentialMatch && thirdPart.map((el, idx) => (
            <motion.button onClick={()=>setWallProfile(el)} style={{ y: translateThird }} key={"grid-3" + idx}>
              <img src={el?.userimage} className="h-96 w-full object-cover shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-lg" alt="" />
            </motion.button>
          ))}
        </div>

      </div>
    </div>
  );
};
