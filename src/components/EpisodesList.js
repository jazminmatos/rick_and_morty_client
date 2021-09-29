import React from 'react';

import ButtonContainer from '../containers/ButtonContainer'

const EpisodesList = (props) => {
    // map over episode information to get it in a proper format
    // Create a template below of what it will look like
    const { id, name, air_date, episode} = props.episode
    // console.log("EpisodesList", props.episode)
    return (
        <div>
            Episode Name: {name}
            <br />
            Episode Number: {id}
            <br />
            Air Date: {air_date}
            <br />
            Season: {episode}
            <ButtonContainer />
            <br /><br />
        </div>
    );
}

export default EpisodesList;
