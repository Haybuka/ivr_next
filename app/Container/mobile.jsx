import React from 'react';
import Button from '../components/button';
import Link from 'next/link';

const Mobile = ({ toggle, navigation }) => {
  return (
    <section className="absolute bg-white w-full text-center h-screen left-0 px-4 overflow-hidden">
      <ul className="block lg:flex items-center font-titilium ">
        {navigation.map((item, id) => (
          <Link
            key={id}
            href={item.path}
            className={'  text-ivr-100 mx-4'}
            onClick={toggle}
          >
            <li className="capitalize">{item.name}</li>
          </Link>
        ))}
      </ul>
      <Link href={'/contact'}>
        <Button text={'Book an Appointment'} />
      </Link>
    </section>
  );
};

export default Mobile;
