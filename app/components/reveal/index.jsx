import React from 'react';

const RevealMotion = ({ children, width = 'fit-content' }) => {
  return (
    <div
      style={{ width, position: 'relative', overflow: 'hidden' }}
      className=" bg-yellow-500 lg:px-4"
    >
      {children}
    </div>
  );
};

export default RevealMotion;
