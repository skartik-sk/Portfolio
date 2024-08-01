import React from 'react'
import Accordion from './Accordian';


const FaQs = () => {
    return (
      <div className="px-14 flex lg:flex-row flex-col  py-5 lg:space-y-0 space-y-6 ">
        <div className="flex lg:w-1/3 md:w-8/12 mx-auto  flex-col space-y-4">
          <div className="md:text-4xl text-2xl lg:block flex space-x-2 font-black">
            {" "}
            <div>Frequently Asked  <span className="text-transparent  bg-clip-text bg-gradient-background">
              Questions{" "}
            </span></div>
           
          </div>
          <div className="text-sm text-gray-300 pt-0 lg:pt-3">
            Answers to the burning questions in your mind.
          </div>
  
          <div className="py-3 lg:block hidden">
            <button className=" w-7/12 bg-gradient-background font-bold rounded-full py-3 px-6 lg:px-12">
              Contact me
            </button>
          </div>
        </div>
  
        <div className="flex w-10/12 lg:w-6/12 mx-auto  flex-col space-y-6 ">
          <Accordion />
        </div>
      </div>
    );
  };
  

export default FaQs