'use client';

import cls from 'classnames';
import styles from './gallery.module.css';

import { useState } from 'react';
import GSlider from './GSlider';
import GDescription from './GDescription';
const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  const gallerySlides = [
    {
      title: 'Modern Art',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/gallery/modern_art.jpg',
    },
    {
      title: 'Minimalism',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/gallery/minimalism.jpg',
    },
    {
      title: 'Mid-century modern',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/gallery/modern.jpg',
    },
    {
      title: 'Art Deco',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/gallery/art_deco.jpg',
    },
    {
      title: 'Scandinavian Design',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/gallery/room.jpg',
    },
    {
      title: 'Japandi',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/gallery/minimalism.jpg',
    },
    {
      title: 'Modern Art',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/gallery/modern_art.jpg',
    },
  ];
  return (
    <main className="mt-20">
      <section className={cls(styles.banner)}>
        <h3 className="text-xl  md:text-3xl uppercase text-white md:ml-6 tracking-widest">
          Gallery
        </h3>
      </section>
      <section className="my-10 px-6 md:px-[30px] lg:px-[100px] lg:flex items-center justify-around">
        <GSlider
          handleActiveIndex={handleActiveIndex}
          activeIndex={activeIndex}
          sliders={gallerySlides}
        />
        <GDescription details={gallerySlides[activeIndex]} />
      </section>
    </main>
  );
};

export default Index;
