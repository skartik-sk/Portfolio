import React from "react";
import styles from "./bubble.module.css";

const Bubble = () => {
  return (
   
      <BubbleText />
   
      
  );
};

const BubbleText = () => {
  return (
      <>
     {"Interested in working with me".split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
   
    </>
  );
};

export default Bubble;