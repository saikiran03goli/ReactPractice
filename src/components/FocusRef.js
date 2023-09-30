import React, { Component } from 'react';
import InputRef from './InputRef'; 

class ParentComponent extends Component { //input Ref
  constructor(props) {
    super(props);

    this.currentRef = React.createRef();
  }

  clickHandler = () => {
    this.currentRef.current.focusRef();
  }

  render() {
    return (
      <div>
        <InputRef ref={this.currentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default ParentComponent;
