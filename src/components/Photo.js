import React from 'react';
import {Link} from "react-router-dom";



function Photo(props) {
    return (
        <li className='photo'>
            <Link to={`/${props.album.id}`}>
                    <img src={props.album.url}/>
            </Link>
        </li>
    );
}

export default Photo;