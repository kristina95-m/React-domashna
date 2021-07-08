import React from 'react';
import {Link} from 'react-router-dom';

export function Navigation() {

    return(
        <ul id = 'nav'>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/posts'>Posts</Link></li>
            <li><Link to = '/albums'>Albums</Link></li>
        </ul>
    )
}