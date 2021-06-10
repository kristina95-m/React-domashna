import React from 'react';


export function Boolean(props) {
    
    console.log(props);
    return(
        <div id = 'boolean'>
            <h2>Boolean</h2>
            {props.showBook === true && <h2></h2>}
        </div>
    )
}