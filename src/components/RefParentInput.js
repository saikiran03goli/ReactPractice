import React, { Component } from 'react';
import Input from './Input';

class RefParentInput extends Component { //input reference input.js
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <Input ref={this.inputRef}></Input>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default RefParentInput;
