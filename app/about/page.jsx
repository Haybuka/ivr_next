import Card from '../components/card';

import styles from './about.module.css';
import Banner from './banner';

const about = [
  {
    id: 1,
    title: 'Expertise and Experience',
    text_one:
      'With years of experience in the industry, our team has the knowledge and skills to handle projects of any scale or complexity. ',
    text_two:
      ' We stay up-to-date with the latest technological advancements to deliver innovative solutions tailored to our clients specific requirements.',
    imageSrc: '/services/services_4.jpg',
  },
  {
    id: 2,
    title: 'Electrical Maintenance',
    text_one:
      'Our team of experts provides regular maintenance and inspection services to ensure that your electrical systems are functioning optimally and comply with safety standards. ',
    text_two:
      ' We offer preventive maintenance, troubleshooting, and repairs to minimize downtime and extend the lifespan of your electrical equipme ',
    imageSrc: '/services/services_3.jpg',
  },
  {
    id: 3,
    title: 'Automation Systems',
    text_one:
      'We specialize in designing and installing advanced automation systems for residential and commercial properties. ',
    text_two:
      ' Our solutions include smart lighting, home automation, security systems, access control, energy management, and more. We integrate cutting-edge technology to enhance comfort, convenience, and energy efficiency',
    imageSrc: '/services/services_2.jpg',
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

export const metadata = {
  title: 'IVR | About',
  description:
    'Ivr power works, a fast growing system of electrical engineering services. ',
};

const Index = () => {
  return (
    <main className="mt-20 md:px-0">
      <Banner />
      <section className={styles.about}>
        <h4 className="text-3xl font-semibold   lg:px-4 font-titilium text-center my-10 md:my-20">
          Why Choose Us ?
        </h4>

        {about.map((item, id) => (
          <Card data={item} key={id} />
        ))}
      </section>
    </main>
  );
};

export default Index;
