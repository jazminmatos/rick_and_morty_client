import React from 'react';

import ButtonContainer from '../containers/ButtonContainer'

const EpisodesList = (props) => {
    const { id, name, air_date, episode} = props.episode

    return (
        <div>
            Episode Name: {name}
            <br />
            Episode Number: {id}
            <br />
            Air Date: {air_date}
            <br />
            Season: {episode}
            <ButtonContainer selectEpisode={props.episode}/>
            <br /><br />
        </div>
    );
}

export default EpisodesList;
