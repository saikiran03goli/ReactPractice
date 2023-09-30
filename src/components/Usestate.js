import React, { useState } from 'react';

function PrintState() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      {number}<br></br>
      <button onClick={() => setNumber(number+1)}>Click</button>
    </div>
  );
}

export default PrintState;
