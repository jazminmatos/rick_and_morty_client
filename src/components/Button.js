import React from 'react';

import '../css/Button.css'

const Button = (props) => {
    return (
        <div>
            <button className={"button"} onClick={props.onClick}>{props.buttonName}</button>
        </div>
    );
}

export default Button;
