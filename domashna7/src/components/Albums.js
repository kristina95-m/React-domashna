import React from 'react';
import PropTypes from 'prop-types';

export class Albums extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div id = 'albums'>
                {
                    this.props.albumList.map(album => {
                        return(
                            <div key = {album.id}>
                                <p>UserID: {album.userID}</p>
                                <p>Title: {album.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

Albums.propTypes = {
    albumList: PropTypes.array.isRequired
}