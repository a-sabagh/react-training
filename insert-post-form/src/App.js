import React from 'react';
import Post from './Components/Post';
import PostInsert from './Components/PostInsert';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      posts : [
        {id: 1,title: "React",body: "JS FrameWork"},
        {id: 2,title: "Laravel",body: "Artisan For Developers"},
        {id: 3,title: "WordPress",body: "Best CMS"},
        {id: 4,title: "Woocommerce",body: "Best Shop Plugin"}
      ]
    }
  }
  postInsert = (post) => {
    this.setState((oldState,props)=>{
      let newState = {...oldState}
      let id = oldState.posts.length;
      newState.posts = [...oldState.posts,{id:id,...post}];
      return newState;
    });
    
    
  }
  render(){
    return (
      <div className="App">
        <PostInsert callback={this.postInsert} />
        {
          this.state.posts.map(
            (post,index) => (
              <Post key={index} id={post.id} title={post.title} body={post.body} />
            )
          )
        }
      </div>
    );
  }
}

export default App;
