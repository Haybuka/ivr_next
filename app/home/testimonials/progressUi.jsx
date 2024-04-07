import { motion } from 'framer-motion';

const ProgressUi = ({ idRef }) => {
  return (
    <li className=" w-12 md:w-24 h-1 bg-slate-200 relative">
      <motion.span
        initial={{ width: 0 }}
        id={idRef}
        className="h-full bg-black absolute "
      ></motion.span>{' '}
    </li>
  );
};

export default ProgressUi;
