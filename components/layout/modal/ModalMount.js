import styles from "./ModalMount.module.scss";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useModal from "./useModal";

const Modal = () => {
  const { closeModal, modalOpen, modalContent, onModalDismiss } = useModal();

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [modalOpen]);

  if (modalOpen) {
    return ReactDOM.createPortal(
      <div className={styles.overlay} onClick={() => {
        closeModal();
        onModalDismiss();
      }}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.container}
        >
          {modalContent}
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;
