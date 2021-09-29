import React, { Component } from 'react';

import Button from '../components/Button';

class ButtonContainer extends Component {
    state = {
        // false === it has not been favorited yet
        favoriteToggle: false
    }
    
    handleClick = e => {
        // onClick, send episode data to database
        // if favoriteToggle === false, send a POST fetch request
        // if favoriteToggle === true, send a delete fetch request
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

export default ButtonContainer;

