import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';

const CharacterButtonContainer = (props) => {
    const handleClick = e => {
        // fetch from each character URL listed in episode.characters
        // Can access specific episode via props.selectEpisode
    }

    return (
        <div>
            <Button onClick={handleClick} buttonName={"Show Characters"}/>
        </div>
    );
}

export default CharacterButtonContainer;
