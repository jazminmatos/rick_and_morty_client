import React, { Component } from 'react';

import EpisodesList from '../components/EpisodesList';

class EpisodesContainer extends Component {
    state = {
        isLoading: true
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div>
                Hello from Episodes Container
                <EpisodesList />
            </div>
        );
    }
}

export default EpisodesContainer;
