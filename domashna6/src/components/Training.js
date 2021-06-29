import React from 'react';
import PropTypes from 'prop-types';


export function Training(props) {


    return(
        <div id = 'training'>
            <table border = '2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Year</th>
                    </tr>
                </thead>

                <tbody>
                    {props.people.map((person, i) => {
                        return(
                            <tr key = {person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.lastName}</td>
                                <td>{person.year}</td>
                            </tr>
                        )

                    })}
                    
                </tbody>
            </table>
        </div>
    )
}


