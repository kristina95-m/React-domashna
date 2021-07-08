import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Albums} from './Albums';
import {Posts} from './Posts';
import {Navigation} from './Navigation';
import {API_URL} from './../constants';

export function App() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        fetch(`${API_URL}/posts`)
            .then(res => res.json())
            .then(json => setAlbums(json))
            .catch(err => alert(err))
    
    }, [])

    return(
        <div id = 'app'>
            <h2>App</h2>
            <Navigation/>
            <Switch>
                <Route path = '/posts' component = {Posts}/>
                <Route path = '/albums' render = {() => {
                    return <Albums albumList = {albums}/>
                }}/>
            </Switch>
        </div>
    )
}