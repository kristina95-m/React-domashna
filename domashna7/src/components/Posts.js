import React, {useEffect,useState} from 'react';
import {API_URL} from './../constants';

export function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/albums`)
            .then(res => res.json())
            .then(json => setPosts(json))
            .catch(err => alert(err))
    }, [])

    return(
        <div id = 'posts'>
            {
                posts.length > 0 ? <ul>
                    {posts.map(post => {
                        return(
                            <li key = {post.id}>
                                <span>Title: {post.title}</span>
                                <br/>
                                <span>Body: {post.body}</span>
                            </li>
                        )
                    })

                    }
                </ul> : <h2>Loading...</h2>
            }
        </div>
    )
}

