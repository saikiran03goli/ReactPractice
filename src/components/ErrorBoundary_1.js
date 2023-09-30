import React, { Component } from 'react'

export class ErrorBoundary_1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false
      }
    }
    
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    componentDidCatch(error ,info){
        console.log(error);
        console.log(info);
    }
  render() {
    if(this.state.hasError){
        return <h1> Some Thing Went Wrong</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary_1
