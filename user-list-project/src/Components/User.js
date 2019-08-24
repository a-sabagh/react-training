import React from 'react';

export default class User extends React.Component {
    removeMe = () => {
        this.props.removeFunc(this.props.id)
    }
    render(){
        return (
            <span>
                id: {this.props.id} +  | name: {this.props.name} +  | age: {this.props.age}
                <button onClick={this.removeMe} >remove</button>
            </span>
        );

    }
}