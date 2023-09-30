import React, { Component } from 'react'
import ChildComponent from'./ChildComponent'
 class ParentComponent extends Component { //child component.js
    constructor(props){
        super(props)
        this.state={
            name:'parent'
        }
        this.greetParent=this.greetParent.bind(this);
    }
    greetParent(childName){
        alert(`Hello ${this.state.name} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent> // here we can call child component
      </div>
    )
  }
}

export default ParentComponent
