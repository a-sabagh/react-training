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
      ],
      searchValue: "",
      searchUsers: [],
    }
  }
  removeUser = (id) => {
    let filteredUsers = this.state.users.filter(user => user.id != id);
    this.setState({users: filteredUsers})
  }

  showUsers = () => {
      let users = (this.state.searchValue.length)? this.state.searchUsers : this.state.users;
      return (
      users.map((user,index) => 
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

  searchUsers = (e) => {
    let newState = {...this.state};
    let searchValue = e.target.value;
    let regexp = new RegExp(searchValue);
    let users = this.state.users.filter(user => {
      return user.name.match(regexp);
    });
    newState.searchUsers = users;
    newState.searchValue = searchValue;
    console.log(newState.users,newState.searchUsers);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <input type="text" name="search" onChange={this.searchUsers} placeholder="Search..." />
        <ul>{this.showUsers()}</ul>
        <button onClick={this.addUser} >add user</button>
      </div>
    );
  }
}

export default App;
