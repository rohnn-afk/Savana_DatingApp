import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { UIStore } from "../Store/UIStore";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0); 

  const { setUserPage } = UIStore();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ✅ Check if scrolled more than 50px to avoid flickering
      if (currentScrollY > lastScrollY.current) {
        setVisible(false); // Hides navbar when scrolling down
      } else if (currentScrollY < lastScrollY.current ) {
        setVisible(true); // Shows navbar when scrolling up
      }

      lastScrollY.current = currentScrollY; // ✅ Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-[990] rounded-b-2xl top-0 left-0 w-full px-20 py-6 flex items-center justify-between font-medium transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0 backdrop-blur-md" : "-translate-y-full"
      }`}
    >
      <Link to="home" smooth={true} duration={500} className="logo cursor-pointer">
        <h1 className="text-rose-400 subpixel-antialiased text-5xl prata-regular outfit-uniquifier tracking-widest">
          SAVANA
        </h1>
      </Link>
      <div className="links flex gap-[8vw] text-zinc-300 items-center justify-center">
        <Link to="services" smooth={true} duration={900} className="text-sm group relative cursor-pointer lexend-exa-uniquifier capitalize font-semibold">
          Services
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="features" smooth={true} duration={900} className="text-sm group relative cursor-pointer lexend-exa-uniquifier capitalize font-semibold">
          Insights
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="about" smooth={true} duration={900} className="text-sm group relative cursor-pointer lexend-exa-uniquifier capitalize font-semibold">
          About us
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="contactus" smooth={true} duration={900} className="text-sm group relative cursor-pointer lexend-exa-uniquifier capitalize font-semibold">
          Contact us
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div onClick={setUserPage} className="text-sm text-white  cursor-pointer relative group lexend-exa-uniquifier capitalize font-semibold">
          User Profile
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
