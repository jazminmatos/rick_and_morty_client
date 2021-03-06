import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharacterButtonContainer from '../containers/CharacterButtonContainer';
import EpisodesList from './EpisodesList';
import { fetchFavorites } from '../actions/EpisodeActions'
import { fetchAllCharacters } from '../actions/CharacterActions'

import LikeCounter from './LikeCounter'

import '../css/Background.css'

class Favorites extends Component {
    allFavorites = () => {
        return this.props.favorites.map(epi => <div key={epi.id}><EpisodesList episode={epi} /><CharacterButtonContainer selectEpisode={epi}/><LikeCounter /><br /><br /></div>)
    }

    componentDidMount() {
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

        if (this.props.characters.length === 0) {
            const faves = this.props.fetchFavorites()
            const chars = this.props.fetchAllCharacters(characterIds())
            
            if (this.props.favorites.length === 0) {
                return faves && chars
            } else {
                return chars
            }
        } 
    }
    
    render() {
        return (
            <div className={"background"}>
                {this.props.favorites.length === 0 ? "You have no favorites yet...what are you waiting for?" : <div>{this.allFavorites()}</div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.episodes.favorites,
        characters: state.characters.characters
    }
}

export default connect(mapStateToProps, { fetchFavorites, fetchAllCharacters })(Favorites);
