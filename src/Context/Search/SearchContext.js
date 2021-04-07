import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [inputText, setInputText] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [nada, setNada] = useState(false);
  const [error, setError] = useState("");

  const contextValues = {
    inputText,
    productosFiltrados,
    nada,
    error,
    setError,
    setNada,
    setInputText,
    setProductosFiltrados,
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
