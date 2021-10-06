import React from 'react';

import '../css/Home.css'

const Home = () => {
    return (
        <div>
            <img src="title.png" alt="Rick and Morty logo" className="image"/>
            <h3 className="welcome">Welcome to the Rick and Morty Episode Tracker! Click Episodes to look for Rick and Morty episodes. Keep track of your favorites!</h3>
        </div>
    );
}

export default Home;
