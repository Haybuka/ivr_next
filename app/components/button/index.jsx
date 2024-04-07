'use client';
import cls from 'classnames';
import styles from './button.module.css';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Button = ({ text, propStyle, handleClick }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width, height } = e.target.getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      const left = `${(offsetX / width) * 100}%`;
      const right = `${(offsetY / height) * 100}%`;

      spanRef.current.animate(
        { left, right },
        { duration: 250, fill: 'forwards' }
      );
    };

    const handleMouseLeave = (e) => {
      spanRef.current.animate(
        { left: '-20%' },
        { duration: 100, fill: 'forwards' }
      );
    };

    btnRef.current.addEventListener('mousemove', handleMouseMove);
    btnRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener('mousemove', handleMouseMove);
      btnRef?.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return (
    <motion.button
      ref={btnRef}
      onClick={handleClick}
      className={cls(styles.btn, styles.btn_bricks, propStyle)}
    >
      <span className=" pointer-events-none relative z-10 ">{text}</span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute -left-20 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F9C8D5] opacity-30"
      ></span>
    </motion.button>
  );
};

export default Button;
