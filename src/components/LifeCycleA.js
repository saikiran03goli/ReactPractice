import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCycle A Constructor");
    this.state = {
      name: 'Life Cycle A'
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedStateFromProps Method-A");
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount-A");
  }

  componentDidUpdate() {
    console.log("Component Update-A");
  }
  componentWillUnmount(){
    console.log("Unmount method")
  }
  handleChange = () => {
    this.setState({
      name: 'Changed'
    });
  }
  

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.handleChange}>Change</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
