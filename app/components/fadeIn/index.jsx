'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <motion.aside
      ref={ref}
      variants={{
        hidden: {
          opacity: 0.3,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.3,
      }}
      className="text-3xl font-semibold   lg:px-4 font-titilium text-center my-10 md:my-20"
    >
      {children}
    </motion.aside>
  );
};

export default FadeIn;
