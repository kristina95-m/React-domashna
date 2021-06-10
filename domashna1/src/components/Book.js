import React from 'react';

export function Book(props) {

    console.log(props);
    
    
    return(
        <div id = 'book'>
            <h2>Book Title: {props.kniga.Title}</h2>
            <h2>Book Author: {props.kniga.Author}</h2>
            <h2>Book Pages: {props.kniga.Pages}</h2>
        </div>
    )
}