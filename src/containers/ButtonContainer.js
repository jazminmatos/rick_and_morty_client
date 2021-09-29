import React from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { addFavorite, removeFavorite } from '../actions/EpisodeActions'

const ButtonContainer = (props) => {
    const findFavorites = props.favorites.find(epi => epi.id === props.selectEpisode.id)

    const handleClick = e => {     
        findFavorites ? props.removeFavorite(props.selectEpisode) : props.addFavorite(props.selectEpisode)
    }
    
    const buttonName = findFavorites ? "Remove From Favorites 💔" : "Add To Favorites ❤️"
    
    return (
        <div>
            <Button onClick={handleClick} buttonName={buttonName}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        favorites: state.episodes.favorites
    }
}

export default connect(mapStateToProps, { addFavorite, removeFavorite })(ButtonContainer);


