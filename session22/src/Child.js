import { useEffect, useState, useRef } from 'react';


const Child = ({ onData, onPdata }) => {
    const sendDataToParent = () => {
        const data = 'Hello from Child Componen111t!';
        onData(data);
        onPdata('ppppppppppppppppp')
      };

return (
    // <div>
        <button onClick={sendDataToParent}>click here</button>
        // </div>
);
}


export default Child;
