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
  const calculateDynamicValue = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 500) { // Example breakpoint for small screens
      return (
        <div className="customnav w-full  !fixed bottom-2 mx-auto p-1 px-4 rounded-full my-5 flex z-10">

         
      <nav className=" flex w-11/12  mx-auto  space-x-3 font-light justify-between ">
        <div
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor action
            scrollToSection("home");
          }}
          className="  text-center md:py-3 my-auto   cursor-pointer p-3 md:px-10 rounded-full md:text-lg text-base font-semibold"
          ref={navRefs.home}
          style={getLinkStyle("home")}
        >
         <svg width="20" height="21" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.57464 0.411651C8.27966 0.146616 7.8971 0 7.50054 0C7.10397 0 6.72142 0.146616 6.42643 0.411651L0.533571 5.70665C0.365829 5.85723 0.231638 6.0414 0.139713 6.24722C0.0477883 6.45303 0.000186696 6.67588 0 6.90129V14.4602C0 14.8865 0.169324 15.2952 0.470721 15.5966C0.772119 15.898 1.1809 16.0674 1.60714 16.0674H3.75C4.17624 16.0674 4.58502 15.898 4.88642 15.5966C5.18782 15.2952 5.35714 14.8865 5.35714 14.4602V10.1745C5.35714 10.0324 5.41358 9.89617 5.51405 9.7957C5.61452 9.69523 5.75078 9.63879 5.89286 9.63879H9.10714C9.24922 9.63879 9.38548 9.69523 9.48595 9.7957C9.58642 9.89617 9.64286 10.0324 9.64286 10.1745V14.4602C9.64286 14.8865 9.81218 15.2952 10.1136 15.5966C10.415 15.898 10.8238 16.0674 11.25 16.0674H13.3929C13.8191 16.0674 14.2279 15.898 14.5293 15.5966C14.8307 15.2952 15 14.8865 15 14.4602V6.90129C14.9999 6.67596 14.9525 6.45316 14.8608 6.24735C14.769 6.04154 14.635 5.85732 14.4675 5.70665L8.57464 0.411651Z" fill="white"/>
</svg>

        </div>
        <div
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor action
            scrollToSection("services");
          }}
          className="  text-center md:py-3 my-auto   cursor-pointer p-3 md:px-10 rounded-full md:text-lg text-base font-semibold"
          ref={navRefs.services}
          style={getLinkStyle("services")}
        >
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25 7.875C5.94619 7.875 6.61387 7.59844 7.10616 7.10616C7.59844 6.61387 7.875 5.94619 7.875 5.25M5.25 7.875C4.55381 7.875 3.88613 7.59844 3.39384 7.10616C2.90156 6.61387 2.625 5.94619 2.625 5.25M5.25 7.875V10.5M7.875 5.25C7.875 4.55381 7.59844 3.88613 7.10616 3.39384C6.61387 2.90156 5.94619 2.625 5.25 2.625M7.875 5.25H10.5M5.25 2.625C4.55381 2.625 3.88613 2.90156 3.39384 3.39384C2.90156 3.88613 2.625 4.55381 2.625 5.25M5.25 2.625V0M2.625 5.25H0M1.75 1.75L3.5 3.5M7 7L8.75 8.75M8.75 1.75L7 3.5M3.5 7L1.75 8.75M15.75 10.5C16.4462 10.5 17.1139 10.2234 17.6062 9.73116C18.0984 9.23887 18.375 8.57119 18.375 7.875M15.75 10.5C15.0538 10.5 14.3861 10.2234 13.8938 9.73116C13.4016 9.23887 13.125 8.57119 13.125 7.875M15.75 10.5V13.125M18.375 7.875C18.375 7.17881 18.0984 6.51113 17.6062 6.01884C17.1139 5.52656 16.4462 5.25 15.75 5.25M18.375 7.875H21M15.75 5.25C15.0538 5.25 14.3861 5.52656 13.8938 6.01884C13.4016 6.51113 13.125 7.17881 13.125 7.875M15.75 5.25V2.625M13.125 7.875H10.5M12.25 4.375L14 6.125M17.5 9.625L19.25 11.375M19.25 4.375L17.5 6.125M14 9.625L12.25 11.375M7.875 18.375C8.57119 18.375 9.23887 18.0984 9.73116 17.6062C10.2234 17.1139 10.5 16.4462 10.5 15.75M7.875 18.375C7.17881 18.375 6.51113 18.0984 6.01884 17.6062C5.52656 17.1139 5.25 16.4462 5.25 15.75M7.875 18.375V21M10.5 15.75C10.5 15.0538 10.2234 14.3861 9.73116 13.8938C9.23887 13.4016 8.57119 13.125 7.875 13.125M10.5 15.75H13.125M7.875 13.125C7.17881 13.125 6.51113 13.4016 6.01884 13.8938C5.52656 14.3861 5.25 15.0538 5.25 15.75M7.875 13.125V10.5M5.25 15.75H2.625M4.375 12.25L6.125 14M9.625 17.5L11.375 19.25M11.375 12.25L9.625 14M6.125 17.5L4.375 19.25" stroke="white" stroke-width="1.33333"/>
</svg>


        </div>
      
        <div
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor action
            scrollToSection("projects");
          }}
          className="  text-center md:py-3 my-auto   cursor-pointer p-3 md:px-10 rounded-full md:text-lg text-base font-semibold"
          ref={navRefs.projects}
          style={getLinkStyle("projects")}
        >
       <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9 4.42105H14.7V2.21053C14.7 0.983684 13.7655 0 12.6 0H8.4C7.2345 0 6.3 0.983684 6.3 2.21053V4.42105H2.1C0.9345 4.42105 0.0105 5.40474 0.0105 6.63158L0 18.7895C0 20.0163 0.9345 21 2.1 21H18.9C20.0655 21 21 20.0163 21 18.7895V6.63158C21 5.40474 20.0655 4.42105 18.9 4.42105ZM12.6 4.42105H8.4V2.21053H12.6V4.42105Z" fill="white"/>
