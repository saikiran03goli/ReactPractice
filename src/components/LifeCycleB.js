import React, { Component } from 'react'

 class LifeCycleB extends Component {
    componentDidMount(){
        console.log("Did Mount Method-B")
    }
    componetDidUpdate(){
        console.log("Component Update-B");
    }
  render() {
    return (
      <div>
        <h1>LifeCycle-B</h1>
      </div>
    )
  }
}

export default LifeCycleB
