import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { addFavorite, removeFavorite } from '../actions/EpisodeActions'

class ButtonContainer extends Component {
    state = {
        // false === it has not been favorited yet
        favoriteToggle: false
        // ADD LOGIC THAT CHECKS WHETHER episode ALREADY EXISTS IN FAVORITES
        // IF IN FAVORITES, STATE SHOULD BE TRUE
    }
    
    handleClick = e => {     
        // console.log(this.props.selectEpisode) 
        this.state.favoriteToggle ? this.props.removeFavorite(this.props.selectEpisode) : this.props.addFavorite(this.props.selectEpisode)

        this.setState({
            favoriteToggle: !this.state.favoriteToggle
        })
    }
    
    render() {
        const buttonName = this.state.favoriteToggle ? "Remove From Favorites 💔" : "Add To Favorites ❤️" 
        
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

