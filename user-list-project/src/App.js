import React from 'react';
import User from './Components/User';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {id:1,name:"Abolfazl",age: 26},
        {id:2,name:"Reza",age:32},
        {id:3,name:"Alireza",age:40}
      ]
    }
  }
  removeUser = (id) => {
    let filteredUsers = this.state.users.filter(user => user.id != id);
    this.setState({users: filteredUsers})
  }

  showUsers = () => {
    return (
      this.state.users.map((user,index) => 
        <li key={index}>
          <User id={user.id} name={user.name} age={user.age} removeFunc={this.removeUser} />
        </li>
      )
    );
  }

  addUser = () => {
    let name = prompt("Enter name");
    let age = prompt("Enter age");
    let newState = {...this.state}
    let id = 1;
    if(newState.users.length){
      id = newState.users[newState.users.length - 1].id + 1
    }
    let newUser = {
      id: id,
      name: name,
      age: age
    }
    newState.users.push(newUser);
    this.setState(newState);
    
  }

  render() {
    return (
      <div>
        <ul>{this.showUsers()}</ul>
        <button onClick={this.addUser} >add user</button>
      </div>
    );
  }
}

export default App;
