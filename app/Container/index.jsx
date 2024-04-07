'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Burger from './burger';
import Desktop from './desktop';
import Mobile from './mobile';
import { Poppins } from 'next/font/google';
import cls from 'classnames';
import { navigation } from '../utils';
import { motion, useAnimate, useInView } from 'framer-motion';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleAnimateNav = useCallback(async () => {
    await animate('#header', { y: 0, opacity: 1 });
    await animate('#logo1', { x: 0, opacity: 1 });
    await animate('#logo2', { y: 0, opacity: 1 });
    await animate('#logo3', { y: 0, opacity: 1 });
    await animate('#parentNav', { scale: 1.2 }, { ease: 'easeIn' });
    await animate('#parentNav', { scale: 0.5 }, { ease: 'easeIn' });
    await animate('#parentNav', { scale: 1.2 }, { ease: 'easeInOut' });
    await animate('#parentNav', { scale: 1 }, { ease: 'easeInOut' });
  }, [animate]);

  useEffect(() => {
    handleAnimateNav();
  }, [isInView, handleAnimateNav]);

  return (
    <div ref={scope}>
      <motion.header
        id="header"
        initial={{ y: -100, opacity: 0 }}
        transition={{ ease: 'easeIn' }}
        className="py-6 px-4 md:px-16 shadow-md fixed top-0 w-full bg-white z-40 text-lg"
      >
        <nav className="md:flex justify-between items-center">
          <h3 className="text-ivr-100 font-bold text-2xl lg:text-3xl font-odor flex justify-between items-center">
            <Link href={'/'} className="inline-block relative">
              <motion.div
                initial={{ scale: 1 }}
                id="parentNav"
                className={cls('flex items-start', poppins.className)}
              >
                <motion.p
                  initial={{ x: 230, opacity: 0 }}
                  id="logo1"
                  className="uppercase "
                >
                  Ivr
                </motion.p>
                <p className="border-l-2 border-black px-2 mx-2 py-0 text-ivr-100">
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    id="logo2"
                    className="block text-sm lowercase"
                  >
                    Power
                  </motion.span>
                  <motion.span
                    initial={{ y: -10, opacity: 0 }}
                    id="logo3"
                    className="block text-sm lowercase"
                  >
                    Works
                  </motion.span>
                  {/* <motion.svg
                    id="svg"
                    initial={{ x: 40, position: 'absolute',height:0, }}
                    className={'top-0 absolute'}
                    width="50px"
                    height="50px"
                    viewBox="-0.5 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <path
                        d="M11.9999 3L7.83997 11.79C7.67997 12.12 7.91995 12.5 8.28995 12.5H15.71C16.08 12.5 16.3199 12.88 16.1599 13.21L11.9999 22"
                        stroke="#0F0F0F"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{' '}
                    </g>
                  </motion.svg> */}
                </p>
              </motion.div>
            </Link>
            <Burger toggle={handleToggle} />
          </h3>
          <Desktop navigation={navigation} />
          {toggle && <Mobile toggle={handleToggle} navigation={navigation} />}
        </nav>
      </motion.header>
    </div>
  );
};

export default NavBar;
