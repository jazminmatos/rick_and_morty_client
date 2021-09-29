import React, { Component } from 'react';

class Favorites extends Component {
    componentDidMount() {
        // fetch favorites from Rails app

        // Maybe give the episode a notes section so that I can save notes based on episodes
    }
    
    render() {
        return (
            <div>
                You have no favorites yet...what are you waiting for?
            </div>
        );
    }
}

export default Favorites;

