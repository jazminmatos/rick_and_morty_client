import React, { Component } from 'react';

import EpisodesList from '../components/EpisodesList';

class EpisodesContainer extends Component {    
    render() {
        // debugger
        return (
            <div>
                EpisodeName: {this.props.episodeName}
                <EpisodesList />
            </div>
        );
    }
}

export default EpisodesContainer;
