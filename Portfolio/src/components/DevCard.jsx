import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers, FiServer } from "react-icons/fi";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter, SiSolana, SiSolidity, SiNextdotjs, SiMongodb, SiExpress, SiNodedotjs, SiReact } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
const HoverDevCards = () => {
 
 
  return (
    <div className="lg:px-16 px-12  ">
    <span className="text-transparent px-2  text-4xl font-extrabold pb-3    bg-clip-text bg-gradient-background">
            
              Services
            </span>
      <div className="grid gap-4 py-6 grid-cols-2 lg:grid-cols-4">
        <Card
          href="projects"
          title="Android"
          subtitle="Native Mobile Development"
          Icon={IoLogoAndroid}
        />
        <Card  
          href="projects" 
          title="Flutter" 
          subtitle="Cross-Platform Mobile" 
          Icon={SiFlutter} 
        />
        <Card  
          href="projects" 
          title="React Native" 
          subtitle="Mobile Development"  
          Icon={SiReact} 
        />
        <Card
          title="Next.js"
          subtitle="Full-Stack Web Development"
          href="projects"
          Icon={SiNextdotjs}
        />
        <Card
          title="MERN Stack"
          subtitle="Full-Stack Development"
          href="projects"
          Icon={SiMongodb}
        />
        <Card  
          href="projects" 
          title="Backend APIs" 
          subtitle="Server Development"  
          Icon={FiServer} 
        />
        <Card
          title="Solana"
          subtitle="Blockchain Development"
          href="projects"
          Icon={SiSolana}
        />
        <Card
          title="Smart Contracts"
          subtitle="Web3 Development"
          href="projects"
          Icon={SiSolidity}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <a
     onClick={(e) => {
          e.preventDefault(); // Prevent default anchor action
          scrollToSection(href);
        }}
      className="w-full p-4 bg-transparent rounded border-[1px] border-slate-700 relative overflow-hidden group "
    >
      <div className="absolute inset-0 bg-gradient-background translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-500 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-slate-500 transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-gray-400 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;