import React from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar';
import Home from './Home';
import Episodes from './Episodes';
import Favorites from './Favorites';

const Router = () => {
    return (
        <>
            <NavBar />
            <br /><br /><br />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={Episodes} />
                <Route exact path='/profile' component={Favorites} />
            </Switch>
        </>
    );
}

export default Router;
