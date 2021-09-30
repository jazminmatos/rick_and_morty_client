import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Characters from '../components/Characters'
import { fetchAllCharacters } from '../actions/CharacterActions';

const CharacterButtonContainer = (props) => {
    const characterIds = props.selectEpisode.characters.map(charUrl => parseInt(charUrl.match(/\d+$/)[0], 10))
    
    const handleClick = e => {
        // Retrieve characters from redux using characterIds - state.characters.characters
        console.log(props.characters)
        console.log("CharacterBC", characterIds)
    }

    return (
        <div>
            <Button onClick={handleClick} buttonName={"Show Characters"}/>
            <Characters /> {/* RENDER CHARACTERS COMPONENT IF I'VE CLICKED BUTTON */}
        </div>
    );
    // RENDER EITHER SHOW CHARACTERS OR HIDE CHARACTERS
}

const mapStateToProps = state => {
    return {
        characters: state.characters.characters
    }
}

export default connect(mapStateToProps, { fetchAllCharacters })(CharacterButtonContainer);

// This is reliant on whether or not I clicked the button, so I should use state in this

