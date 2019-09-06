import React from 'react';

class PostInsert extends React.Component {
     titleInput = null;
     bodyInput = null;
     postInsert = (e) => {
          e.preventDefault();
          if("" == this.titleInput.value || "" == this.bodyInput.value){
               alert("All inputs is require, Please fill them");
               return;
          }
          /*const data = new FormData(e.target);*/
          /*const data = e.target.elements.title.value */
          let post = {
               title: this.titleInput.value,
               body: this.bodyInput.value
          }
          this.props.callback(post);
          this.titleInput.value = "";
          this.bodyInput.value = "";
     }
     render(){
          return (
               <form method="post" className="post-insert-form"  onSubmit={this.postInsert}  >
                    <div>
                         <input ref={el => this.titleInput = el } type="text" name="title" placeholder="post title" />
                    </div>
                    <div>
                         <textarea ref={el => this.bodyInput = el } name="body" placeholder="post content"></textarea>
                    </div>
                    <div>
                         <input type="submit"/>
                    </div>
               </form>
          );

     }
}

export default PostInsert;