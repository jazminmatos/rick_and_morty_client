import React, { Component } from 'react';

import Form from '../components/Form';

class FormContainer extends Component {
    state = {
        name: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        
        this.setState({
            [name]: value
        })     
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            name: ''
        })
        
        // Check Redux store to see if it exists already, if not, do a fetch request
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} value={this.state} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default FormContainer;
