import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";
import {Route} from "react-router-dom";

function Photos() {

   const photos = useSelector(state => state.photos.items)
    return (
        <Route path="/">
            <ul className="photos">
                {photos.map(album => {
                    return <Photo key={album.id}
                                   album={album}
                    />
                })}
            </ul>
        </Route>

    );
}

export default Photos;