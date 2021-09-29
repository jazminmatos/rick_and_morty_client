import React, { Component } from 'react';

import FormContainer from '../containers/FormContainer';
import EpisodesContainer from '../containers/EpisodesContainer';
import { connect } from 'react-redux';
import { fetchEpisodes, fetchFavorites } from '../actions/EpisodeActions'


class Episodes extends Component {
    state = {
        episodeName: ''
    }

    // callback method to transfer data from FormConatiner component to sibling - EpisodeContainer
    episodeNameQuery = (episodeFromForm) => {
        this.setState({
            episodeName: episodeFromForm
        })
    }
    
    componentDidMount() {
        // There are a total of 41 Rick and Morty episodes
        const AllEpisodesParameters = () => {
            const length = 41
            let numArray = []
            for (let i = 1; i <= length; i++) {
                numArray.push(i)
            }
            const rangeString = numArray.join()
            return rangeString
        }

        this.props.fetchEpisodes(AllEpisodesParameters())
        this.props.fetchFavorites()
    }

    render() {
        return (
            <div>
                <FormContainer episodeName={this.episodeNameQuery}/>
                <EpisodesContainer episodeName={this.state.episodeName}/>
            </div>
        );
    }
}

export default connect(null, { fetchEpisodes, fetchFavorites })(Episodes);

