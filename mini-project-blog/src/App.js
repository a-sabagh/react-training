import './App.css';
import React from 'react';
import Nav from './Components/Navigation';
import New from './Components/Posts/New';
import Posts from './Components/Posts/Posts';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    posts: [
      { id: 0, title: "Hello World", body: "I'm Abolfazl Sabagh PHP Developer" }
    ]
  }
  New = (post) => {
    this.setState((oldState,props) => {
      let id = oldState.posts.length;
      post = {id:id,...post};
      let newState = {...oldState,posts: [...oldState.posts,post]};
      return newState;
    });
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" component={Nav} ></Route>
          <Route path="/" exact render={()=> <div className="page-content"><h1>Home</h1></div>} />
          <Route path="/new-post" render={() => <New callback={this.New} />} />
          <Route path="/posts" render={() => <Posts posts={this.state.posts} />} />
        </div>
      </Router>

    );
  }
}

export default App;
