/**
**component function**
import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';
ReactDOM.render(<User />,document.getElementById("header"));
*/
/**
modular system
**export**
**import**
import * as allParam from './es_module';
import defaultParam, {firstname,lastname} from './es_module';
console.log(defaultParam,firstname,lastname);
*/

/**
start project
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />,document.getElementById('header'));
ReactDOM.render(<Body />,document.getElementById('body'));
ReactDOM.render(<Footer />,document.getElementById('footer'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
