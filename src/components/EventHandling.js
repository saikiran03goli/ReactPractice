import React from 'react';

function EventHandling(){
    function clickHandler(){
        console.log("Button Clicked")
    }
    return(
            <div>
            <button onClick={clickHandler}>Click</button>
            </div>   
    );
}
export default EventHandling;