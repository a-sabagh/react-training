import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }
  /*static getDerivedStateFromProps(props, states) {
    console.log("Call from [App.js] getDrivedStateFromProps",props);
    console.log("Call from [App.js] getDrivedStateFromProps",states);
    states = {
      color: "orange"
    }
    return state;
  }*/
  /*shouldComponentUpdate(){
    return false;
  }*/
  /*getSnapshotBeforeUpdate(preProps,prevStates){
    return prevStates;
  }*/
  changeColor = () => {
    this.setState({
      color: "blue"
    });
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        color: "black"
      })
    }, 3000);
  }
  componentDidUpdate(){
    let colorArr = ["violet","green","yellow","blue","red","greenyellow","orange"];
    let length = colorArr.length;
    let index = Math.floor(Math.random() * length);
    let color = colorArr[index];
    setTimeout(() => {
      this.setState({
        color: color
      })
    }, 3000);
  }
  render(){
    let style = { color: this.state.color }
    return (
      <div>
        <button onClick={this.changeColor}>change color to blue</button>
        <h1 style={style}>Hello I'm Abolfazl Sabagh</h1>
      </div>
     );
  }
}

export default App;
