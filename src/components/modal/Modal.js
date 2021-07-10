import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ModalMain from "./ModalMain";
import {useParams} from "react-router-dom"
import {loadModal} from "../../redux/actions";

function Modal() {
    const modal = useSelector(state => state.modal.items)
    const loading = useSelector(state => state.modal.loading)
    const dispatch = useDispatch()
    const params = useParams();
    useEffect( () => {
        if (params.id !== undefined) {
                dispatch(loadModal(params.id))
            }
        }, [dispatch, params])

        if(loading) {
            return (
                <div className="preloadingModal">
                    Loading...
                </div>
            )
        } else {
        return (
                <div className={`${parseInt(params.id) ? "modal-container": "hidden"}`}>
                    <ModalMain modal={modal} />
                </div>
            );
        }
}

export default Modal;