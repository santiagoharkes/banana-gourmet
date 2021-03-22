import React, { createContext, useReducer, useContext, useEffect } from "react";
import Cookies from "js-cookie";

import { useAxios } from "hooks/useAxios";
import { AuthReducer } from "./AuthReducer.js";
// import {
//   SUMAR_PRODUCTO,
//   RESTAR_PRODUCTO,
//   AGREGAR_PRODUCTO,
//   ELIMINAR_PRODUCTO,
//   LIMPIAR_CARTA,
//   CHECKOUT,
// } from "../../utils/constants";

const AuthContext = createContext();

const initialState = {
  user: null,
  loading: false,
};

export function AuthContextprovider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const axios = useAxios();

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      dispatch({ type: "LOADING" });
      axios.get(`/users/me/`).then((res) => {
        const userLogged = {
          jwt: token,
          user: res.data,
        };
        setUser(userLogged);
      });
    }
  }, [axios]);

  const setUser = (payload) => {
    dispatch({ type: "SET_USER", payload });
  };

  const setLoading = () => {
    dispatch({ type: "LOADING" });
  };

  const login = (payload) => {
    dispatch({ type: "LOGIN", payload });
  };

  const register = (payload) => {
    dispatch({ type: "REGISTER", payload });
  };

  const logout = (payload) => {
    Cookies.remove("token");
    dispatch({ type: "LOGOUT" });
  };

  const contextValues = {
    ...state,
    login,
    setLoading,
    logout,
    setUser,
    register,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
