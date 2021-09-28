import React, { Component } from 'react';

import FormContainer from '../containers/FormContainer';
import EpisodesContainer from '../containers/EpisodesContainer';


class Episodes extends Component {
    
    render() {
        return (
            <div>
                <FormContainer />
                <EpisodesContainer />
            </div>
        );
    }
}

export default Episodes;

