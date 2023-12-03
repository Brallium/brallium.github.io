import React from 'react';

const SmallerCurvedLine= () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            style={{ width: '1700px', 
            height: '750px', 
            position: 'absolute', 
            top: 127, 
            left: 950, 
            zIndex: 0 }}>
      <path d="M0 0 C 9 14, 18 13, 27 0" 
            stroke="#294855" 
            strokeWidth="0.2" 
            fill="transparent" />
    </svg>
  );
};

export default SmallerCurvedLine;