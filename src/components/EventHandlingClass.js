import React, { Component } from 'react'

export class EventHandlingClass extends Component {
    EventHandler(){
        console.log("Clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.EventHandler}>Click Me</button>
      </div>
    )
  }
}

export default EventHandlingClass
