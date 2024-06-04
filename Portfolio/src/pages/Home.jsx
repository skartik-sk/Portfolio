import React from "react";
import Bage from "../components/Bage";
const Top = () => {
  return (
    <div className="mb-10 flex flex-col align-middle space-y-3 text-center justify-center items-center ">
      <img
        className="h-48 w-48 rounded-full"
        src="https://raw.githubusercontent.com/SingupalliKartik/Portfolio/0201b8af1e6e9ddc2ce78d7b5fda12e6c3108f6b/Portfolio/src/assets/photo.jpeg"
        alt=""
      />
      <div className="text-4xl text font-black">
        <span className="text-transparent bg-clip-text bg-gradient-background">
          Hello, I'm Kartik,{" "}
        </span>
        creative designer and developer based in India.
      </div>
      <div className="text-md  text-gray-400 px-5 w-2/3 mx-auto">
        My experties lies in App and web development, with knowledge of Ui/Ux{" "}
      </div>
      <div className=" flex space-x-3">
        <button className=" bg-gradient-background font-semibold rounded-full py-2 px-10">
          Get in touch
        </button>
        <button className=" border border-white font-semibold rounded-full py-2 px-10">
          View my work
        </button>
      </div>
    </div>
  );
};
const Trusted = () => {
  return (
    <div className="px-14 flex justify-between my-6 mb-12">
      <div className="text-xl">Worked with</div>
      <div className="flex space-x-3 ">
        <img
          className="h-12 rounded-full  saturate-0 hover:saturate-100 transition duration-300 ease-in-out"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
    </div>
  );
};
const Mid = () => {
  return (
    <div className="px-14 w-full">
        <div className="w-1/2 mx-auto flex  justify-around">
        <div className=" items-center justify-center flex flex-col">
            <div className=" text-transparent text-4xl font-black bg-clip-text bg-gradient-background">2+</div>
        <div className=" text-gray-300">Years of experience</div>
        </div>
        <div className="w-1 h-full text-6xl text-gray-600"> &#124; </div>
        <div className=" items-center justify-center flex flex-col">
            <div className=" text-transparent text-4xl font-black bg-clip-text bg-gradient-background">5+</div>
        <div className=" text-gray-300">successfull projects</div>
        </div>
        <div className="w-1 h-full text-6xl text-gray-600"> &#124; </div>
        
        <div className=" items-center justify-center flex flex-col">
            <div className=" text-transparent text-4xl font-black bg-clip-text bg-gradient-background">3+</div>
        <div className=" text-gray-300">Customers</div>
        </div>

      </div>
      <EducationWork/>

      <div className="flex justify-between w-full  align-bottom items-end px-5 my-6">
        <div className="text-4xl    text font-black w-1/3 ">
          Code that solves <span className="px-12"><span>&#8213;</span>problem, one</span> {" "}
          <span className="text-transparent bg-clip-text bg-gradient-background">
            product at a time{" "}
          </span>
        </div>

        
          <div className=" flex space-x-3">
            <button className=" bg-gradient-background font-semibold rounded-full py-2 px-10">
              Get in touch
            </button>
            <button className=" border border-white font-semibold rounded-full py-2 px-10">
              View my work
            </button>
          </div>
        
      </div>

      
    </div>
  );
};
const EducationWork=()=>{
    return(
        <div className="flex justify-around my-14">
            <div className=" w-1/3 mx-auto">
                <div> <span className="text-transparent text-4xl font-semibold bg-clip-text bg-gradient-background">
            Education{" "}
          </span></div>
          <div>
<div className=" border-b-2 border-gray-600 py-4 my-2">
    <div className="text-2xl font-medium">UIT RGPV </div>
    <div className=" flex justify-between">
<div className="text-gray-400 text-sm">Btech- CSE</div>
<div className="text-gray-400 text-sm">* 2022-2026</div>
    </div>

</div>
<div className=" border-b-2 border-gray-600 py-4 my-2">
    <div className="text-2xl font-medium">UIT RGPV </div>
    <div className=" flex justify-between">
<div className="text-gray-400 text-sm">Btech- CSE</div>
<div className="text-gray-400 text-sm">* 2022-2026</div>
    </div>

</div>
<div className=" border-b-2 border-gray-600 py-4 my-2">
    <div className="text-2xl font-medium">UIT RGPV </div>
    <div className=" flex justify-between">
<div className="text-gray-400 text-sm">Btech- CSE</div>
<div className="text-gray-400 text-sm">* 2022-2026</div>
    </div>

</div>


          </div>
            </div>
            <div className=" w-1/3 mx-auto">
                <div> <span className="text-transparent text-4xl font-semibold bg-clip-text bg-gradient-background">
            Work Experience{" "}
          </span></div>
          <div>
<div className=" border-b-2 border-gray-600 py-4 my-2">
    <div className="text-2xl font-medium">UIT RGPV </div>
    <div className=" flex justify-between">
<div className="text-gray-400 text-sm">Btech- CSE</div>
<div className="text-gray-400 text-sm">* 2022-2026</div>
    </div>

</div>
<div className=" border-b-2 border-gray-600 py-4 my-2">
    <div className="text-2xl font-medium">UIT RGPV </div>
    <div className=" flex justify-between">
<div className="text-gray-400 text-sm">Btech- CSE</div>
<div className="text-gray-400 text-sm">* 2022-2026</div>
    </div>

</div>
<div className=" border-b-2 border-gray-600 py-4 my-2">
    <div className="text-2xl font-medium">UIT RGPV </div>
    <div className=" flex justify-between">
<div className="text-gray-400 text-sm">Btech- CSE</div>
<div className="text-gray-400 text-sm">* 2022-2026</div>
    </div>

</div>


          </div>
            </div>
        </div>
    )
}
const Home = () => {
  return (
    <>
      <div className="w-1/2 mx-auto px-14">
        <Top />
      </div>
      <Trusted />

      <Bage />
      <Mid />
     
    </>
  );
};

export default Home;
