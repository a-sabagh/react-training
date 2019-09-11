import React from 'react';
import Post from './Post';
class Posts extends React.Component {
     render() {
          return(
               <div className="page-content" >
                    <h1 className="page-title">Posts Archive</h1>
                    {this.props.posts.map(post => (
                         <Post key={post.id} title={post.title} body={post.body} />
                    ))}
               </div>
          );
     }
}

export default Posts;