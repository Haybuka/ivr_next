import React from 'react';
import Button from '../components/button';
import Link from 'next/link';
import NavItem from './navItem';

const Desktop = ({ navigation }) => {
  return (
    <>
      <ul className="hidden lg:flex items-center font-titilium ">
        {navigation.map((item, id) => (
          <NavItem key={id} info={item} />
        ))}
      </ul>
      <Link href={'/contact'}>
        <Button
          text={'Book an Appointment'}
          propStyle={'hidden md:inline-block'}
        />
      </Link>
    </>
  );
};

export default Desktop;
