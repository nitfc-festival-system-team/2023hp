import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

import { Variants, motion } from "framer-motion";

const animationVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Wrapper = ({ component }: { component: ReactNode }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {component}
    </motion.div>
  );
};

export const FadeAnimationProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <>
    {React.Children.map(children, (child) => (
      <Wrapper component={child}></Wrapper>
    ))}
  </>
);
