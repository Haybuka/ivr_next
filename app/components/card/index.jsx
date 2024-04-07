import React from 'react';
import Image from 'next/image';
import cls from 'classnames';
import RevealMotion from '../reveal';

const Card = ({ data: { id, title, text_one, text_two, imageSrc } }) => {
  return (
    <section
      className={cls(
        'flex justify-center px-4 md:px-0 items-center my-10 md:my-32',
        id % 2 === 0
          ? 'flex-col-reverse md:flex-row-reverse'
          : 'flex-col-reverse md:flex-row'
      )}
    >
      <aside className="w-full my-4 md:w-[500px] ">
        <RevealMotion>
          <h4 className="text-2xl font-semibold bg-white lg:px-4 font-titilium ">
            {title}
          </h4>
        </RevealMotion>

        <div className=" bg-white lg:px-4">
          <RevealMotion>
            <p className="my-3">{text_one}</p>
          </RevealMotion>
          <RevealMotion>
            <p className="my-3">{text_two}</p>
          </RevealMotion>
        </div>
      </aside>
      <aside className="h-[400px] w-full md:w-[600px] bg-black">
        <Image
          src={imageSrc}
          alt=""
          className="h-full w-full"
          width={600}
          height={400}
        />
      </aside>
    </section>
  );
};

export default Card;
