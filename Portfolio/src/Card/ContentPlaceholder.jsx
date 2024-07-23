import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useDeprecatedInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(({isSelected,c1,c2,c3,url}) => {
  const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className={` ${isSelected? "px-[10px] py-8":"px-[10px]"} max-w-[650px] w-[90vw] bg-[#1c1c1e] mx-auto`}
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <div>{isSelected? <>
     
      <a href={url}>
      <button className=" md:w-3/12 w-5/15 bg-gradient-background font-bold rounded-full py-3 px-6 lg:px-12">
              Prototype
            </button></a>
            <div className="">
              <div className="py-5 font-bold text-2xl">About:</div>
              <div>{c1}</div>
              <div className="py-5 font-bold text-2xl">Features:</div>
              <div>{c2}</div>
              <div className="py-5 font-bold text-2xl">Techstack:</div>
              <div>{c3}</div>
            </div>

  
      

      </>: <div></div>}</div>
      </motion.div>
  );
});


 
