import styles from './mileage.module.css';

const Mileage = () => {
  return (
    <section className={styles.mileage}>
      <aside className={styles.mileage_bg}></aside>
      <article className=" lg:w-[600px] my-10 lg:my-0 lg:px-0 lg:mx-3">
        <section className="">
          <h4 className="text-2xl font-semibold bg-white py-3 lg:px-4 font-titilium">
            What makes us different from others
          </h4>
          <div className=" py-3 bg-white lg:px-4">
            <p className="my-3">
              IVR power works is a{' '}
              <span className="text-orange-600">
                fast growing electrical and electronics
              </span>
              business specializing in the installation and maintenance of
              building electrical fittings and various other electrical
              equipment.
            </p>
            <p className="my-3">
              With a team of{' '}
              <span className="text-orange-600">
                highly skilled professionals and a commitment to delivering
                exceptional service
              </span>
              , we provide reliable and efficient electrical and electronic
              solutions to our valued clients. We pride ourselves on our
              expertise, quality workmanship, and dedication to customer
              satisfaction.
            </p>
            <p className="my-3">
              With a team of{' '}
              <span className="text-orange-600">
                highly skilled professionals and a commitment to delivering
                exceptional service
              </span>
              , we provide reliable and efficient electrical and electronic
              solutions to our valued clients. We pride ourselves on our
              expertise, quality workmanship, and dedication to customer
              satisfaction.
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Mileage;
