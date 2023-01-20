
import { createContext, useReducer } from "react";

export const ModalContext = createContext();

const INITIAL_STATE = {modalOpen: false, modalContent: null, onModalDismiss: null};

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log('ACTION', type)
  switch (type) {
    case "OPEN_MODAL":
      console.log('onDISMISS', payload.onDismiss)
      return {
        ...state,
        modalContent: payload.content,
        modalOpen: true,
        onModalDismiss: payload.onDismiss,
      };
      
    case "CLOSE_MODAL":
      return {
        ...state,
        modalContent: null,
        modalOpen: false,
        onModalDismiss: null
      };
    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};