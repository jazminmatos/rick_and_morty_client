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

        // this.setState({
        //     name: ''
        // })
        
        // Check Redux store to see if episode exists
        // send id number back to grand parent (Episodes)
    }

    render() {
        return (
            <div>
                {/* <Form onSubmit={this.handleSubmit} state={this.state} onChange={this.handleChange}/>  */}
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label>Episode Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <br /><br />
                    <input type='submit' value="Submit"/>
                </form>
            </div>
        )
    }
}

export default FormContainer;

 // debugger
        // return (
        //     <div>
        //         <Form onSubmit={this.handleSubmit} value={this.state.name} onChange={this.handleChange}/>
        //     </div>
        // );
