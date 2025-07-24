// Top.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Assuming `split` is a custom function you've defined elsewhere
import  split  from '../utils/splitText'; // Update the path according to your project structure
const text = " creative developer with design superpower based in India.";

const Top = () => {
    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const charVar = {
        hidden: { opacity: 0 },
        revel: {
            opacity: 1,
        },
    };

    const heading = split(text);
    console.log(heading);

    return (
        <motion.div className="mb-10 flex flex-col align-middle space-y-5 text-center justify-center items-center ">
            <img
                className="lg:h-48 h-36 w-36 lg:w-48 rounded-full"
                src={"photo.webp"}
                alt=""
            />
            <motion.div
                initial="hidden"
                whileInView="revel"
                transition={{ staggerChildren: 0.015 }}
                className="lg:text-4xl text-3xl text font-black"
            >
                <span className="text-transparent bg-clip-text bg-gradient-background">
                    Hello, I'm Kartik,{" "}
                </span>
                {heading.map((char, index) => (
                    <motion.span
                        key={index}
                        transition={{ duration: 0.5 }}
                        variants={charVar}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
            <div className="text-md  text-gray-400 lg:px-5 px-1 w-2/3 mx-auto">
                 Expertise lies in App and web development, with great taste UI/UX{" "}
            </div>
            <div className="flex lg:flex-row  flex-col space-y-2 lg:space-y-0 lg:space-x-3">
               <a href="https://resume.skartik.xyz"><button className="bg-gradient-background font-semibold rounded-full py-2 px-10">
                 My  Resume
                </button></a> 
                <button onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor action
                    scrollToSection('projects');
                }} className="border border-white font-semibold rounded-full py-2 px-10">
                    View my work
                </button>
            </div>
        </motion.div>
    );
};

export default Top;