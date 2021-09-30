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

    characterAllData = () => {
        const charObj = this.props.characters.filter(character => this.characterIds().includes(character.id))
        return charObj
    }

    handleClick = e => {
        console.log("GOAL", this.characterAllData())
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
                {this.state.showingCharacters ? <Characters selectCharacters={this.characterAllData()}/> : null}
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
