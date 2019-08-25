import React from 'react';
import User from './User';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        name: "Abolfazl Sabagh",
        biography: "PHP & React Developer",
        age: 26,
    }
  }
  changeProps = () => {
    let biography = "WordPress Developer";
    if(this.state.biography == biography){
      this.setState({biography: "PHP & React Developer"});
    }else{
      this.setState({biography: "WordPress Developer"});
    }
  }
  render(){
    return (
      <div className="app-wrapper">
        <User 
          fullname={this.state.name} 
          biography={this.state.biography} 
          age={this.state.age}
        />
        <button onClick={this.changeProps}>Click Event</button>
      </div>
      
    );
  }
}

export default App;
