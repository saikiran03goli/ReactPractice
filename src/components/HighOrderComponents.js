import React, { Component } from 'react'

 class HighOrderComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    countHandler = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        });
    }
    
    render() {
        const { count } = this.state;
    
        return (
            <div>
                <button onClick={this.countHandler}>Clicked {count}</button>
            </div>
        );
    }
    
  }

export default HighOrderComponents
