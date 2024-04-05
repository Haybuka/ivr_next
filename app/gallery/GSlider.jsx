import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import { sliderBreakpoints } from '../utils';

const GSlider = ({ sliders, handleActiveIndex, activeIndex }) => {
  return (
    <section className="lg:w-2/4">
      <div className="h-[300px]  bg-gray-200 rounded-lg">
        <Image
          width={400}
          height={300}
          alt=""
          src={sliders[activeIndex].img}
          className="w-full h-full"
        />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        className="hidden w-full"
        onSlideChange={(swipe) => {
          handleActiveIndex(swipe.activeIndex);
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={sliderBreakpoints}
      >
        {sliders.map((view, id) => (
          <SwiperSlide
            key={id}
            className=" lg:flex items-center justify-between my-6 "
          >
            <Image
              width={180}
              height={150}
              alt="slides"
              src={view.img}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GSlider;
