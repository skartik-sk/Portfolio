import React, { useRef } from "react";
import Bage from "../components/Bage";

import HoverDevCards from "../components/DevCard";

import { CardList } from "../CardList";

import Top from "../components/Top"; // Adjust the path according to your project structure
import Trusted from "../components/Trusted"; // Adjust the path according to your project structure
import Mid from "../components/Mid"; // Adjust the path according to your project structure
import Mid2 from "../components/Mid2"; // Adjust the path according to your project structure
import GetInTouch from "../components/GetInTouch";
import Testimonials from "../components/Testimonials";
import End from "../components/End";
import End2 from "../components/End2";
import FaQs from "../components/Faqs";

const Home = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const talkRef = useRef(null);
  const end = useRef(null);
  return (
    <>
      <div id="home" className="" ref={homeRef}>
        <p className="md:px-40">
        <div className="lg:w-1/2 md:7/12 w-9/12 mx-auto px-2 lg:px-14 md:px-4">
          <Top />
        </div>
        <Trusted />
        </p>
        <>
          <Bage />
        </>
      </div>
      <p className="md:px-40 ">
      <div id="services" ref={servicesRef}>
        <Mid />
        <HoverDevCards />
        <Mid2 />
      </div>
      <div id="projects" ref={projectsRef}>
        <CardList />
      </div>
      <div id="talk" ref={talkRef}>
        {" "}
        <GetInTouch />
      </div>

      {/* <HoverImageLinks/> */}

      {/* <Horizontal/> */}

      <div id="end" ref={talkRef}>
        {" "}
        <Testimonials />
        {/* <End2 /> */}
        {/* <Banner /> */}
        <FaQs />
        <End />{" "}
      </div>
      </p>
    </>
  );
};

export default Home;
