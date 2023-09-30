import React from 'react'
import './AddStyles.css'
function Styles(props) {
    let className=props.primary ? 'primary':''
  return (
    <div>
      <h1 className={className}> Styles Added</h1>
    </div>
  )
}

export default Styles
