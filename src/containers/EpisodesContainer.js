import React, { Component } from 'react';
import { connect } from 'react-redux';

import EpisodesList from '../components/EpisodesList';

class EpisodesContainer extends Component {    
    render() {
        // debugger
        const episodeInfo = this.props.episodes.find(epi => epi.name === this.props.episodeName)
        console.log("EpisodesContainer:", episodeInfo)

        return (
            <div>
                EpisodeName: {this.props.episodeName}
                <EpisodesList episode={episodeInfo}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        episodes: state.episodes.episodes
    }
}

export default connect(mapStateToProps)(EpisodesContainer);
