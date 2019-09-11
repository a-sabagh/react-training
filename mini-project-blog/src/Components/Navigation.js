import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';

export default function render(){
     return (
          <nav>
               <ul>
                    <li>
                         <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/new-post">New Post</Link>
                    </li>
                    <li>
                         <Link to="/posts">Blog</Link>
                    </li>
               </ul>
          </nav>
     );
}