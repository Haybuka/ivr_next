import Image from 'next/image';
import styles from '../quote/quote.module.css';
import cls from 'classnames';

const Aside = ({ contactDetails }) => {
  return (
    <aside className={cls(styles.aside)}>
      <ul className="my-4">
        {contactDetails.map((details, index) => (
          <li className="mb-6" key={index}>
            <p className="flex items-center">
              <Image width={20} height={20} src={details.src} alt="" />
              <span className="text-[14px] ml-1 capitalize font-odor">
                {details.title}
              </span>
            </p>
            <p className="text-lg my-2 font-titilium">{details.value}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
