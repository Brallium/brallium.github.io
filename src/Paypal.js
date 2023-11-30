import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

function Paypal() {
    const handleButtonClick = () => {
      // Handle button click logic here
      console.log('Button clicked!');
    };
  
    return (
      <button onClick={handleButtonClick}>
        <ElfsightWidget widgetID="b879c7bd-4f97-4ce2-8913-d156e4180c8d" />
      </button>
    );
  }
  
  export default Paypal;