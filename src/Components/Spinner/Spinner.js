import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div
      className="fixed backdrop-blur-sm w-full h-full top-0 bottom-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <button className="spinner-btn absolute top-[47%] left-[47%]">
        <span className="spinner"></span>
      </button>
    </div>
  );
};

export default Spinner;
