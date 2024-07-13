import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Link } from 'react-router-dom';
import { Card } from './Card';
import { motion, useTransform, useScroll } from "framer-motion";

// Sample card data
const cardData= [
  {
    id: 'c',
    category: 'Pizza',
    title: '5 Food Apps Delivering the Best of Your City',
    pointOfInterest: 80,
    backgroundColor: '#814A0E'
  },
  {
    id: 'f',
    category: 'How to',
    title: 'Arrange Your Apple Devices for the Gram',
    pointOfInterest: 120,
    backgroundColor: '#959684'
  },
  {
    id: 'a',
    category: 'Pedal Power',
    title: 'Map Apps for the Superior Mode of Transport',
    pointOfInterest: 260,
    backgroundColor: '#5DBCD2'
  },
  {
    id: 'g',
    category: 'Holidays',
    title: 'Our Pick of Apps to Help You Escape From Apps',
    pointOfInterest: 200,
    backgroundColor: '#8F986D'
  },
  {
    id: 'd',
    category: 'Photography',
    title: 'The Latest Ultra-Specific Photography Editing Apps',
    pointOfInterest: 150,
    backgroundColor: '#FA6779'
  },
  {
    id: 'h',
    category: 'They\'re all the same',
    title: '100 Cupcake Apps for the Cupcake Connoisseur',
    pointOfInterest: 60,
    backgroundColor: '#282F49'
  },
  {
    id: 'e',
    category: 'Cats',
    title: 'Yes, They Are Sociopaths',
    pointOfInterest: 200,
    backgroundColor: '#AC7441'
  },
  {
    id: 'b',
    category: 'Holidays',
    title: 'Seriously the Only Escape is the Stratosphere',
    pointOfInterest: 260,
    backgroundColor: '#CC555B'
  }
];

const List = () => {
  const params = useParams();
  const navigate = useNavigate();
  const targetRef = React.useRef(null);
const { scrollYProgress } = useScroll({
  target: targetRef,
});

const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${cardData.length *50  }%`]);

  return (
    <section ref={targetRef} className="  h-[400vh] items-center bg-neutral-900">
      
    <div className="sticky  top-20 items-center   ">
      <motion.div style={{ x }} className="flex gap-4 ">
      {cardData.map((card,index) => (
        
        <Card
          key={card.id}
          isSelected={params.id === card.id}
          {...card}
          />
         
        
      ))}
      </motion.div>
    </div>
  </section>
  );
};
// const Overlay = ({ isSelected }) => (
//   <motion.div
//     initial={false}
//     animate={{ opacity: isSelected ? 1 : 0 }}
//     transition={{ duration: 0.2 }}
//     style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
//     className="absolute  bg-black bg-opacity-50 flex items-center justify-center w-[500vw] h-screen"
//   >
//     <Link to="/" className="w-full h-full" />
//   </motion.div>
// );
export const CardList = () => (
  <Router>
    <Routes>
      <Route path="/:id" element={<List />} />
      <Route path="/" element={<List />} />
    </Routes>
  </Router>
);
