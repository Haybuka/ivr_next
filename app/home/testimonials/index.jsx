'use client';
import React, { useCallback, useEffect } from 'react';
import { useAnimate, useInView, motion, useTime } from 'framer-motion';
const Testimonials = () => {
  const time = useTime();
  const [scope, animate] = useAnimate(time);
  const isInView = useInView(scope);

  console.log({ time });

  const handleAnimateBoxCallback = useCallback(async () => {
    await animate('#boxTwo', { x: 0 }, { duration: 0.5, delay: 5 });
    await animate('#boxThree', { x: 0 }, { duration: 0.5, delay: 5 });
  }, [animate]);

  const handleAnimateProgressCallback = useCallback(async () => {
    await animate('#boxTwo', { x: 0 }, { duration: 0.5, delay: 5 });
    await animate('#boxThree', { x: 0 }, { duration: 0.5, delay: 5 });
  }, [animate]);

  useEffect(() => {
    if (isInView) {
      handleAnimateBoxCallback();
    }
  }, [isInView, handleAnimateBoxCallback]);

  return (
    <section className="grid grid-cols-12 my-12 bg-red-500">
      <aside className="col-span-6 flex justify-center items-center p-24">
        <div>
          <h3 className="text-4xl font-semibold mb-4">
            What our customers think
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            commodi sint, similique cupiditate possimus suscipit delectus illum
            eos iure magnam!
          </p>
          <ul className="flex gap-x-4">
            <li className="w-24 h-1 bg-slate-200"> </li>
            <li className="w-24 h-1 bg-slate-200"> </li>
            <li className="w-24 h-1 bg-slate-200"> </li>
            <li className="w-24 h-1 bg-slate-200"> </li>
          </ul>
        </div>
      </aside>
      <aside className="col-span-6 over">
        <ul
          ref={scope}
          className="h-[400px] w-[400px] relative overflow-hidden"
        >
          <motion.li
            id="boxOne"
            className="h-full w-full bg-black absolute top-0 "
            initial={{
              x: 0,
            }}
            transition={{
              ease: 'easeIn',
            }}
          >
            {' '}
            First list item
          </motion.li>
          <motion.li
            id="boxTwo"
            initial={{
              x: 300,
            }}
            transition={{
              ease: 'easeIn',
            }}
            className="h-full w-full bg-white text-red-500 absolute top-0 right-0 z-10 "
          >
            {' '}
            second list item
          </motion.li>
          <motion.li
            initial={{
              x: 360,
            }}
            transition={{
              ease: 'easeIn',
            }}
            id="boxThree"
            className="h-full w-full bg-green-400 text-white absolute top-0 right-0 z-20"
          >
            {' '}
            third list item
          </motion.li>
          <li />
          <li />
        </ul>
      </aside>
    </section>
  );
};

export default Testimonials;
