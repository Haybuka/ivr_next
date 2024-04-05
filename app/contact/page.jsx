import React from 'react';
import Banner from './banner';
import Quote from './quote';

export const metadata = {
  title: 'IVR | Contact',
  description:
    'Ivr power works, a fast growing system of electrical engineering services. ',
};

const Index = () => {
  return (
    <section className="mt-20 md:px-0">
      <Banner text="Contact Us" />
      <Quote />
    </section>
  );
};

export default Index;
