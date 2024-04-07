import React from 'react';
import TestimonialCard from './card';

const Slider = ({ scope, testimonials }) => {
  return (
    <ul
      ref={scope}
      className="h-[400px] w-full lg:h-[500px] lg:w-[600px] flex justify-center items-center relative shadow-md   "
    >
      {testimonials.map((testimonial, id) => (
        <TestimonialCard
          key={id}
          inverted={id % 2 === 0}
          testimonial={testimonial}
        />
      ))}
    </ul>
  );
};

export default Slider;
