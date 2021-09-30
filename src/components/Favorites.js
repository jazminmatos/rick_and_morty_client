import React from 'react';
import { connect } from 'react-redux';
import CharacterButtonContainer from '../containers/CharacterButtonContainer';

import EpisodesList from './EpisodesList';

const Favorites = (props) => {
    const allFavorites = props.favorites.map(epi => <div><EpisodesList key={epi.id} episode={epi} /><CharacterButtonContainer selectEpisode={epi}/><br /><br /></div>)
    return (
        <div>
            {props.favorites.length === 0 ? "You have no favorites yet...what are you waiting for?" : <div>{allFavorites}</div>}
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        favorites: state.episodes.favorites
    }
}

export default connect(mapStateToProps)(Favorites);

// need to add componentDidMount to fetch from Rails backend