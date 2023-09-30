import React, { Component } from 'react';

class InputRef extends Component {  //focus Ref
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusRef() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <input type='text' ref={this.inputRef} />
    );
  }
}

export default InputRef;
