import React, { Component } from 'react';
import { connect } from 'react-redux';

import EpisodesList from './EpisodesList';

const Favorites = (props) => {
    const allFavorites = props.favorites.map(epi => <EpisodesList key={epi.id} episode={epi} />)
    debugger
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