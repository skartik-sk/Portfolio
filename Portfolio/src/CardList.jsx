import * as React from "react";
import { Card } from "./Card";
// import { CardData } from "./types";
import {  useNavigate, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { motion, useTransform, useScroll } from "framer-motion";


const List = () => {
    const params = useParams();
    const navigate = useNavigate();
    const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${cardData.length *28 }%`]);

    return (
      <section ref={targetRef} className=" h-[200vh] bg-neutral-900">
      <div className="sticky top-0 flex h-[90vh] items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4 ">
        {cardData.map((card,index) => (
          <Card
            key={card.id}
            isSelected={params.id === card.id}
            navigate={navigate}
            {...card}
            xPos={index }
          />
        ))}
        </motion.div>
      </div>
    </section>
      
    );
  };

export const CardList = () => (
    <Router>
    <Routes>
        <Route path="/:id" element={<List />} />
        <Route path="/" element={<List />} />
    </Routes>
  </Router>
);

const cardData= [
  // Photo by ivan Torres on Unsplash
  {
    id: "c",
    category: "Pizza",
    title: "5 Food Apps Delivering the Best of Your City",
    pointOfInterest: 80,
    backgroundColor: "#814A0E"
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "How to",
    title: "Arrange Your Apple Devices for the Gram",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Pedal Power",
    title: "Map Apps for the Superior Mode of Transport",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    category: "Holidays",
    title: "Our Pick of Apps to Help You Escape From Apps",
    pointOfInterest: 200,
    backgroundColor: "#8F986D"
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: "d",
    category: "Photography",
    title: "The Latest Ultra-Specific Photography Editing Apps",
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    category: "They're all the same",
    title: "100 Cupcake Apps for the Cupcake Connoisseur",
    pointOfInterest: 60,
    backgroundColor: "#282F49"
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: "e",
    category: "Cats",
    title: "Yes, They Are Sociopaths",
    pointOfInterest: 200,
    backgroundColor: "#AC7441"
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: "b",
    category: "Holidays",
    title: "Seriously the Only Escape is the Stratosphere",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  }
];
