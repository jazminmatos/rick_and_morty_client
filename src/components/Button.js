import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.buttonName}</button>
        </div>
    );
}

export default Button;
