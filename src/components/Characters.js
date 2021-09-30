import React from 'react';

const Characters = (props) => {
    const { name, status, species, gender, image } = props.selectCharacter
    
    return (
        <div>
            <img src={image} alt={name}></img>
            <br />
            Name: {name}
            <br />
            Status: {status}
            <br />
            Species: {species}
            <br />
            Gender: {gender}
            <br />
        </div>
    );
}

export default Characters;
