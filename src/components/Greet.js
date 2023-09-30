import React,{Component} from 'react';

class Greet extends Component{
state={
    name:"saikiran"
}
render(){
    return <h1>{this.state.name}</h1>
}
}
export default Greet;