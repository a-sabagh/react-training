import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
     render() {
          return (
               <nav>
                    <h4>Navigation: </h4>
                    <ul>
                         <li>
                              <Link to="/">Home</Link>
                         </li>
                         <li>
                              <Link to="/new-post">New Post</Link>
                         </li>
                         <li>
                              <Link to="/blog">Blog</Link>
                         </li>
                    </ul>
               </nav>
          );
     }
}

export default Navigation;