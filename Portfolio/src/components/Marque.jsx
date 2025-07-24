import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient overflow-x-hidden">
    <motion.div
  initial={{ x: `${from}` }}
  animate={{ x: `${to}` }}
  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
  className="flex flex-shrink-0 gap-3 overflow-x-hidden " // Ensure no gap between elements
>
  {[...images, ...images,...images].map((image, index) => (
    <img className=" h-10 md:h-12 rounded-full px-0  hover:saturate-100 transition duration-300 ease-in-out" src={image} key={index} />
  ))}
</motion.div>

<motion.div
  initial={{ x: `${from}` }}
  animate={{ x: `${to}` }}
  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
  className="flex flex-shrink-0 gap-3 overflow-x-hidden" // Consistent with the first div
>
  {[...images, ...images,...images].map((image, index) => (
    <img className=" h-10 md:h-12 rounded-full px-0  hover:saturate-100 transition duration-300 ease-in-out" src={image} key={index} />
  ))}
</motion.div>
    </div>
  );
};

export default MarqueeItem;