import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MovingLine2 = ({ shadow }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }} // Start below and invisible
      animate={isInView ? { y: 0, opacity: 1 } : {}} // Move up and appear when in view
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className={`h-3 w-full z-[999]  bg-gradient-to-r from-white via-[#62FBFD] to-[#62FBFD] shadow-${shadow}`}
    />
  );
};

export default MovingLine2;

