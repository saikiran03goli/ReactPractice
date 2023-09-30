import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('child class')}>Click Child</button>
    </div>
  );
}

export default ChildComponent;
