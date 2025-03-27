import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UIStore } from "../Store/UIStore";
import { MatchStore } from "../Store/MatchStore";
import { ArrowUpDown, GraduationCap, Heart, Quote, Users2 } from 'lucide-react';

export default function MatchProfileData() {
  const [isFirstVisible, setIsFirstVisible] = useState(true);
  const { setShowMatchDetailsCard, MatchDetailsCardImages, getMatchDetailsCardImages } = UIStore();
  const { selecteduser, unMatch } = MatchStore();

  useEffect(() => {
    getMatchDetailsCardImages(selecteduser.userID);
  }, [selecteduser, getMatchDetailsCardImages]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] backdrop-blur-lg flex items-center justify-center">
      {/* First Card (Centered) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: isFirstVisible ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[88vw] min-h-[85vh] p-6 md:p-16 bg-[#ff4da0] flex flex-col md:flex-row rounded-lg shadow-lg gap-6 items-center">
          {/* Image Section */}
          {!isMobile && (
            <div className="flex flex-col items-center justify-center">
              <div className="overflow-hidden mx-2 rounded-xl">
                <div className="carousel rounded-xl w-[60vw] md:w-[30vw] lg:w-[26vw] h-[50vh] md:h-[60vh] lg:h-[70vh]">
                  {MatchDetailsCardImages && Object.values(MatchDetailsCardImages)
                    .filter(value => typeof value === 'object' && value !== null && value.image)
                    .map((image, index) => (
                      <div key={index} className="carousel-item w-full">
                        <img src={image.image} className="w-full h-full object-cover rounded-xl" alt="User" />
                      </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Details Section */}
          <div className="w-full md:w-2/3 px-4 md:px-6">
            <div className="w-full flex justify-between items-center mb-4">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-none text-black">
                {selecteduser?.name}
              </h1>
              <button onClick={setShowMatchDetailsCard} className="text-2xl md:text-3xl text-black hover:text-green-500">×</button>
            </div>

            <div className="py-2 flex flex-wrap gap-2 md:gap-3 text-black text-sm md:text-lg">
              <p>{selecteduser?.age}</p>
              <p>|</p>
              <p>{selecteduser?.gender}</p>
              <p>|</p>
              <p>{selecteduser?.location}</p>
              <p>|</p>
              <p>Straight</p>
            </div>

            <div className="flex items-center gap-2 md:gap-4 text-black text-xs md:text-sm mt-3 md:mt-4">
              <ArrowUpDown size={16} />
              <p>{selecteduser?.height}</p>
            </div>

            <div className="flex items-center gap-2 md:gap-4 text-black text-xs md:text-sm mt-3 md:mt-4">
              <Users2 size={16} />
              <p>{selecteduser?.preference}</p>
            </div>

            <div className="flex items-center gap-2 md:gap-4 text-black text-xs md:text-sm mt-3 md:mt-4">
              <GraduationCap size={16} />
              <p>{selecteduser?.education}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-black text-sm md:text-md my-3 md:my-4 py-3 md:py-4">
              <Heart size={16} />
              {selecteduser?.interests && Object.keys(selecteduser.interests).map((key, index) => (
                <span key={index} className="bg-white/20 px-2 md:px-3 py-1 rounded-lg">{key}</span>
              ))}
            </div>

            <motion.div className="flex gap-2 md:gap-3 items-start py-4 md:py-5 text-black">
              <Quote size={16} />
              <p className="text-sm md:text-lg max-w-md truncate">{selecteduser?.bio}</p>
            </motion.div>

            <div className="mt-6 md:mt-10 flex w-full justify-between">
              <div className="flex gap-3">
              <button onClick={() => setIsFirstVisible(false)} className="btn btn-primary hover:text-green-500 text-xs md:text-sm">More</button>
              <button onClick={() => { unMatch(selecteduser._id); setShowMatchDetailsCard(); }} className="btn btn-danger text-xs md:text-sm hover:text-red-500 font-semibold">Unmatch</button>
              </div>
              <button className="hover:text-white text-black ml-4 md:ml-8 text-sm md:text-lg font-semibold">Report</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Second Card (Centered) */}
      <motion.div
  initial={{ x: "100%" }}
  animate={{ x: isFirstVisible ? "100%" : "0%" }}
  transition={{ type: "spring", stiffness: 100 }}
  className="flex w-full h-full px-4 absolute top-0 justify-center items-center"
>
  <div className="w-[88vw] h-[85vh] bg-[#8F87F1] flex justify-center items-center rounded-lg shadow-lg">
    <button
      onClick={() => setIsFirstVisible(true)}
      className="px-4 py-2 bg-white text-black rounded"
    >
      Switch to First
    </button>
  </div>
</motion.div>
    </div>
  );
}


        