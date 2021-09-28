import React from 'react';

const Form = (props) => {
    debugger
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                    <br />
                    <label>Episode Name:</label>
                    <input type='text' value={props.state.name} onChange={props.handleChange} name="name"/>
                    <br /><br />
                    <input type='submit' value="Submit"/>
                </form>
        </div>
    );
}

export default Form;
