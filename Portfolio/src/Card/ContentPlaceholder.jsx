import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useDeprecatedInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(({isSelected}) => {
  const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className={`content-container ${isSelected? "p-[35px]":"px-[35px]"} max-w-[700px] w-[90vw] bg-[#1c1c1e] mx-auto`}
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <div>{isSelected? <> <LoremIpsum p={8} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
      </>: <div></div>}</div>
      </motion.div>
  );
});


 
