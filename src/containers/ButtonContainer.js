import React, { Component } from 'react';

import Button from '../components/Button';

class ButtonContainer extends Component {
    state = {
        favoriteToggle: false
    }
    
    handleClick = e => {
        // onClick, send episode data to database
        // send a POST fetch request
        // on successful request, disable button
        this.setState({
            favoriteToggle: !this.state.favoriteToggle
        })
    }
    
    render() {
        const buttonName = !this.state.favoriteToggle ? "Add To Favorites ♥️" : "Remove From Favorites 💔"
        
        return (
            <div>
                <Button onClick={this.handleClick} buttonName={buttonName}/>
            </div>
        );
    }
}

export default ButtonContainer;

