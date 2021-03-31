import React, { createContext, useReducer, useContext } from "react";
import { ThemeReducer } from "./ThemeReducer";

const ThemeContext = createContext({});

const storage = localStorage.getItem("themeContext")
  ? localStorage.getItem("themeContext")
  : "dark";

const initialState = {
  theme: storage,
  colors:
    storage === "dark"
      ? {
          backgroundColor: "#212121",
          backgroundColorSecondary: "#272727",
          textColor: "#eaeaea",
          yellow: "#fbc320",
          subtitleColor: "#b0b0b0",
          successBackground: "#00d717",
          errorBackground: "#ff0018",
          pendingBackground: "#ff921f",
          yendoBackground: "#1f96ff",
        }
      : {
          backgroundColor: "#eaeaea",
          backgroundColorSecondary: "#ddd",
          textColor: "#212121",
          yellow: "#fbc320",
          subtitleColor: "#373737",
          successBackground: "#00d717",
          errorBackground: "#ff0018",
          pendingBackground: "#ff921f",
          yendoBackground: "#1f96ff",
        },
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
