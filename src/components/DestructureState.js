import React, { Component } from 'react';

class Print extends Component {
  state = {
    fName: "Sai",
    mName: "Kiran",
    lName: "Reddy"
  }

  render() {
    let { fName, mName, lName } = this.state;
    return (
      <h1>{fName} {mName} {lName}</h1>
    );
  }
}

export default Print;
