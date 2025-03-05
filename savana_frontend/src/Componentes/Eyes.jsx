import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Eyes = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const eyes = document.querySelectorAll(".eye");

      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const deltaX = mouseX - eyeX;
        const deltaY = mouseY - eyeY;
        const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        let angle = rotation - 180;
        eye.style.transform = `rotate(${angle}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-[88vw] h-[98vh] mt-[-6vh] shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] flex flex-col rounded-3xl overflow-hidden items-center bg-[url(/back.jpeg)]"
    >
      {/* Eyes container */}
      <div data-scroll data-scroll-speed="-.7" className="flex items-center flex-col justify-center">
        <div className="flex gap-20 mt-20 mb-30">
          {/* Left Eye */}
          <div className="w-[10vw] h-[10vw] flex items-center justify-center bg-white rounded-full shadow-lg">
            <div className="relative w-2/3 h-2/3 flex items-center justify-center bg-black rounded-full">
              <div className="eye absolute w-full h-full flex items-center justify-start">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="w-[10vw] h-[10vw] flex items-center justify-center bg-white rounded-full shadow-lg">
            <div className="relative w-2/3 h-2/3 flex items-center justify-center bg-black rounded-full">
              <div className="eye absolute w-full h-full flex items-center justify-start">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Container */}
        <motion.div ref={ref} className="newtext mt-[20vh] text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          {/* "Looking for someone?" Text */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="text-6xl gowun-dodum-regular font-bold"
          >
            Looking for someone?
          </motion.div>

          {/* "You just at right place" Text */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
            }}
            className="mt-10 text-6xl gowun-dodum-regular font-bold"
          >
            You just at the right place,{" "}
            <span className="text-yellow-900 subpixel-antialiased text-8xl prata-regular outfit-uniquifier tracking-widest">
              SAVANA
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Eyes;




