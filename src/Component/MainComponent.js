import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Routes/Home/Home';
import getData from '../Component/Api/GetGraph';
import LandingPage from './Routes/LandingPage';

class MainComponent extends Component {
    
    render() {

        return (
            <>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/LandingPage' component={LandingPage} />

                    <Redirect to="/home" />
                </Switch>
            </>
        );
    }
}

export default MainComponent;