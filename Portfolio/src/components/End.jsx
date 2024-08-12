import React from 'react'
import Bubble from './Bubble';


const End = () => {
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
      <div className="md:px-20  px-9 mb-16 ">
        <div className="lg:p-14 p-8 text text-center bg-gradient-background rounded  md:rounded-b-[100px] rounded-b-[80px]">
          <div className="lg:text-6xl md:text-4xl text-3xl font-light md:w-1/2 w-8/12 mx-auto md:my-5 my-2">
            {" "}
            <Bubble />{" "}
          </div>
  
          <button  onClick={(e) => {
          e.preventDefault(); // Prevent default anchor action
          scrollToSection('talk');
        }} className=" border bg-white font-medium text-black rounded-full py-2 px-10">
            Get in touch
          </button>
        </div>
      </div>
    );
  };
export default End