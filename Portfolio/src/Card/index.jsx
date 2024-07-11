import * as React from "react";
import { memo, useRef,useState, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useInvertedBorderRadius } from "../utils/use-inverted-border-radius";
//import { CardData } from "../types";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";
import { Image } from "./Image";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "../utils/use-scroll-constraints";
import { useWheelScroll } from "../utils/use-wheel-scroll";

// interface Props extends CardData {
//   isSelected: boolean;
//   history: {
//     push: (route: string) => void;
//   };
// }

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 100 ;

export const Card = memo(
  ({
    isSelected,
    id,
    title,
    category,
    navigate,
    pointOfInterest,
    backgroundColor
  }) => {
    // const navigate = useNavigate();
    const y = useMotionValue(0);
    const x = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);
//console.log("value :" +constraints.bottom);
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
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );
    const { scrollYProgress } = useScroll();
  
  //   useEffect (() =>{
  //   const unsub =X.on ("change", (latest) => console.log(latest))
  //   return () => 
  //     unsub()
    
  // }, [X]);
    const [Scy, setScy] = useState(0)
useMotionValueEvent (scrollYProgress,
  "change",
  (latest) => {
    setScy(latest)
   console.log(latest);
    // setscx(latest)
  }) ;

    return (
      <div ref={containerRef} className={` relative p-6 h-[460px] flex-none w-4/12`}>
        <Overlay isSelected={isSelected} />
        <div className={` ${isSelected ? `fixed top-0 left-0 right-0  z-10 overflow-hidden p-0` : "block relative w-fit h-full pointer-events-none"}`}>
          <motion.div
            ref={cardRef}
            className=" overflow-hidden pointer-events-auto relative rounded-xl bg-[#1c1c1e]  h-full m-auto"
            style={{ ...inverted, zIndex, y }}
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
            <ContentPlaceholder />
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
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="fixed z-10 bg-black/80  top-0 bottom-0  w-screen h-screen translate-x-[-50%]"
  >
    <Link  to="/" />
  </motion.div>
);
