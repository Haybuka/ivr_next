import Image from 'next/image';
import Banner from './home/banner';

export default function Home() {
  return (
    <main className="mt-[80px]">
      <Banner />
      {/* <section className="px-4 md:px-16 my-4">
      <Outstanding />
      <HomeServices />
      <Mileage />
    </section>
    <Rating /> */}
    </main>
  );
}
