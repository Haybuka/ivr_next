'use client';
import React, { useCallback, useEffect } from 'react';
import { useAnimate, useInView, motion, useTime } from 'framer-motion';
const Testimonials = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const handleAnimateBoxCallback = useCallback(async () => {
    await animate('#progressOne', { width: '100%' }, { duration: 5 });
    await animate('#boxTwo', { x: 0, scale: 1 }, { duration: 0.5, delay: 0.2 });
    await animate(
      '#progressTwo',
      { width: '100%' },
      { duration: 5, delay: 0.5 }
    );
    await animate(
      '#boxThree',
      { x: 0, scale: 1 },
      { duration: 0.5, delay: 0.2 }
    );
    await animate(
      '#progressThree',
      { width: '100%' },
      { duration: 5, delay: 0.5 }
    );
    await animate(
      '#boxFour',
      { x: 0, scale: 1 },
      { duration: 0.5, delay: 0.2 }
    );
    await animate(
      '#progressFour',
      { width: '100%' },
      { duration: 5, delay: 0.5 }
    );
  }, [animate]);

  useEffect(() => {
    if (isInView) {
      handleAnimateBoxCallback();
    }
  }, [isInView, handleAnimateBoxCallback]);

  return (
    <section
      className="lg:grid grid-cols-12 my-12 overflow-x-hidden"
      ref={scope}
    >
      <aside className="col-span-7 flex justify-center items-center p-4 md:p-16">
        <div>
          <h3 className="text-4xl font-semibold mb-4">
            What our customers think
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            commodi sint, similique cupiditate possimus suscipit delectus illum
            eos iure magnam!
          </p>
          <ul className="flex gap-x-4 my-4">
            <li className="w-24 h-1 bg-slate-200 relative">
              {' '}
              <motion.span
                initial={{ width: 0 }}
                id="progressOne"
                className="h-full bg-black absolute top-0 left-0"
              ></motion.span>{' '}
            </li>
            <li className="w-24 h-1 bg-slate-200 relative">
              {' '}
              <motion.span
                initial={{ width: 0 }}
                id="progressTwo"
                className="h-full bg-black absolute top-0 left-0"
              ></motion.span>{' '}
            </li>
            <li className="w-24 h-1 bg-slate-200 relative">
              {' '}
              <motion.span
                initial={{ width: 0 }}
                id="progressThree"
                className="h-full bg-black absolute top-0 left-0"
              ></motion.span>{' '}
            </li>
            <li className="w-24 h-1 bg-slate-200 relative">
              {' '}
              <motion.span
                initial={{ width: 0 }}
                id="progressFour"
                className="h-full bg-black absolute"
              ></motion.span>{' '}
            </li>
          </ul>
        </div>
      </aside>
      <aside className="col-span-5 px-8 md:px-10 py-28 lg:py-40 lg:px-0">
        <ul
          ref={scope}
          className="h-[400px] w-full lg:h-[500px] lg:w-[600px] flex justify-center items-center relative shadow-md   "
        >
          <motion.li
            id="boxOne"
            className="h-full translate-x-0 w-full lg:w-[600px] bg-black absolute top-0 shadow-md "
            initial={{
              x: 0,
            }}
            transition={{
              ease: 'easeIn',
            }}
          ></motion.li>
          <motion.li
            id="boxTwo"
            initial={{
              x: 550,
              scale: 1.1,
            }}
            transition={{
              ease: 'easeIn',
            }}
            className="h-full w-full translate-x-0 lg:w-[600px] bg-white  absolute top-0 shadow-md border right-0 z-10 "
          ></motion.li>
          <motion.li
            initial={{
              x: 580,
              scale: 1.15,
            }}
            viewport={{}}
            transition={{
              ease: 'easeIn',
            }}
            id="boxThree"
            className="h-full w-full translate-x-0 lg:w-[600px] bg-black absolute top-0 shadow-md right-0 z-20"
          ></motion.li>
          <motion.li
            initial={{
              x: 610,
              scale: 1.2,
            }}
            transition={{
              ease: 'easeIn',
            }}
            id="boxFour"
            className="h-full w-full translate-x-0 lg:w-[600px] bg-red-500 text-white absolute top-0 shadow-md right-0 z-20"
          ></motion.li>
          <li />
          <li />
        </ul>
      </aside>
    </section>
  );
};

export default Testimonials;
