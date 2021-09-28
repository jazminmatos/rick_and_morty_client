import React, { Component } from 'react';

import Form from '../components/Form';

class FormContainer extends Component {
    state = {
        name: ''
    }

    // componentDidMount() {

    // }

    handleChange = e => {
        const { name, value } = e.target
        
        this.setState({
            [name]: value
        })     
    }

    // handleSubmit = e => {
        // e.preventDefault()

        // this.setState({
        //     name: ''
        // })
    // }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} value={this.state} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default FormContainer;
