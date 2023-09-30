import React from 'react';
//  function Print({name_1 ,name_2,name_3}){
//     return (
//     <h1>{name_1}{name_2}{name_3}</h1>
//     );
//  }
//  export default Print;

let Print=(props)=>{
let{name_1,name_2,name_3}=props;
return (
    <h1>{name_1}{name_2}{name_3}</h1> );

}
export default Print;