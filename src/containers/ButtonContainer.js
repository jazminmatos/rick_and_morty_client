import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { addFavorite, removeFavorite } from '../actions/EpisodeActions'

class ButtonContainer extends Component {
    state = {
        // false === it has not been favorited yet
        favoriteToggle: false
    }
    
    handleClick = e => {
        // onClick, send episode data to database
        // if favoriteToggle === false, send a POST fetch request to Rails app
        this.props.addFavorite(this.props.selectEpisode)
        // if favoriteToggle === true, send a delete fetch request to Rails app
        

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

export default connect(null, { addFavorite, removeFavorite })(ButtonContainer);

