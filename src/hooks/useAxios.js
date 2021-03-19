import React, { createContext, useContext, useMemo } from "react";
import Axios from "axios";

export const AxiosContext = createContext(Axios);

export function AxiosProvider({ children }) {
  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    axios.interceptors.request.use((config) => {
      // Leer el token desde localStorage

      const data = localStorage.getItem("authData") || null;
      const authData = data ? JSON.parse(data) : null;
      if (authData?.token) {
        config.headers.Authorization = `Bearer ${authData?.token}`;
      }

      return config;
    });

    return axios;
  }, []);

  return <AxiosProvider value={axios}>{children}</AxiosProvider>;
}

export const useAxios = () => useContext(AxiosContext);
