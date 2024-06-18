import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
    <motion.div
  initial={{ x: `${from}` }}
  animate={{ x: `${to}` }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  className="flex flex-shrink-0 gap-2" // Ensure no gap between elements
>
  {[...images, ...images,...images].map((image, index) => (
    <img className="h-12 rounded-full px-0 saturate-0 hover:saturate-100 transition duration-300 ease-in-out" src={image} key={index} />
  ))}
</motion.div>

<motion.div
  initial={{ x: `${from}` }}
  animate={{ x: `${to}` }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  className="flex flex-shrink-0 gap-2" // Consistent with the first div
>
  {[...images, ...images,...images].map((image, index) => (
    <img className="h-12 rounded-full px-0 saturate-0 hover:saturate-100 transition duration-300 ease-in-out" src={image} key={index} />
  ))}
</motion.div>
    </div>
  );
};

export default MarqueeItem;