import React,{Component} from 'react';

class Print extends Component{
    render(){
        let {name_1,name_2,name_3}=this.props;
        return (
                <h1>{name_1}{name_2}{name_3}</h1>
        );
    }
}
export default Print;