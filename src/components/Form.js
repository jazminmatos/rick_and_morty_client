import React from 'react';

import '../css/Button.css'

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                    <br />
                    <label>Episode Name:</label>
                    <input type='text' value={props.value} onChange={props.onChange} name="name"/>
                    <br /><br />
                    <input className={"button"} type='submit' value="Submit"/>
                </form>
        </div>
    );
}

export default Form;
