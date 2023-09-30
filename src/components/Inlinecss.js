import React from 'react'

function Inlinecss() {
    const Styles={
        color : 'pink',
        fontSize:'20px'
    }
  return (
    <div>
         <h1 className='success'>Style</h1>
      <h1 style={Styles}>Inline Styles</h1>
    </div>
  )
}

export default Inlinecss
