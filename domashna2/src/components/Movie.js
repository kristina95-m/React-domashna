import React from 'react';
import PropTypes from 'prop-types';


export function Movie(props) {

    console.log(props)
    return(
        <div id = 'movie'>
            <table border = '2'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Genre</th>
                        <th>imdbLink</th>
                        <th>imgUrl</th>
                    </tr>
                </thead>

                <tbody>
                    {props.filmovi.map((film, i) => {
                        return(
                            <tr key = {i}>
                                <td>
                                    {film.name}
                                </td>

                                <td>
                                    {film.date}
                                </td>

                                <td>
                                    {film.genre}
                                </td>

                                <td>
                                    {film.imdbLink}
                                </td>

                                <td>
                                    {film.imgUrl}
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )

}


Movie.propTypes = {
    filmovi: PropTypes.array,
    name: PropTypes.string,
    date: PropTypes.string,
    genre: PropTypes.string
}