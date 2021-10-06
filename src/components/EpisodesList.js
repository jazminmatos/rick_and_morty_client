import React from 'react';

import EpisodeButtonContainer from '../containers/EpisodeButtonContainer'
import '../css/Episode.css'

const EpisodesList = (props) => {
    const { id, name, air_date, episode} = props.episode

    return (
        <div className={"episode"}>
            Episode Name: {name}
            <br />
            Episode Number: {id}
            <br />
            Air Date: {air_date}
            <br />
            Season: {episode}
            <br /><br />
            <EpisodeButtonContainer selectEpisode={props.episode}/>
        </div>
    );
}

export default EpisodesList;
