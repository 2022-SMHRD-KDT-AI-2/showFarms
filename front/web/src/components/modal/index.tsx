import React from "react";
import { ModalBackground, ModalContainer } from "../../styles/layout";
import { IModal } from "../../types";

const Modal: React.FC<IModal> = ({ component, onCloseModal }) => {
  return (
    <ModalBackground onClick={onCloseModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {component}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
