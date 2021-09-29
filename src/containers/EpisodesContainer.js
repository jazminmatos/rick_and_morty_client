import React from 'react';
import { connect } from 'react-redux';

import EpisodesList from '../components/EpisodesList';

const EpisodesContainer = (props) => {
    const allEpisodes = props.allEpisodes.map(epi => <EpisodesList key={epi.id} episode={epi} />)
    const episodeFromForm = props.allEpisodes.find(epi => epi.name.toLowerCase() === props.episodeName.toLowerCase())

    return (
        <div>
            {props.episodeName === '' ? "Submit the form to search for an episode or look through all the episodes below:" : <EpisodesList episode={episodeFromForm} />}
            <br />
            ___________________________________________________
            <br /><br />
            {allEpisodes}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        allEpisodes: state.episodes.episodes
    }
}

export default connect(mapStateToProps)(EpisodesContainer);

