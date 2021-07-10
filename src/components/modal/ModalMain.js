import React from 'react';
import ModalContent from "./ModalContent";
import ModalInputs from "./ModalInputs";

function ModalMain(props) {
    return (
        <div className="modal-main">
            <ModalContent modal={props.modal}


            />
            <ModalInputs modal={props.modal}

            />
        </div>
    );
}

export default ModalMain;