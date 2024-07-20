import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TopNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const navRefs = {
    home: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    talk: useRef(null),
  };

  const handleScroll = () => {
    // Example: Determine the active section based on scroll position
    const sections = ["home", "services", "projects", "talk"];
    const currentScrollPosition = window.scrollY;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          currentScrollPosition >= sectionTop &&
          currentScrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkStyle = (section) => {
    return activeSection === section
      ? {
          background:
            "linear-gradient(90deg, #b16cea 14.06%, #ff5e69 44.79%, #ff8a56 71.88%, #ffa84b)",
        }
      : { opacity: "0.5" };
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="customnav sticky top-5 mx-auto p-1 rounded-full my-5 flex z-10">
      <div className="flex w-full space-x-0 md:space-x-3 font-light justify-between">
        <div
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor action
            scrollToSection("home");
          }}
          className="  text-center md:py-3 my-auto py-2  cursor-pointer px-4 md:px-10 rounded-full md:text-lg text-base font-semibold"
          ref={navRefs.home}
          style={getLinkStyle("home")}
        >
          Home
        </div>
        <div
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor action
            scrollToSection("services");
          }}
          className=" py-2 md:py-3 my-auto py-2 cursor-pointer px-4 md:px-10 rounded-full md:text-lg text-base font-semibold"
          ref={navRefs.services}
          style={getLinkStyle("services")}
        >
          Services
        </div>
        <div>
          <img
            className="md:w-12 w-10 h-10 md:h-12 mx-6"
            src="https://raw.githubusercontent.com/SingupalliKartik/Portfolio/cbaf1ea3de80bb33ef8a4aa8169cf9a9698ac0d1/Portfolio/public/image2.png"
            alt=""
          />
        </div>
        <div
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor action
            scrollToSection("projects");
          }}
          className=" py-2 md:py-3 my-auto py-2 cursor-pointer px-4 md:px-10 rounded-full md:text-lg text-base font-semibold"
          ref={navRefs.projects}
          style={getLinkStyle("projects")}
        >
          Projects
        </div>
        <div>
          <motion.button
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor action
              scrollToSection("talk");
            }}
            className="md:px-6 px-3 py-3 cursor-pointer rounded-full relative radial-gradient"
            ref={navRefs.talk}
            style={getLinkStyle("talk")}
          >
            <span className="text-neutral-100 md:text-lg text-base font-semibold tracking-wide h-full w-full block relative linear-mask">
              Let's Talk
            </span>
            <span className="block absolute inset-0 rounded-full p-[2px] linear-overlay" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
