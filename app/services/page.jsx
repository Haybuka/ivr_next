import React from 'react';
import Banner from '../about/banner';
import ServiceSection from './service';

const Services = () => {
  return (
    <section className="mt-20 md:px-0">
      <Banner text={'Services'} />
      <ServiceSection />
    </section>
  );
};

export default Services;
