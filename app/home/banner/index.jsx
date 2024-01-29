import React from 'react';
import styles from './banner.module.css';
import cls from 'classnames';
import Link from 'next/link';
import Button from '@/app/components/button';

const Banner = () => {
  return (
    <section className={cls(styles.banner)}>
      <aside className={cls(styles.banner_grid, 'hidden')}>
        <div className={cls(styles.grid_one)}></div>
        <div className={cls(styles.grid_two)}></div>
        <div className={cls(styles.grid_three)}></div>
      </aside>
      <aside className={styles.mobile}></aside>
      <article className="py-6 px-4 md:px-[30px] lg:mr-[80px] font-titilium">
        <h2 className="uppercase font-semibold text-4xl md:text-5xl lg:text-6xl ">
          <p>
            <span className="text-ivr-100 font-bold">I</span>
            vr
          </p>
          <p className="flex items-center">
            <span className="text-ivr-100 font-bold">P</span>ower
          </p>
          <p>
            <span className="text-ivr-100 font-bold">W</span>orks
          </p>
        </h2>
        <p className="w-auto lg:w-[380px] my-4">
          Ivr power works is a fast growing system of electrical engineering
          services with a mission to contribute to the world's smart cities
          vision by delivering quality and reliable engineering solutions one
          city at a time.
        </p>
        <Link href={'/contact'}>
          <Button
            text="Get in Touch"
            propStyle="inline-block my-3 px-6 bg-red-400"
          />
        </Link>
      </article>
    </section>
  );
};

export default Banner;
