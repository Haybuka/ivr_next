import React from 'react';
import Button from '../components/button';
import Link from 'next/link';

const Desktop = ({ navigation }) => {
  return (
    <>
      <ul className="hidden lg:flex items-center font-titilium ">
        {navigation.map((item, id) => (
          <Link key={id} href={item.path} className={' text-orange-600 mx-4'}>
            <li className="capitalize">{item.name}</li>
          </Link>
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
