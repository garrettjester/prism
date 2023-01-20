
import { createContext, useReducer } from "react";

export const MenuContext = createContext();

const INITIAL_STATE = {isOpen: false};

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "OPEN_MENU":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE_MENU":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};