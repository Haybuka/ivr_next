// import Card from '../card';

import Card from '@/app/components/card';
import styles from './service.module.css';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: 'Electrical Installation',
      text_one:
        'We offer comprehensive electrical installation services for residential, commercial, and industrial buildings.',
      text_two:
        ' Our experienced electricians ensure safe and efficient installation of electrical systems, including wiring, lighting fixtures, switches, sockets, circuit breakers, and distribution boards.',
      imageSrc: '/services/services_1.jpg',
    },
    {
      id: 2,
      title: 'Electrical Maintenance',
      text_one:
        'Our team of experts provides regular maintenance and inspection services to ensure that your electrical systems are functioning optimally and comply with safety standards. ',
      text_two:
        ' We offer preventive maintenance, troubleshooting, and repairs to minimize downtime and extend the lifespan of your electrical equipme ',
      imageSrc: '/services/services_2.jpg',
    },
    {
      id: 3,
      title: 'Automation Systems',
      text_one:
        'We specialize in designing and installing advanced automation systems for residential and commercial properties. ',
      text_two:
        ' Our solutions include smart lighting, home automation, security systems, access control, energy management, and more. We integrate cutting-edge technology to enhance comfort, convenience, and energy efficiency',
      imageSrc: '/services/services_3.jpg',
    },
    {
      id: 4,
      title: 'Data and Networking Solutions',
      text_one:
        'We offer comprehensive data and networking solutions to meet the increasing demands of the digital age.  ',
      text_two:
        'Our services include structured cabling, network design and installation, wireless network setup, data center infrastructure, and IT equipment installation. We ensure reliable connectivity and seamless data transmission for your business n ',
      imageSrc: '/services/services_1.jpg',
    },
  ];

  return (
    <section className={styles.services}>
      {services.map((service, id) => (
        <Card data={service} key={id} />
      ))}
    </section>
  );
};

export default ServiceSection;
