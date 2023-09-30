import React, { Component } from 'react'

class EventHandlingState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "hi",
        };
        // this.EventHandler = this.EventHandler.bind(this);
    }
    // EventHandler() {
    //     this.setState({
    //         name: 'Hello'
    //     });
        
    // }
    EventHandler = () => {
        this.setState({
            name: 'Hello'
        });
        
    }
    

  render() {
    
    return (
      <div>
        {this.state.name}
        <button onClick={this.EventHandler.bind(this)}>Click</button> 
        {/* <button onClick={()=>this.EventHandler()}>Click</button> */}
        {/* <button onClick={this.EventHandler}>Click</button> */}
      </div>
    )
  }
}

export default EventHandlingState
