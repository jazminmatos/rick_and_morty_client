import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { addFavorite, removeFavorite } from '../actions/EpisodeActions'


class ButtonContainer extends Component {
    findFavorites = () => {
        const match = this.props.favorites.find(epi => epi.id === this.props.selectEpisode.id)
        return match 
    }

    handleClick = e => {     
        // debugger
        // const findFavorites = this.props.favorites.find(epi => epi.id === this.props.selectEpisode.id)
        this.findFavorites() ? this.props.removeFavorite(this.props.selectEpisode) : this.props.addFavorite(this.props.selectEpisode)
    }
    
    render() {
        const buttonName = this.findFavorites() ? "Remove From Favorites 💔" : "Add To Favorites ❤️" 
        
        return (
            <div>
                <Button onClick={this.handleClick} buttonName={buttonName}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.episodes.favorites
    }
}

export default connect(mapStateToProps, { addFavorite, removeFavorite })(ButtonContainer);

