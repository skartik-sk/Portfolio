import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const TopNav = () => {
//   const { scrollY } = useScroll();

// useMotionValueEvent (scrollY,
//   "change",
//   (latest) => {
//     const prev = scrollY.getPrevious();
//     if(latest > prev && latest){
//       sethidden(true)}
//       else {
//         sethidden(false)
//       }
//   }) ;
  const {hidden , sethidden} = useState(false)
  return (
    <div
   
    
    className=" sticky top-5 mx-auto p-1   bg-black  rounded-full my-5 flex z-50   ">

      <div className="  flex w-full space-x-3 font-light justify-between">
        <div className="py-3  px-10 bg-black rounded-full text-lg font-semibold ">
        Home
        </div>
        <div className="py-3  px-10 bg-black rounded-full text-lg font-semibold">
          Services
        </div>
        <div className="py-3  px-10 bg-black rounded-full text-lg font-semibold">
          Projects
        </div>
        <div>

        <img
          className="w-12 h-12 mx-6 "
          src="https://raw.githubusercontent.com/SingupalliKartik/Portfolio/cbaf1ea3de80bb33ef8a4aa8169cf9a9698ac0d1/Portfolio/public/image2.png"
          alt=""
          />
          </div>
        <div className="py-3  px-10 bg-black rounded-full text-lg font-semibold">
          About
        </div>
        <div className="py-3  px-10 bg-black rounded-full text-lg font-semibold">
          Blog
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
            className="px-6 py-3 rounded-full relative radial-gradient"
          >
            <span className="text-neutral-100 text-lg font-semibold  tracking-wide  h-full w-full block relative linear-mask">
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
