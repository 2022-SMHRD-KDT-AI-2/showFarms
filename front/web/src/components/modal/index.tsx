import React, {ChangeEvent, Dispatch, SetStateAction, useEffect} from "react";
import {ModalBackground, ModalContainer} from "../../styles/layout";


interface IModal {
    component: React.ReactNode,
    onCloseModal: () => void
}

const Modal: React.FC<IModal> = ({component, onCloseModal}) => {
    return (
        <ModalBackground onClick={onCloseModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                {component}
            </ModalContainer>
        </ModalBackground>
    )
}

export default Modal