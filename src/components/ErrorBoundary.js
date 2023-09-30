import React from 'react'

function ErrorBoundary({name}) {
    if(name==='Joker'){
        throw new Error('Not A Hero Name')
    }
  return (
    <div>
      {name}
    </div>
  )
}

export default ErrorBoundary
