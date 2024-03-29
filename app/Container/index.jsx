'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Burger from './burger';
import Desktop from './desktop';
import Mobile from './mobile';
import { Inter, Poppins } from 'next/font/google';
import cls from 'classnames';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'services',
      path: '/services',
    },
    {
      name: 'contact',
      path: '/contact',
    },
  ];

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <header className="py-6 px-4 md:px-16 shadow-md fixed top-0 w-full bg-white z-40 text-lg">
        <nav className="md:flex justify-between items-center">
          <h3 className="text-ivr-100 font-bold text-2xl lg:text-3xl font-odor flex justify-between items-center">
            <Link href={'/'} className="inline-block">
              <div className={cls('flex items-start', poppins.className)}>
                <p className="uppercase ">Ivr</p>
                <p className="border-l-2 border-black px-2 mx-2 py-0 text-ivr-100">
                  <span className="block text-sm lowercase">Power</span>
                  <span className="block text-sm lowercase">Works</span>
                </p>
              </div>
            </Link>
            <Burger toggle={handleToggle} />
          </h3>
          <Desktop navigation={navigation} />
          {toggle && <Mobile toggle={handleToggle} navigation={navigation} />}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
