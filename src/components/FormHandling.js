import React, { Component } from 'react';

 class FormHandling extends Component {
  state = {
    userName: '', 
    comments:'',
    topic:'',
  };
 

  handleUserName = (event) => {
    this.setState({
      userName: event.target.value, 
    });
  };
  handleComments=(event)=>{
    this.setState({
        comments: event.target.value, 
    });
  }
  handleTopic=(event)=>{
    this.setState({
        topic:event.target.value
    });
  }
  handleSubmit=(event)=>{
    alert(`${this.state.userName}, ${this.state.comments}, ${this.state.topic}`);
    event.preventDefault(); //it uses the page not refresh after the alert
}
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <label>User Name:</label>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleUserName} /><br></br>
          <label>Comments:</label>
          <textarea type='text' value={this.state.comments} onChange={this.handleComments}/><br></br>
          <label>Topic:</label>
          <select value={this.state.topic} onChange={this.handleTopic}>
          <option value='React'>React</option>
          <option value='Js'>Js</option>
          <option value='Java'>Java</option>
          </select>
          <button type="submit">Submit</button>
      </div>
      </form>
      
    );
  }
}

export default FormHandling;
