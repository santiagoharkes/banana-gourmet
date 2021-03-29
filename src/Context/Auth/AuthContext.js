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

  console.log({ state });

  useEffect(() => {
    const token = Cookies.get("token") || null;

    // Este useEffect chequea si estoy logueado cada vez que axios cambia. O sea, cuando aparece un token o no.
    // Entonces lo hace solamente cuando te logueas o entras a un path desde el navegador.

    if (token) {
      dispatch({ type: "LOADING" });
      axios.get(`/users/me/`).then((res) => {
        const userLogged = {
          jwt: token,
          user: res.data,
        };
        console.log("****** CHEQUEANDO SI TOY LOGUEADO ******");
        setUser(userLogged);
      });
    } else {
      setUser(null);
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
