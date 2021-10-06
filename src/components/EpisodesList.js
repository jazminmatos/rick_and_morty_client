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
            <EpisodeButtonContainer selectEpisode={props.episode}/>
            <br /><br />
        </div>
    );
}

export default EpisodesList;
