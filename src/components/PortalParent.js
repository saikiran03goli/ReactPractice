import React from 'react';
import ReactDOM from 'react-dom'

function PortalParent() {
    return (
        ReactDOM.createPortal(
          <h1>Portal Demo</h1> ,
          document.getElementById('Portal-root')
    )
     )
    
  
}

export default PortalParent;
