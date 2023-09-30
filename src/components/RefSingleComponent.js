import React, { Component } from 'react';

class RefSingleComponent extends Component {
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
        <input ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

export default RefSingleComponent;
