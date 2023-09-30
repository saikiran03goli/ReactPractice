import React from 'react'

function ArayIndex() {
    const array=['aaa','bbb','ccc'];
    const arrayElements=array.map((name , index)=><h1 key={index}>{index}{name}</h1>)
  return (
    <div>
      {arrayElements}
    </div>
  )
}

export default ArayIndex
