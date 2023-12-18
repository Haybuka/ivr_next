import styles from './outstanding.module.css';

const Outstanding = () => {
  return (
    <aside className={styles.outstanding}>
      <div className={styles.div}></div>
      <div className="md:w-[420px] my-10 md:my-0 md:py-28 md:px-10">
        <h3 className="text-xl capitalize  font-normal font-odor">
          Track record of an Outstanding{' '}
          <span className="text-orange-600">Residential</span> and{' '}
          <span className="text-orange-600">Commercial</span> services.
        </h3>
        <p className="font-normal font-titilium my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia est
          voluptate illo blanditiis ullam animi amet nihil maxime. Nostrum
          corrupti eum praesentium amet et excepturi autem iure deleniti aliquid
          exercitationem!
        </p>
        <p className="static md:absolute md:top-2/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-2/2 bg-orange-600 py-3 px-6 text-black">
          <span className="block font-odor">Paul Ikwe Alex</span>
          <span className="block">ceo</span>
        </p>
      </div>
    </aside>
  );
};

export default Outstanding;
