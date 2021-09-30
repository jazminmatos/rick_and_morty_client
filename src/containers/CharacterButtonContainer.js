import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Characters from '../components/Characters'

const CharacterButtonContainer = (props) => {
    const handleClick = e => {
        // fetch from each character URL listed in episode.characters
        // Can access specific episode via props.selectEpisode
    }

    return (
        <div>
            <Button onClick={handleClick} buttonName={"Show Characters"}/>
            <Characters /> {/* RENDER CHARACTERS COMPONENT IF I'VE CLICKED BUTTON */}
        </div>
    );
    // RENDER EITHER SHOW CHARACTERS OR HIDE CHARACTERS
    // // Need to make it so that characters only show up if they match the episode they're in
}

export default CharacterButtonContainer;
