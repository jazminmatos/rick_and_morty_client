import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharacterButtonContainer from '../containers/CharacterButtonContainer';
import EpisodesList from './EpisodesList';
import { fetchFavorites } from '../actions/EpisodeActions'
import { fetchAllCharacters } from '../actions/CharacterActions'

class Favorites extends Component {
    allFavorites = () => {
        return this.props.favorites.map(epi => <div key={epi.id}><EpisodesList episode={epi} /><CharacterButtonContainer selectEpisode={epi}/><br /><br /></div>)
    }

    componentDidMount() {
        if (this.props.favorites.length === 0) {
            return this.props.fetchFavorites()
        } 
        // Retrieve all episodes' character arrays
        // Compare all to get a unique list of urls (so there are no duplicates of a character)
        // fetch all the characters from each episode
        // There are a total of 671 Rick and Morty episodes
        const characterIds = () => {
            const length = 671
            let numArray = []
            for (let i = 1; i <= length; i++) {
                numArray.push(i)
            }
            const rangeString = numArray.join()
            return rangeString
        }
        this.props.fetchAllCharacters(characterIds())

        // Will need to check/manipulate my state.characters.characters in CharacterButtonContainer
    }
    
    render() {
        return (
            <div>
                {this.props.favorites.length === 0 ? "You have no favorites yet...what are you waiting for?" : <div>{this.allFavorites()}</div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.episodes.favorites
    }
}

export default connect(mapStateToProps, { fetchFavorites, fetchAllCharacters })(Favorites);
