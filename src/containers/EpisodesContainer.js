import React, { Component } from 'react';

import EpisodesList from '../components/EpisodesList';

class EpisodesContainer extends Component {    
    render() {
        // debugger
        const episodeInfo = "jesus"

        return (
            <div>
                EpisodeName: {this.props.episodeName}
                <EpisodesList episode={episodeInfo}/>
            </div>
        );
    }
}

export default EpisodesContainer;
