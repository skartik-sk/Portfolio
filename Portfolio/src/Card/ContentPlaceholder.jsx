import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useDeprecatedInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(({isSelected}) => {
  const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className="content-container p-[35px] max-w-[700px] w-[90vw] bg-[#1c1c1e] mx-auto"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
    </motion.div>
  );
});

 
