import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial, inverted }) => {
  const { idRef, body, initial, svg, name, role } = testimonial;
  return (
    <motion.li
      initial={initial}
      transition={{
        ease: 'easeIn',
      }}
      id={idRef}
      className={`h-full w-full translate-x-0 flex flex-col justify-between lg:w-[600px] absolute top-0 p-6 md:p-10 border ${
        inverted ? 'bg-ivr-100 text-white' : 'bg-white text-black'
      }`}
    >
      <div>
        <p className="my-4">{svg}</p>
      </div>
      <p className="italic">{body}</p>
      <div>
        <h4 className="font-bold capitalize">{name}</h4>
        <p className="font-sm">{role}</p>
      </div>
    </motion.li>
  );
};

export default TestimonialCard;
