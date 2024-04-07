import Banner from './home/banner';
import Outstanding from './home/outstanding';
import HomeServices from './home/homeServices';
import Mileage from './home/mileage';
import Rating from './home/rating';
import Partners from './home/partners';
import Testimonials from './home/testimonials';

export default function Home() {
  return (
    <main className="mt-[80px] ">
      <Banner />
      <section className="px-4 md:px-16 my-4">
        <Outstanding />
        <HomeServices />
        <Mileage />
        <Partners />
      </section>
      <Rating />
      <Testimonials />
    </main>
  );
}
