import React from 'react';
import Link from 'next/link';
import Section from './section';
import cls from 'classnames';
import { Inter, Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const Footer = () => {
  const about = ['Our story', 'Designer', 'Products'];
  const support = [`FAQ's`, 'Features', 'Help center'];
  const contact = [`0814 278 7101`, 'Ivrpowerworks@gmail.com'];
  const icons = [
    { name: 'twitter', url: '/social_icons/twitter.svg' },
    { name: 'linkedIn', url: '/social_icons/linked.svg' },
    { name: 'youtube', url: '/social_icons/youtube.svg' },
    { name: 'instagram', url: '/social_icons/insta.svg' },
  ];

  return (
    <footer className="py-6 md:px-16 pt-0 px-4 bg-white text-black">
      <div className="md:flex justify-between items-start flex-row-reverse">
        <Section heading="About us" list={about} />
        <Section heading="Support" list={support} />
        <Section heading="Contact us" list={contact} />
        <section className="mb-6 md:mb-0">
          <aside className="flex items-center text-black font-bold">
            <h3 className="text-ivr-100 font-bold text-2xl lg:text-3xl font-odor ">
              <Link href={'/'} className="inline-block">
                <div className={cls('flex items-start', poppins.className)}>
                  <p className="uppercase ">Ivr</p>
                  <p className="border-l-2 border-black px-2 mx-2 py-0 text-ivr-100">
                    <span className="block text-sm lowercase">Power</span>
                    <span className="block text-sm lowercase">Works</span>
                  </p>
                </div>
              </Link>
            </h3>
          </aside>
          <p className="my-3">
            <span className="block">39 Ope Ifa street, </span>
            <span className="block">anthony village, Lagos.</span>
          </p>
        </section>
      </div>
      <aside className="flex justify-center border-t-2 text-[12px] pt-6 md:mt-10">
        <p>&copy; 2024; IVR Power</p>
      </aside>
    </footer>
  );
};

export default Footer;
