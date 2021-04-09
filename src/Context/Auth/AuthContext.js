import React, { createContext, useReducer, useContext } from "react";
import Cookies from "js-cookie";

import { AuthReducer } from "./AuthReducer.js";

const AuthContext = createContext();

const initialState = {
  user: null,
  loading: false,
};

export function AuthContextprovider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setUser = (payload) => {
    dispatch({ type: "SET_USER", payload });
  };

  const setLoading = (payload) => {
    dispatch({ type: "LOADING", payload });
  };

  const login = (payload) => {
    dispatch({ type: "LOGIN", payload });
  };

  const register = (payload) => {
    dispatch({ type: "REGISTER", payload });
  };

  const logout = () => {
    Cookies.remove("token");
    dispatch({ type: "LOGOUT" });
  };

  const loginError = () => {
    dispatch({ type: "LOGIN_ERROR" });
  };

  const contextValues = {
    ...state,
    login,
    setLoading,
    logout,
    setUser,
    register,
    loginError,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
