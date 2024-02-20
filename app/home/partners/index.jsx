import Image from 'next/image';

const Partners = () => {
  return (
    <section>
      <h4 className="text-2xl font-semibold bg-white py-3 px-4 text-center my-4 font-titilium">
        Our partners
      </h4>
      <aside className="overflow-x-scroll w-screen ">
        <div className=" flex justify-between overflow-x-hidden">
          <Image
            priority
            src="/home/IOGC-Logo_Color.svg"
            height={150}
            width={100}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src="/home/Chorus.svg"
            height={150}
            width={150}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src="/home/lamata.png"
            height={100}
            width={100}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src="/home/tap.svg"
            height={100}
            width={80}
            alt="Follow us on Twitter"
          />
        </div>
      </aside>
    </section>
  );
};

export default Partners;
