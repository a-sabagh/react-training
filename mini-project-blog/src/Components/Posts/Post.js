import './post.css';
import React from 'react';

class Post extends React.Component {
     render() {
          return (
               <div className="post-item" >
                    <h4 className="post-title">{this.props.title}</h4>
                    <p className="post-body" >{this.props.body}</p>
               </div>
          );
     }
}

export default Post;