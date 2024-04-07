import styles from './banner.module.css';
import cls from 'classnames';
import BannerHeading from './heading';

const Banner = ({ text = 'About Us' }) => {
  return (
    <section className={cls(styles.banner)}>
      <BannerHeading text={text} />
    </section>
  );
};

export default Banner;
