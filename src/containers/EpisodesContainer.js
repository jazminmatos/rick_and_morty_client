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
                <EpisodesList />
            </div>
        );
    }
}

export default EpisodesContainer;
