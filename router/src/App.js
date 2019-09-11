import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation} ></Route>
        <Route path="/" exact render={() => <h1>Home</h1>} ></Route>
        <Route path="/new-post" exact render={() => <h1>Add New Post</h1>} ></Route>
        <Route path="/blog" exact render={() => <h1>All Posts</h1>} ></Route>
        <Route path="/" component={Footer} ></Route>
      </div>
    </Router>
  );
}

export default App;
