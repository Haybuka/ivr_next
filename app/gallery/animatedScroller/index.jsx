'use client';
import React, { useRef } from 'react';
import AnimatedCard from './card';
import { useScroll, motion, useTransform } from 'framer-motion';

const AnimatedScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);
  console.log({ x });
  return (
    <section ref={targetRef} className="relative h-[300vh]  my-20">
      <div className="h-screen  sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 bg-yellow-500">
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedScroller;
