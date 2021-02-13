import React, { createContext, useReducer, useContext } from "react";
import { ThemeReducer } from "./ThemeReducer";

const ThemeContext = createContext({});

const storage = localStorage.getItem("themeContext")
  ? localStorage.getItem("themeContext")
  : "dark";

const initialState = {
  theme: storage,
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const changeTheme = (payload) => {
    dispatch({ type: "CHANGE_THEME", payload });
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, ...state }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
