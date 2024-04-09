'use client';

import cls from 'classnames';
import styles from './gallery.module.css';

import { useState } from 'react';
import GSlider from './GSlider';
import GDescription from './GDescription';
import { gallerySlides } from '../utils';
import AnimatedScroller from './animatedScroller';
const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <main className="mt-20">
      <section className={cls(styles.banner)}>
        <h3 className="text-xl  md:text-3xl uppercase text-white md:ml-6 tracking-widest">
          Gallery
        </h3>
      </section>
      <section className="my-20 px-6 md:px-[30px] lg:px-[100px] lg:flex items-center justify-around">
        <GSlider
          handleActiveIndex={handleActiveIndex}
          activeIndex={activeIndex}
          sliders={gallerySlides}
        />
        <GDescription details={gallerySlides[activeIndex]} />
      </section>
      <AnimatedScroller />
    </main>
  );
};

export default Index;
