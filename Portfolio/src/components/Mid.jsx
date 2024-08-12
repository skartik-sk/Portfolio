// Corrected necessary import for the function
import React from "react";
// Assuming EducationWork is a separate component, import it

const Mid = () => {
  return (
    <div className="lg:px-14 md:px-9 px-3 w-full">
      <div className="lg:w-1/2 md:w-7/12 w-11/12 mx-auto flex justify-around">
        <div className="items-center justify-center flex flex-col">
          <div className="text-transparent text-4xl font-black bg-clip-text bg-gradient-background">
            2+
          </div>
          <div className="text-gray-300">Years of experience</div>
        </div>
        <div className="w-1 h-full text-6xl text-gray-600"> &#124; </div>
        <div className="items-center justify-center flex flex-col">
          <div className="text-transparent text-4xl font-black bg-clip-text bg-gradient-background">
            5+
          </div>
          <div className="text-gray-300">Successful projects</div>
        </div>
        <div className="w-1 h-full text-6xl text-gray-600 hidden md:block"> &#124; </div>
        <div className="items-center justify-center md:flex hidden flex-col">
          <div className="text-transparent text-4xl font-black bg-clip-text bg-gradient-background">
            3+
          </div>
          <div className="text-gray-300">Customers</div>
        </div>
      </div>
      <EducationWork />
    </div>
  );
};
const EducationWork = () => {
  return (
    <div className="flex md:flex-row flex-col space-y-7 md:space-y-0 justify-around my-14">
      <div className=" lg:w-1/3 md:w-5/12 w-9/12 mx-auto">
        <div>
          {" "}
          <span className="text-transparent md:text-4xl text-3xl font-semibold bg-clip-text bg-gradient-background">
            Work Experience{" "}
          </span>
        </div>
        <div>
          
          
          <div className=" border-b-2 border-gray-600 py-4 my-2">
            <div className=" text-xl md:text-2xl font-medium">App Development Lead </div>
            <div className=" flex justify-between">
              <div className="text-gray-400 text-sm"><a href="https://www.linkedin.com/company/thedevoic/mycompany/">Devoic</a></div>
              <div className="text-gray-400 text-sm">* 2023-Present</div>
            </div>
          </div>
          <div className=" border-b-2 border-gray-600 py-4 my-2">
            <div className=" text-xl md:text-2xl font-medium">Startup Support Team
 </div>
            <div className=" flex justify-between">
              <div className="text-gray-400 text-sm"><a href="https://www.linkedin.com/company/ecellrgpv/mycompany/">E-Cell RGPV</a></div>
              <div className="text-gray-400 text-sm">* 2023-Present</div>
            </div>
          </div>
          <div className=" border-b-2 border-gray-600 py-4 my-2">
            <div className=" text-xl md:text-2xl font-medium">Website Designer </div>
            <div className=" flex justify-between">
              <div className="text-gray-400 text-sm"> <a href="https://www.linkedin.com/company/mech-buddy-com/posts/?feedView=all">Mech Buddy</a></div>
              <div className="text-gray-400 text-sm">* 2023-2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-5/12  w-9/12 mx-auto">
        <div>
          {" "}
          <span className="text-transparent md:text-4xl text-3xl font-semibold bg-clip-text bg-gradient-background">
            Education{" "}
          </span>
        </div>
        <div>
          <div className=" border-b-2 border-gray-600 py-4 my-2">
            <div className=" text-xl md:text-2xl font-medium">Btech- CSE </div>
            <div className=" flex justify-between">
              <div className="text-gray-400 text-sm">UIT RGPV</div>
              <div className="text-gray-400 text-sm">* 2022-2026</div>
            </div>
          </div>
          <div className=" border-b-2 border-gray-600 py-4 my-2">
            <div className=" text-xl md:text-2xl font-medium">Senior Secondary </div>
            <div className=" flex justify-between">
              <div className="text-gray-400 text-sm">Graphite School</div>
              <div className="text-gray-400 text-sm">* 2021-2022</div>
            </div>
          </div>
          <div className=" border-b-2 border-gray-600 py-4 my-2">
            <div className=" text-xl md:text-2xl font-medium">Secondary </div>
            <div className=" flex justify-between">
              <div className="text-gray-400 text-sm">Graphite School</div>
              <div className="text-gray-400 text-sm">* 2019-2020</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
