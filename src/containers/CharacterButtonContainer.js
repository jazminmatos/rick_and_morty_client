import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Characters from '../components/Characters'
import { fetchAllCharacters } from '../actions/CharacterActions';

class CharacterButtonContainer extends Component {
    state = {

    }

    characterIds = () => { 
        return this.props.selectEpisode.characters.map(charUrl => parseInt(charUrl.match(/\d+$/)[0], 10))
    }

    handleClick = e => {
        // Retrieve characters from redux using characterIds - state.characters.characters
        console.log(this.props.characters)
        console.log("CharacterBC", this.characterIds())
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.handleClick} buttonName={"Show Characters"}/>
                <Characters /> {/* RENDER CHARACTERS COMPONENT IF I'VE CLICKED BUTTON */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters.characters
    }
}

export default connect(mapStateToProps, { fetchAllCharacters })(CharacterButtonContainer);

// This is reliant on whether or not I clicked the button, so I should use local state in this
// ButtonContainer is reliant on whether or not the user has favorites, so I use global state in that
