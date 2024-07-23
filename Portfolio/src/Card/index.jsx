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
const calculateDynamicValue = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) { // Example breakpoint for small screens
    return -450;
  } else { // Medium screens
    return -290;
  }
};
//todo add the dynamic value to the dismiss distance based on the text size
const dismissDistance = 60 ;
const dismissDistance2 = calculateDynamicValue() ;

const Card = memo(({ isSelected, id, title,c1,c2,c3,url, category, history, pointOfInterest, backgroundColor,scrollPosition, onClick,posi }) => {
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
      y.set(0);
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
 // Step 6: Factor to adjust translateX
const [translateY, setTranslateY] = useState(0); // Step 1: Add state for Y translation

let factor = 1; // Factor to adjust translateX (and potentially translateY)
let factorY = 1; // Step 2: Factor to adjust translateY

const handleClick = (e) => {
  // Calculate the card's current left position relative to the viewport
  const cardRect = e.target.getBoundingClientRect();
  const cardLeftPosition = cardRect.left;
  const cardTopPosition = cardRect.top ; // Step 3: Get the top position

  // Calculate translation to move card to the left edge of the screen
  const translateXToLeftEdge = -cardLeftPosition;
  const translateYToTopEdge = -cardTopPosition ; // Step 4: Calculate translateY to move card to the top edge

  // Apply translation to move card
  setTranslateX(translateXToLeftEdge * factor); // Apply factor if needed
  setTranslateY(translateYToTopEdge * factorY);
  onClick() // Step 5: Apply factorY and update translateY state
};
const calculateDynamicValue = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 500) { // Example breakpoint for small screens
    return 10;
  } else { 
    return 85;
  } 
 
};
 // <---------------------------------------------->

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
      
     
      className={`relative px-6 py-2   `}
      onClick={handleClick}
    >
      <Overlay isSelected={isSelected} />
      <div
        style={{ overflowY: isSelected ? 'auto' : 'hidden', transform: `translateX(${isSelected ? (translateX * factor) -12 : 0}px) translateY(${isSelected ? (translateY * factorY)+ calculateDynamicValue() : 0}px)` }}
        className={`${
          isSelected ? 'relative z-10  p-0 w-[97vw] h-[90vh] selected-style ' : 'block relative w-fit  pointer-events-none'
        }`}
      >
        <motion.div
          ref={cardRef}
          className="overflow-hidden pointer-events-auto bg-[#1c1c1e] h-fit m-auto "
          style={{ ...inverted, zIndex, y, }}
          layoutTransition={isSelected ? openSpring : closeSpring}
          drag={isSelected ? "y" : false}
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
          <ContentPlaceholder c1={c1} c2={c2} c3={c3} url={url} isSelected={isSelected} />
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
