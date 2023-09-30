import React from'react'

function Itterate(){
    const names=['sai','kiran','reddy'];
    const allNames=names.map(name=><h2>{name}</h2>)
    return (
    <div>
        {allNames}
    </div>
    );
        
         {/* <h1>{names[0]}</h1>  
         <h1>{names[1]}</h1>  
         <h1>{names[2]}</h1>  */}
         
         
        
    
}
export default Itterate;