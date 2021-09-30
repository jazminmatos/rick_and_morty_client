import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Characters from '../components/Characters'
import { fetchAllCharacters } from '../actions/CharacterActions';

class CharacterButtonContainer extends Component {
    state = {
        showingCharacters: false
    }

    characterIds = () => { 
        return this.props.selectEpisode.characters.map(charUrl => parseInt(charUrl.match(/\d+$/)[0], 10))
    }

    characterAllData = () => {
        const charObj = this.props.characters.filter(character => this.characterIds().includes(character.id))
        return charObj
    }

    handleClick = e => {
        this.setState({
            showingCharacters: !this.state.showingCharacters
        })
    }

    buttonName = () => {
        return this.state.showingCharacters ? "Hide Characters" : "Show Characters"
    }
    
    render() {
        const selectCharactersComponent = this.characterAllData().map(character => <div key={character.id}><Characters selectCharacter={character}/><br /></div>)

        return (
            <div>
                <Button onClick={this.handleClick} buttonName={this.buttonName()}/>
                {this.state.showingCharacters ? <div>{selectCharactersComponent}</div> : null}
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
