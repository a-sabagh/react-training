import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    constructor(props){
        super(props);
    }
    static defaultProps = {
        age: 0
    }
    static propTypes = {
        age: PropTypes.number
    }
    getColor = () => {
        return (this.props.age >= 18)? "green" : "red";
    }
    render(){
        return(
            <div className="user-wrapper">
                <h3>{this.props.fullname}</h3>
                <p>{this.props.biography}</p>
                <p style={{color: this.getColor()}}>{this.props.age}</p>
            </div>
        );
    }
}
export default User;