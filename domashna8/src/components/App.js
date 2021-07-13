import React from 'react';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Nav} from './Nav';
import {Route, Switch} from 'react-router-dom';

export function App() {

    return(
        <div id = 'app'>
            <h2>App</h2>
            <Nav/>
            <Switch>
                <Route path = '/home' component = {Home}/>
                <Route path = '/about' component = {About}/>
                <Route path = '/contact' component = {Contact}/>
            </Switch>
        </div>
    )
}