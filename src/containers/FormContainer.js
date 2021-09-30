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
        
        this.props.episodeName(this.state.name)

        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label>Episode Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <input type='submit' value="Submit"/>
                </form>
            </div>
        )
    }
}

export default FormContainer;
