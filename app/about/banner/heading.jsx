'use client';
import React from 'react';
import { animate, motion } from 'framer-motion';
import cls from 'classnames';

const BannerHeading = ({ text }) => {
  return (
    <motion.h3
      className={cls(
        'text-xl  md:text-3xl uppercase text-white md:ml-6 tracking-widest font-titilium'
      )}
      variants={{
        hidden: {
          rotate: '0deg',
          scale: 0,
          y: 0,
        },
        visible: {
          rotate: '360deg',
          scale: 1,
          y: [0, 150, -150, -150, 0],
        },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
        ease: 'backInOut',
        times: [0, 0.25, 0.5, 0.8, 1],
      }}
    >
      {text}
    </motion.h3>
  );
};

export default BannerHeading;