</svg>


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
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2190_13)">
<path d="M4.66666 11.0833V6.41663H2.91666C2.45253 6.41663 2.00741 6.601 1.67922 6.92919C1.35103 7.25738 1.16666 7.7025 1.16666 8.16663V18.6666C1.16752 18.775 1.19855 18.8809 1.25624 18.9726C1.31394 19.0643 1.39603 19.1381 1.49332 19.1858C1.58705 19.2284 1.69039 19.2455 1.79285 19.2352C1.89531 19.225 1.99322 19.1878 2.07666 19.1275L5.08082 16.9166H12.9208C13.1419 16.9232 13.362 16.8842 13.5674 16.8023C13.7729 16.7203 13.9593 16.597 14.1151 16.4401C14.271 16.2831 14.3929 16.0958 14.4735 15.8898C14.554 15.6838 14.5914 15.4635 14.5833 15.2425V14.5833H8.16666C7.2384 14.5833 6.34816 14.2145 5.69178 13.5582C5.03541 12.9018 4.66666 12.0116 4.66666 11.0833Z" fill="white"/>
<path d="M18.0833 2.33337H8.16666C7.70253 2.33337 7.25741 2.51775 6.92922 2.84594C6.60103 3.17413 6.41666 3.61925 6.41666 4.08337V11.0834C6.41666 11.5475 6.60103 11.9926 6.92922 12.3208C7.25741 12.649 7.70253 12.8334 8.16666 12.8334H16.0708L18.8592 14.9975C18.942 15.0588 19.0397 15.097 19.1422 15.1083C19.2446 15.1196 19.3483 15.1035 19.4425 15.0617C19.5418 15.0144 19.6256 14.9401 19.6845 14.8472C19.7433 14.7543 19.7747 14.6467 19.775 14.5367V4.08337C19.7752 3.62918 19.5989 3.19267 19.2832 2.86611C18.9675 2.53955 18.5373 2.34851 18.0833 2.33337Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2190_13">
<rect width="21" height="21" fill="white"/>
</clipPath>
</defs>
</svg>

            </span>
            <span className="block absolute inset-0 rounded-full p-[2px] linear-overlay" />
          </motion.button>
        </div>
      </nav>
      </div>
      )
    } else{
      return (
        <div className="customnav  sticky top-5 mx-auto p-1 rounded-full my-5 md:flex z-10">
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
          className=" py-2 md:py-3 my-auto  cursor-pointer px-4 md:px-10 rounded-full md:text-lg text-base font-semibold"
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
      )
    }
  };
  return (
    <>
    {calculateDynamicValue()}
    </>
  
    
  );
};

export default TopNav;
