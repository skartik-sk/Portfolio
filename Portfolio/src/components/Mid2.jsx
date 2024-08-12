import React from 'react'


const Mid2=()=>{
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return ( <div className="lg:px-16 px-12 flex md:flex-row flex-col   justify-between w-full  align-bottom items-start md:space-y-0 space-y-4  my-6">
      <div className="lg:text-4xl text-3xl    text font-black lg:w-5/12 md:w-5/12  ">
        Code that solves  <span>&#8213;</span>problem,{" "}
        <span className=" " >
         one{" "}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-background">
          product at a time{" "}
        </span>
      </div>
  
      <div className=" flex space-x-3">
     
        <button onClick={(e) => {
            e.preventDefault(); // Prevent default anchor action
            scrollToSection("talk");
          }} className=" bg-gradient-background font-semibold rounded-full py-2 px-4 md:px-10">
          Get in touch
        </button>
        
        {/* <button className=" border border-white font-semibold rounded-full py-2 px-10">
          View my work
        </button> */}
      </div>
    </div>)
  }
  
export default Mid2