import React from 'react';
import {Book} from './Book';
import {Boolean} from './Boolean';

let book1 = {
    Title: 'Il nome della rosa',
    Author: 'Umberto Eco',
    Pages: 624
    
}

let book2 = {
    Title: 'Palomar',
    Author: 'Italo Calvino',
    Pages: 192
    
}

export function App() {
   return(
    <div id = 'app'>
        <h2>App active</h2>
        <Book kniga = {book1} /><br/><br/>
        <Book kniga = {book2} /><br/><br/>
        <Boolean showBook = {true} hideBook = {false} />
    </div>
   )
}