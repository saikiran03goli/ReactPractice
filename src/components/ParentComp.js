import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from'./RegularComp'
import MemoComp from './MemoComp'
export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'AAA',
      }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState({
            name: 'AAA',
          });
        }, 2000);
      }
      
    
  render() {
    console.log("parent component")
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name}></MemoComp>
        {/* <PureComp name={this.state.name}></PureComp>
        <RegularComp name={this.state.name}></RegularComp> */}
      </div>
    )
  }
}

export default ParentComp
