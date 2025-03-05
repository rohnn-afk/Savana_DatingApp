import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react"; // Info Icon

const InfoTooltip = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center z-[999]">
      {/* Info Icon */}
      <div
        className="abel cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Info size={24} className="label-text" />
      </div>

      {/* Tooltip Box */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-8 top-1 bg-white backdrop-blur-3xl text-black text-md p-3 px-4  rounded-xl w-80 shadow-[0_10px_30px_rgba(0,0,0,0.6)] max-w-[600px] break-words"
        >
          {text}
        </motion.div>
      )}
    </div>
  );
};

export default InfoTooltip;
