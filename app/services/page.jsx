import React from 'react';
import Banner from '../about/banner';
import ServiceSection from './service';

export const metadata = {
  title: 'IVR | Services',
  description:
    'Ivr power works, a fast growing system of electrical engineering services. ',
};

const Services = () => {
  return (
    <section className="mt-20 md:px-0">
      <Banner text={'Services'} />
      <ServiceSection />
    </section>
  );
};

export default Services;
