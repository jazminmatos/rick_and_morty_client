import React, { Component } from 'react';

import FormContainer from '../containers/FormContainer';
import EpisodesContainer from '../containers/EpisodesContainer';
import { connect } from 'react-redux';
import { fetchEpisodes, fetchFavorites } from '../actions/EpisodeActions'


class Episodes extends Component {
    state = {
        episodeName: ''
    }

    // callback method to transfer data from FormContainer component to sibling - EpisodeContainer
    episodeNameQuery = (episodeFromForm) => {
        this.setState({
            episodeName: episodeFromForm
        })
    }
    
    componentDidMount() {
        // There are a total of 41 Rick and Morty episodes
        const allEpisodesIds = () => {
            const length = 41
            let numArray = []
            for (let i = 1; i <= length; i++) {
                numArray.push(i)
            }
            const rangeString = numArray.join()
            return rangeString
        }

        if (this.props.episodes.length === 0) {
            return this.props.fetchEpisodes(allEpisodesIds()) 
        }

        if (this.props.favorites.length === 0) {
            return this.props.fetchFavorites()
        }
    }

    render() {
        return (
            <div>
                <FormContainer episodeName={this.episodeNameQuery}/>
                {this.props.isLoading ? "Loading episodes..." : <EpisodesContainer episodeName={this.state.episodeName}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.episodes.loading,
        episodes: state.episodes.episodes,
        favorites: state.episodes.favorites
    }
}

export default connect(mapStateToProps, { fetchEpisodes, fetchFavorites })(Episodes);

