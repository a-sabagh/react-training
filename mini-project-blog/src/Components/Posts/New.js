import './new.css';
import React from 'react';

class New extends React.Component {
     title = null;
     body = null;
     newPost = (e) => {
          e.preventDefault();
          if(0 === this.title.value.length || 0 === this.body.value.length){
               alert("All inputs is require");
               return;
          }
          let post = {
               title: this.title.value,
               body: this.body.value
          }
          this.props.callback(post);
          this.title.value = "";
          this.body.value = "";
     }
     render() {
          return (
               <div className="page-content" >
                    <form method="post">
                         <h1 className="page-title">Add New Post</h1>
                         <div className="form-group">
                              <input ref={el => this.title = el} type="text" placeholder="Post Title" />
                         </div>
                         <div className="form-group" >
                              <textarea ref={el => this.body = el} placeholder="Post Body"></textarea>
                         </div>
                         <div className="form-group">
                              <input onClick={this.newPost} type="submit" ></input>
                         </div>
                    </form>
               </div>
          );
     }
}

export default New;