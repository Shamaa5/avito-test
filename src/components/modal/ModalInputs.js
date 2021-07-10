import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {postComment} from "../../redux/actions";
import {useParams} from "react-router-dom";

function ModalInputs(props) {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [comment, setComment] = useState('')
    const params = useParams()
    const addName = (e) => {
        setName(e.target.value)
    }
    const addComment = (e) => {
        setComment(e.target.value)
    }
    const uploadNewComment = (id, name, text) => {
        dispatch(postComment(id, name, text, props.modal.comments))
    }
    return (
        <div className="modalInputs">
            <div>
                <input type="text"
                       placeholder="Ваше имя"
                       value={name}
                       onChange={addName}
                />
            </div>
            <div>
                <input type="text"
                       placeholder="Ваш комментарий"
                       value={comment}
                       onChange={addComment}
                />
            </div>
            <button onClick={() => uploadNewComment(params.id, name, comment)}>
                Оставить комментарий
            </button>
        </div>
    );
}

export default ModalInputs;