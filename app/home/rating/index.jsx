import Link from 'next/link';
import styles from './rating.module.css';
import Button from '@/app/components/button';

const ratings = [
  { rating: '50+', title: 'Clients', text: 'Serviced' },
  { rating: '100+', title: 'Projects', text: 'Completed' },
  { rating: '10+', title: 'awards', text: 'received' },
  // { rating: '100+', title: 'Projects', text: 'completed' },
];

const Rating = () => {
  return (
    <section className="md:my-32 my-0">
      <aside className="flex flex-col md:mt-3 lg:px-4 relative lg:before:absolute before:bottom-0 before:bg-ivr-100 before:h-1/2 before:w-full before:left-0 before:content-[''] before:-z-10">
        <aside className={styles.float}>
          <div className="w-full lg:w-[420px] my-10 md:my-0 md:pt-28 px-4">
            <h3 className="text-xl capitalize  font-normal font-odor">
              Do you need
              <span className="text-ivr-100"> Help with electrical </span>
              maintenance ?
            </h3>
            <p className="font-normal font-titilium my-4">
              Ivr power works is a system of highly tech engineering solutions
              with a track record of excellence, reliability, experience and
              trustworthiness with projects completed across Lagos and western
              Nigeria
            </p>
            <div className="flex gap-4 ">
              <Link href={'/contact'}>
                <Button text={'Call now'} />
              </Link>
              <Link href={'/contact'}>
                <Button text={'Get Quote'} />
              </Link>
            </div>
          </div>
          <div className={styles.div}></div>
        </aside>
      </aside>
      <aside className="grid grid-cols-12 px-20 my-14 md:py-20 gap-4 bg-ivr-100 ">
        {ratings.map((rate, id) => (
          <article
            key={id}
            className="text-center lg:text-left lg:order-l-2 border-l-white lg:pl-10 md:w-auto col-span-12 md:col-span-12 py-10 lg:py-0 lg:col-span-4 lg:flex justify-center capitalize text-white"
          >
            <div>
              <h5 className="text-2xl font-semibold font-titilium">
                {rate.rating}
              </h5>
              <p>
                <span className="block font-odor tracking-widest">
                  {rate.title}
                </span>
                <span className="block tracking-widest font-odor">
                  {rate.text}
                </span>
              </p>
            </div>
          </article>
        ))}
      </aside>
    </section>
  );
};

export default Rating;
