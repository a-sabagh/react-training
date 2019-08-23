import React from 'react';

class ArrayMap extends React.Component {
    render(){
        let animals = ['Lion','Cat','Wildebeest','Cow','Roster'];
        return (
            <ul>
                {animals.map( (animal,index) => <li key={index}>{animal}</li> )}
            </ul>
        );
    }
}

export default ArrayMap;