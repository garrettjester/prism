import { useContext } from "react";
import { ModalContext } from "./ModalContext";

const useModal = () => {
  const {
    state: { modalOpen, modalContent, onModalDismiss },
    dispatch,
  } = useContext(ModalContext);

  const openModal = (content, onDismiss) =>
    dispatch({ type: "OPEN_MODAL", payload: { content, onDismiss } });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

  return {
    modalOpen,
    modalContent,
    onModalDismiss,
    openModal,
    closeModal,
  };
};

export default useModal;
