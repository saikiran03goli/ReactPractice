import React,{Component} from 'react'

class ConditionalRendering extends Component{
    state = {
        isLoggedIn: false
      };
    
    render(){
        return this.state.isLoggedIn && <div> Welcome User</div>
        // return this.state.isLoggedIn ? (
        //     <div>Welcome User</div>
        //   ) : (
        //     <div>Welcome Home</div>
        //   );
        // if(!this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Home
        //         </div>
        //     );
        // }
        // else{
        //     return (
        //         <div>
        //             Welcome User
        //         </div>
        //     )
        // }
        // let message;
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome User
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome Home
        //         </div>
        //     )
            
        // }
        
}
}
export default ConditionalRendering;