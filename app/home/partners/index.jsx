'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Partners = () => {
  return (
    <section>
      <h4 className="text-2xl font-semibold bg-white py-3 px-4 text-center my-5 font-titilium">
        Our partners
      </h4>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        centeredSlides
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>
          <Image
            priority
            src="/home/IOGC-Logo_Color.svg"
            height={140}
            width={100}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="/home/Chorus.svg"
            height={140}
            width={100}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            priority
            src="/home/lamata.png"
            height={140}
            width={100}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            priority
            src="/home/oou.jpeg"
            height={140}
            width={100}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority src="/home/tap.svg" height={140} width={80} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="/home/IOGC-Logo_Color.svg"
            height={140}
            width={100}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Partners;
