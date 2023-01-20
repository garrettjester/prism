import { useContext } from "react";
import { MenuContext } from "./MenuContext";

const useMenuContext = () => {
  const { state: { isOpen }, dispatch} = useContext(MenuContext);
  const openMenu = () => dispatch({ type: "OPEN_MENU" });
  const closeMenu = () => {
    dispatch({ type: "CLOSE_MENU" })
  }

  return {
    isOpen,
    openMenu,
    closeMenu,
  };
};

export default useMenuContext;