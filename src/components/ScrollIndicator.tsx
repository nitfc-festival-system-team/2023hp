"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "10px",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "0%",
          backgroundColor: "black",
          scaleX: scrollYProgress,
        }}
      />
    </div>
  );
};
