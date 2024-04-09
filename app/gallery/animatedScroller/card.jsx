import React from 'react';

const AnimatedCard = ({ card }) => {
  const { image, title } = card;
  return (
    <aside
      className="relative h-[400px] w-[300px] bg-ivr-100 flex items-end py-10 px-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <h3 className="capitalize text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm">Subtitle one</p>
      </div>
    </aside>
  );
};

export default AnimatedCard;
