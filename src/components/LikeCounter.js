import React, { Component } from 'react';
import Button from './Button';

class LikeCounter extends Component {
    state = {
        counter: 0
    }

    handleClick = (e) => {
        const newLike = this.state.counter + 1

        this.setState({
            counter: newLike
        })
    }
    
    render() {
        return (
            <div>
            <br />
                <Button onClick={this.handleClick} buttonName={"LIKE ME *burps*"}/>
                {this.state.counter}
            </div>
        );
    }
}

export default LikeCounter;
