import styles from './banner.module.css';
import cls from 'classnames';
const Banner = () => {
  return (
    <section className={cls(styles.banner)}>
      <h3 className="text-xl  md:text-3xl uppercase text-white md:ml-6 tracking-widest font-titilium">
        Contact Us
      </h3>
    </section>
  );
};

export default Banner;
