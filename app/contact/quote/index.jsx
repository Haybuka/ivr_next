import Aside from '../Aside';
import Form from '../form';

const Quote = () => {
  const contactDeets = [
    {
      title: 'email',
      src: '/contact/mail.png',
      value: 'ivrpowerworks@gmail.com',
    },
    {
      title: 'Phone',
      src: '/contact/phone.svg',
      value: '09786275265479',
    },
    {
      title: 'Address',
      src: '/contact/address.png',
      value: '39 Ope Ifa street anthony village, Lagos.',
    },
  ];

  return (
    <section className="my-14 px-4 lg:flex md:px-[50px] lg:px-[110px] justify-center">
      <Aside contactDetails={contactDeets} />
      <Form />
    </section>
  );
};

export default Quote;
