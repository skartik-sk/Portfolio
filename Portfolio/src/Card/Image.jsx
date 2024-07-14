import React from "react";
import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";

export const Image = ({ id, isSelected, pointOfInterest = 0, backgroundColor }) => {
  const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className="relative overflow-hidden w-full h-[420px] transform-gpu"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="absolute inset-0 w-full h-full object-cover"
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};


