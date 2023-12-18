'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Burger from './burger';
import Desktop from './desktop';
import Mobile from './mobile';

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
          <h3 className="text-orange-600 font-bold text-2xl lg:text-3xl font-odor flex justify-between items-center">
            <Link href={'/'} className="inline-block">
              IPW
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
