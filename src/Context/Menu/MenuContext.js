import React, { createContext, useReducer, useContext } from "react";
// import { productos } from "../../services/dummy";
import { MenuReducer } from "./MenuReducer";

const MenuContext = createContext();

export const Menuprovider = ({ children }) => {
  const initialState = {
    isVisible: false,
  };

  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const showMenu = () => {
    dispatch({ type: "SHOW_MENU", isVisible: true });
  };

  const hideMenu = () => {
    dispatch({ type: "HIDE_MENU", isVisible: false });
  };

  return (
    <MenuContext.Provider value={{ ...state, showMenu, hideMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
