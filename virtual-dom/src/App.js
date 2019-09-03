import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users : [
        {id: 1, name: "Sepehr Sarjamei"},
        {id: 2, name: "Abolfazl Sabagh"},
        {id: 3, name: "Alireza Eskani"},
        {id: 4, name: "Parsa boori"},
        {id: 5, name: "Hadi Kheri"},
      ],
      random: 0
    }
  }
  randomFire = () => {
    let newState = {...this.state}
    newState.random = Math.ceil(Math.random() * 3);
    this.setState(newState);
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.randomFire} >Random Fire</button>
        {this.state.users
        .filter(
          user => (user.id != this.state.random)
        )
        .map(
          user => (
            <p key={user.id}>{user.name}</p>
          )
        )}
      </div>
    );
  }

}

export default App;
