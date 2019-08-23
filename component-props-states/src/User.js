import React from 'react';
import ReactDom from 'react-dom';
class User extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="user-wrapper">
                <h3>{this.props.fullname}</h3>
                <p>{this.props.biography}</p>
            </div>
        );
    }
}

export default User;