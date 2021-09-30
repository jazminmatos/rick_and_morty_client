import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Characters from '../components/Characters'
import { fetchAllCharacters } from '../actions/CharacterActions';

class CharacterButtonContainer extends Component {
    state = {
        // false means that characters are NOT showing
        // So, button should be named "show character" 
        showingCharacters: false
    }

    characterIds = () => { 
        return this.props.selectEpisode.characters.map(charUrl => parseInt(charUrl.match(/\d+$/)[0], 10))
    }

    handleClick = e => {
        // Retrieve characters from redux using characterIds - state.characters.characters
        console.log(this.props.characters)
        console.log("CharacterBC", this.characterIds())
        this.setState({
            showingCharacters: !this.state.showingCharacters
        })
    }

    buttonName = () => {
        return this.state.showingCharacters ? "Hide Characters" : "Show Characters"
    }
        
    
    render() {

        return (
            <div>
                <Button onClick={this.handleClick} buttonName={this.buttonName()}/>
                <Characters /> {/* RENDER CHARACTERS COMPONENT IF state.showingCharacters is true */}
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
