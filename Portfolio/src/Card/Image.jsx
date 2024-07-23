import React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";

export const Image = ({ id, isSelected, pointOfInterest, backgroundColor }) => {
  const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className="relative overflow-hidden w-full h-[43vh] m-auto transform-gpu"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="absolute inset-0 w-full h-full  object-cover"
        src={`images/${id}.png`}
        alt=""
        initial={ false}

        animate={
          isSelected ? {opacity:1, x:0, y: 0 } : { x: 0, y: 50 }
          
        }
      
        transition={closeSpring}
      />
    </motion.div>
  );
};


