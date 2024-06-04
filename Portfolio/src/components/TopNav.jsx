import React from 'react'
import { motion } from "framer-motion";
const TopNav = () => {
  return (
    <div className='w-full h-14 py-3'>
        <div className='flex justify-between  align-middle items-center'>
            <div className='flex space-x-8 items-center'>
                <div>
                    <img className='w-12 h-12' src="https://raw.githubusercontent.com/SingupalliKartik/Portfolio/main/Portfolio/src/assets/logo.png"alt="" />
                </div>

                <div className=' flex space-x-3 font-light'>
                    <div>Home</div>
                    <div>Services</div>
                    <div>Projects</div>
                    <div>About</div>
                    <div>Blog</div>

                </div>

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
      className="px-6 py-2 rounded-full relative radial-gradient"
    >
      <span className="text-neutral-100 text-lg  tracking-wide font-light h-full w-full block relative linear-mask">
        Let's Talk
      </span>
      <span className="block absolute inset-0 rounded-full p-[2px] linear-overlay" />
    </motion.button>
            </div>
        </div>
        
    </div>
  )
}

export default TopNav