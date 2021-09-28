import React, { Component } from 'react';

import FormContainer from '../containers/FormContainer';
import EpisodesContainer from '../containers/EpisodesContainer';
import { connect } from 'react-redux';
import { fetchEpisodes } from '../actions/EpisodeActions'


class Episodes extends Component {
    componentDidMount() {
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
    }

    render() {
        return (
            <div>
                <FormContainer />
                <EpisodesContainer />
            </div>
        );
    }
}

export default connect(null, { fetchEpisodes })(Episodes);

