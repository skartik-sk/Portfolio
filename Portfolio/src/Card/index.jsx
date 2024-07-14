import React, { memo, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import { useInvertedBorderRadius } from '../utils/use-inverted-border-radius';
import { ContentPlaceholder } from './ContentPlaceholder';
import { Title } from './Title';
import { Image } from './Image';

import { openSpring, closeSpring } from './animations';
import { useScrollConstraints } from '../utils/use-scroll-constraints';
import { useWheelScroll } from '../utils/use-wheel-scroll';
const dismissDistance = 80 ;
const Card = memo(({ isSelected, id, title, category, history, pointOfInterest, backgroundColor }) => {
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
  const inverted = useInvertedBorderRadius(20);
const navigate = useNavigate()
  // We'll use the opened card element to calculate the scroll constraints
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  function checkSwipeToDismiss() {
    if (y.get() > dismissDistance) {
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

  // When this card is selected, attach a wheel event listener
  const containerRef = useRef(null);
  useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected);

  return (
    
    <div ref={containerRef} className={` relative p-6  flex-none `}>
    <Overlay isSelected={isSelected}  />
    <div className={` ${isSelected ? `fixed top-0 bottom-0  z-10 overflow-hidden p-0 w-fit  ` : "block relative w-fit  pointer-events-none"}`}>
      <motion.div
        ref={cardRef}
        className=" overflow-hidden pointer-events-auto relative  bg-[#1c1c1e]  h-full m-auto"
        style={{ ...inverted, zIndex, y }}
        layoutTransition={isSelected ? openSpring : closeSpring}
        drag={isSelected ? "x" : false}
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
        <ContentPlaceholder/>

          
      </motion.div>
    </div>
    {!isSelected && <Link to={id} className={`absolute inset-0`} />}
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
    className="absolute  bg-black bg-opacity-50 flex items-center justify-center w-screen h-screen"
  >
    <Link to="/" className="w-screen h-screen" />
  </motion.div>
);

export { Card };
