import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {vision: true};
  }
  toggleContent = () => {
    let newStates = {...this.state};
    newStates.vision = !newStates.vision;
    this.setState(newStates);
  }
  showContent = () => {
    let style = {color: "aqua"};
    return (
      <h2 style={style}>Abolfazl Sabagh</h2>
    );
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleContent}>Toggle</button>
        {(this.state.vision && this.showContent())}
      </div>
    );
  }
}


export default App;
