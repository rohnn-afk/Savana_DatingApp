import { motion } from "framer-motion";

const MovingLine2 = ({ color, index , shadow}) => {
  return (
    <motion.div
      initial={{ width: "0%", right: 0, opacity: 0.5 }} // Start with low opacity
      animate={{
        width: "150%",
        opacity: [0.5, 1, 0.5], // Fades in and out smoothly
      }} 
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: 0,
      }}
      className={`h-[3px] z-[${index}] absolute right-0 bg-gradient-to-r from-${color} via-${color}-600 to-${color}-400 shadow-${shadow}`}
    />
  );
};

export default MovingLine2;
