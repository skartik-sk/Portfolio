import React, { useState,useLayoutEffect, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Link } from 'react-router-dom';
import { Card } from './Card';
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";

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
const calculateDynamicValue = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) { // Example breakpoint for small screens
    return 90;
  } else if (screenWidth >= 600 && screenWidth < 800) { // Medium screens
    return 85;
  } 
  else if (screenWidth >= 800 && screenWidth < 900) { // Medium screens
    return 79;
  }
  else if (screenWidth >= 900 && screenWidth < 1000) { // Medium screens
    return 70;
  }
  else if (screenWidth >= 1000 && screenWidth < 1100) { // Medium screens
    return 63;
  }
  else if (screenWidth >= 1100 && screenWidth < 1200) { // Medium screens
    return 58;
  }else { // Large screens
    return 51;
  }
};
const List = () => {
  const params = useParams();
  const navigate = useNavigate();
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [dynamicValue, setDynamicValue] = useState(calculateDynamicValue());

  // Update dynamic value on window resize
  useLayoutEffect(() => {
    const handleResize = () => {
      setDynamicValue(calculateDynamicValue());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${cardData.length * dynamicValue}%`]);

  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      // console.log( window.scrollX, window.scrollY);
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [xPosition, setXPosition] = useState(null);


  const handleCardClick = (e) => {
    if (xPosition === null) { // Capture the x position only once
      setXPosition(x.get());
    }
  };
  return (
    <section ref={targetRef} className="h-[400vh] relative items-center bg-neutral-900">
      <div className=" sticky top-[10%]   items-center overflow-hidden">
        <motion.div style={{ x }} className="flex align-middle gap-y-4  ">
          {cardData.map((card) => (
            <Card
              key={card.id}
              isSelected={params.id === card.id}
              {...card}
              scrollPosition={scrollPosition}
              posi= {xPosition}
              onClick={handleCardClick} // Pass the click handler to each card
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