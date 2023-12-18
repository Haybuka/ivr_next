import React from 'react';
import Link from 'next/link';
import cls from 'classnames';
import styles from './homeServices.module.css';

const HomeServices = () => {
  const overview = [
    {
      title: 'Electrical Installation',
      description:
        ' We offer comprehensive electrical installation services for residential, commercial, and industrial buildings. Our experienced electricians ensure safe and efficient installation of electrical systems, including wiring, lighting fixtures, switches, sockets, circuit breakers, and distribution boards.',
      id: 1,
    },
    {
      title: 'Electrical Maintenance',
      description:
        'Our team of experts provides regular maintenance and inspection services to ensure that your electrical systems are functioning optimally and comply with safety standards. We offer preventive maintenance, troubleshooting, and repairs to minimize downtime and extend the lifespan of your electrical equipment.',
      id: 2,
    },
    {
      title: 'Automation Systems',
      description:
        'We specialize in designing and installing advanced automation systems for residential and commercial properties. Our solutions include smart lighting, home automation, security systems, access control, energy management, and more. We integrate cutting-edge technology to enhance comfort, convenience, and energy efficiency',
      id: 3,
    },
    {
      title: 'Data and Networking Solutions',
      description:
        'We offer comprehensive data and networking solutions to meet the increasing demands of the digital age. Our services include structured cabling, network design and installation, wireless network setup, data center infrastructure, and IT equipment installation. We ensure reliable connectivity and seamless data transmission for your business ne ',
      id: 4,
    },
  ];

  return (
    <section className="my-10 md:my-32">
      <h4 className="text-2xl font-semibold bg-white py-3 px-4 text-center my-4 font-titilium">
        Our services
      </h4>
      <aside className="grid grid-cols-12 justify-between  items-center flex-wrap gap-4">
        {overview.map((view) => (
          <div key={view.id} className={cls(styles.overview)}>
            <p className="text-4xl font-semibold absolute top-2 left-2 text-orange-600">
              0{view.id}
            </p>
            <h4 className="text-white z-10 text-xl">{view.title}</h4>
          </div>
        ))}
      </aside>
      <Link
        href={'/services'}
        className="relative block before:rounded-md bg-white before:-z-10 before:absolute before:bg-orange-600 before:h-full before:w-full before:-bottom-1 before:-right-1  before:content-[''] border capitalize rounded-md w-[160px] mx-auto text-center my-4 py-3"
      >
        Learn More
      </Link>
    </section>
  );
};

export default HomeServices;
