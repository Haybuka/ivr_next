'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useAnimate, useInView } from 'framer-motion';
import Slider from './slider';
import ProgressUi from './progressUi';

const testimonials = [
  {
    body: `""Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda."`,
    idRef: 'boxOne',
    initial: { x: 0 },
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        class="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title></title>
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path>
      </svg>
    ),
    name: 'Anderson Lima',
    role: 'Product Manager, Slack',
  },
  {
    body: `""Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda."`,
    idRef: 'boxTwo',
    initial: { x: 580, scale: 1.1 },
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        class="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title></title>
        <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"></path>
      </svg>
    ),
    name: 'Jane Dodson',
    role: 'Marketing Director, Nike',
  },
  {
    body: `""Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda."`,
    idRef: 'boxThree',
    initial: { x: 610, scale: 1.15 },
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        class="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title></title>
        <path d="M7.12 11.084a.683.683 0 00-1.16.126L.075 22.974a.703.703 0 00.63 1.018h8.19a.678.678 0 00.63-.39c1.767-3.65.696-9.203-2.406-12.52zM11.434.386a15.515 15.515 0 00-.906 15.317l3.95 7.9a.703.703 0 00.628.388h8.19a.703.703 0 00.63-1.017L12.63.38a.664.664 0 00-1.196.006z"></path>
      </svg>
    ),

    name: 'Johnathan Rodriguez',
    role: 'UX Research, Atlassian',
  },
  {
    body: `""Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda."`,
    idRef: 'boxFour',
    initial: { x: 640, scale: 1.2 },
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        class="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title></title>
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path>
      </svg>
    ),

    name: 'Paschal Haybuka',
    role: 'Software developer, Atlassian',
  },
];

const Testimonials = () => {
  const [scope, animate] = useAnimate();
  const [progress, setProgress] = useState([]);
  const isInView = useInView(scope);
  const [isCompleted, setIsCompleted] = useState(false);
  const handleAnimateBoxCallback = useCallback(async () => {
    await animate('#progress0', { width: '100%' }, { duration: 5 });
    await animate('#boxTwo', { x: 0, scale: 1 }, { duration: 0.2, delay: 0.2 });
    await animate('#progress1', { width: '100%' }, { duration: 5, delay: 0.2 });
    await animate(
      '#boxThree',
      { x: 0, scale: 1 },
      { duration: 0.2, delay: 0.2 }
    );
    await animate('#progress2', { width: '100%' }, { duration: 5, delay: 0.2 });
    await animate(
      '#boxFour',
      { x: 0, scale: 1 },
      { duration: 0.2, delay: 0.2 }
    );
    await animate(
      '#progress3',
      { width: '100%' },
      {
        duration: 5,
        delay: 0.2,
        onComplete: (data) => {
          console.log('completed');
          setIsCompleted((prev) => !prev);
        },
      }
    );
  }, [animate]);

  const createProgressBar = (cardLength) => {
    const newArray = [];
    for (let i = 0; i < cardLength; i++) {
      newArray.push(`progress${i}`);
    }
    setProgress(newArray);
  };

  useEffect(() => {
    createProgressBar(testimonials.length);
    if (isInView) {
      handleAnimateBoxCallback();
    }
  }, [isInView, handleAnimateBoxCallback, isCompleted]);

  return (
    <section
      className="lg:grid grid-cols-12 my-12 overflow-x-hidden hidden lg:hidden"
      ref={scope}
    >
      <aside className="col-span-7 flex justify-center items-center p-4 md:p-16">
        <div>
          <h3 className="text-2xl font-semibold bg-white py-3 font-titilium">
            What our customers think
          </h3>
          <p className="my-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            commodi sint, similique cupiditate possimus suscipit delectus illum
            eos iure magnam!.
          </p>
          <ul className="flex gap-x-4 my-6">
            {progress.map((data, id) => (
              <ProgressUi idRef={data} key={id} />
            ))}
          </ul>
        </div>
      </aside>
      <aside className="col-span-5 px-6 py-6 md:px-10 lg:py-28 lg:px-0">
        <Slider scope={scope} testimonials={testimonials} />
      </aside>
    </section>
  );
};

export default Testimonials;
