import React, { Component } from 'react';

class FormContainer extends Component {
    // state = {

    // }

    // componentDidMount() {

    // }

    // handleChange = e => {

    // }

    // handleSubmit = e => {

    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label>Name:</label>
                    <br />
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <br /><br />
                    <input type='submit' value="Submit"/>
                </form>
            </div>
        );
    }
}

export default FormContainer;
