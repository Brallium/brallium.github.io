import React from 'react';

const CurvedLine= () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            style={{ width: '1700px', 
            height: '800px', 
            position: 'absolute', 
            top: 127, 
            left: 900, 
            zIndex: 0 }}>
      <path d="M0 0 C 10 20, 25 20, 35 0" 
            stroke="#294855" 
            strokeWidth="0.2" 
            fill="transparent" />
    </svg>
  );
};

export default CurvedLine;