import React from 'react';
import { Link } from "react-router-dom";

function ModalContent(props) {

    return (
        <div className="flex">
            <div className="modal-img">
                <img src={props.modal.url} alt=""/>
            </div>

            <div>
                {props.modal.id === undefined ? "" : (
                    props.modal.comments.map(value => {
                        return (
                            <div className="comment">
                                <div className="comment-date">
                                    {value.date}
                                </div>
                                <div className="comment-text">
                                 {value.text}
                                </div>
                            </div>
                        )
                    })
                )}
            </div>

            <div className="delete-button">
                <Link to="/">
                    X
                </Link>
            </div>
        </div>
)}

export default ModalContent;