import React, { memo, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import { useInvertedBorderRadius } from '../utils/use-inverted-border-radius';
import { ContentPlaceholder } from './ContentPlaceholder';
import { Title } from './Title';
import { Image } from './Image';

import { openSpring, closeSpring } from './animations';
import { useScrollConstraints } from '../utils/use-scroll-constraints';
import { useWheelScroll } from '../utils/use-wheel-scroll';
const dismissDistance = 60 ;
const dismissDistance2 = -300 ;

const Card = memo(({ isSelected, id, title, category, history, pointOfInterest, backgroundColor,scrollPosition, onClick,posi }) => {
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
  const inverted = useInvertedBorderRadius(20);
const navigate = useNavigate()
  // We'll use the opened card element to calculate the scroll constraints
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  function checkSwipeToDismiss() {
    if (y.get() > dismissDistance || y.get() < dismissDistance2){
      isSelected= !isSelected
      navigate("/");
  }
  }

  function checkZIndex(latest) {
    if (isSelected) {
      zIndex.set(2);
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }
  const containerRef = useRef(null);
  useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected);
  // console.log(containerRef.current.offsetLeft);


  // <---------------------------------------------->
  const [translateX, setTranslateX] = useState(0); // Step 4: State to hold translate value
// Step 1: Modified onClick handler to capture event and calculate translateX
let   factor = 1; // Step 6: Factor to adjust translateX
const handleClick = (e) => {
  // Calculate the card's current left position relative to the viewport
  const cardLeftPosition = e.target.getBoundingClientRect().left;

  // Calculate translation to move card to the left edge of the screen
  const translateXToLeftEdge = -cardLeftPosition;

  // Apply translation to move card to the left edge
  setTranslateX(translateXToLeftEdge); // Assuming setTranslateX updates the card's transform property

  // Optionally, adjust the card's size to cover the full viewport
  // This might involve setting state that adjusts the card's width and height to `window.innerWidth` and `window.innerHeight`
  // For example:
  // setCardSize({ width: window.innerWidth, height: window.innerHeight });

  console.log(translateXToLeftEdge); // Log the translation value
  onClick(); // Call original onClick if needed
};
// console.log(translateX);

  // When this card is selected, attach a wheel event listener
  // const x = useMotionValue(0);
  // const [xPosition, setXPosition] = useState(null);


  // const handleCardClick = (e) => {
  //   if (xPosition === null) { 
  //     console.log(x.get());// Capture the x position only once
  //     setXPosition(x.get());
  //   }
  // };
  // const factor = 1.7;
  return (
    <div
      ref={containerRef}
      className={`relative p-6  `}
      onClick={handleClick}
    >
      <Overlay isSelected={isSelected} />
      <div
        style={{ transform: `translateX(${isSelected ? translateX * factor : 0}px)` }}
        className={`${
          isSelected ? 'relative z-10 overflow-hidden p-0 w-screen selected-style ' : 'block relative w-fit pointer-events-none'
        }`}
      >
        <motion.div
          ref={cardRef}
          className="overflow-hidden pointer-events-auto bg-[#1c1c1e] h-full m-auto"
          style={{ ...inverted, zIndex, y }}
          layoutTransition={isSelected ? openSpring : closeSpring}
          drag={isSelected ? 'Y' : false}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}
          onUpdate={checkZIndex}
        >
          <Image
            id={id}
            isSelected={isSelected}
            pointOfInterest={pointOfInterest}
            backgroundColor={backgroundColor}
          />
          <Title title={title} category={category} isSelected={isSelected} />
          <ContentPlaceholder isSelected={isSelected} />
        </motion.div>
      </div>
      {!isSelected && <Link to={id} className="absolute inset-0" />}
    </div>
  );
},
(prev, next) => prev.isSelected === next.isSelected
);
const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className="absolute bg-black bg-opacity-50 flex items-center justify-center w-screen h-screen"
  >
    <Link to="/" className="w-screen h-screen" />
  </motion.div>
);

export { Card };
