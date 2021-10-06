import React from 'react';

import '../css/Character.css'

const Characters = (props) => {
    const { name, status, species, gender, image } = props.selectCharacter
    
    return (
        <div className={"character"}>
            <br/>
            <img src={image} alt={name} className={"image"}></img>
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
