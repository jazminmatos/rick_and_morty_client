import React, { Component } from 'react';
import { connect } from 'react-redux';

import EpisodesList from '../components/EpisodesList';

class EpisodesContainer extends Component {       
    render() {
        const allEpisodes = this.props.allEpisodes.map(epi => <EpisodesList episode={epi} />)
        const episodeFromForm = this.props.allEpisodes.find(epi => epi.name.toLowerCase() === this.props.episodeName.toLowerCase())

        return (
            <div>
                {this.props.episodeName === '' ? "Submit the form to search for an episode or look through all the episodes below:" : <EpisodesList episode={episodeFromForm} />}
                ___________________________________________________
                <br /><br />
                {allEpisodes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allEpisodes: state.episodes.episodes
    }
}

export default connect(mapStateToProps)(EpisodesContainer);



    // console.log("EpisodesContainer:", episodeFromForm)
    // console.log("EpisodesContainer:", allEpisodes)