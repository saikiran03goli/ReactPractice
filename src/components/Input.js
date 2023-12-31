import React from 'react'

// function Input() { 
//   return (
//     <div>
//       <input type='text'/>
//     </div>
//   )
// }

const Input = React.forwardRef((props, ref) => {  //RefParentInput
    return (
      <div>
        <input type='text' ref={ref} />
      </div>
    );
  });
  
  export default Input;