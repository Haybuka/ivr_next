'use client';
import React, { useRef } from 'react';
import AnimatedCard from './card';
import { useScroll, motion, useTransform } from 'framer-motion';

const AnimatedScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);
  const cards = [
    {
      image: '/about/manWire.jpg',
      title: 'project one',
    },
    {
      image: '/home/ceo.jpeg',
      title: 'project two',
    },
    {
      image: '/home/multimeter.jpg',
      title: 'project three',
    },
    {
      image: '/about/manWire.jpg',
      title: 'project four',
    },
    {
      image: '/home/grid_two.jpg',
      title: 'project five',
    },
    {
      image: '/about/manWire.jpg',
      title: 'project six',
    },
    {
      image: '/home/grid_one.jpg',
      title: 'project seven',
    },
  ];
  return (
    <section ref={targetRef} className="relative h-[300vh]  my-20">
      <div className="h-screen  sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ">
          {cards.map((card, id) => (
            <AnimatedCard card={card} key={id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedScroller;
