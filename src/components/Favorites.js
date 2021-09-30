// need to add componentDidMount to fetch from Rails backend



import React, { Component } from 'react';
import { connect } from 'react-redux';

import CharacterButtonContainer from '../containers/CharacterButtonContainer';
import EpisodesList from './EpisodesList';
import { fetchFavorites } from '../actions/EpisodeActions'

class Favorites extends Component {
    allFavorites = () => {
        return this.props.favorites.map(epi => <div><EpisodesList key={epi.id} episode={epi} /><CharacterButtonContainer selectEpisode={epi}/><br /><br /></div>)
    }

    componentDidMount() {
        // fetch all my favorites from Rails backend instead of using state but only if redux state is empty
        if (this.props.favorites.length === 0) {
            return this.props.fetchFavorites()
        } 
    }
    
    render() {
        // const allFavorites = this.props.favorites.map(epi => <div><EpisodesList key={epi.id} episode={epi} /><CharacterButtonContainer selectEpisode={epi}/><br /><br /></div>)

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

export default connect(mapStateToProps, { fetchFavorites })(Favorites);
