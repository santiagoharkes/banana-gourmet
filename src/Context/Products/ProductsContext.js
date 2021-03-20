import React, { createContext, useReducer, useContext } from "react";
// import { productos } from "../../services/dummy";
import { ProductsReducer } from "./ProductsReducer";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const initialState = {
    categoria: null,
    producto: null,
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const storeCategories = (payload) => {
    dispatch({ type: "ADD_CATEGORIES", payload });
  };

  const storeProducto = (payload) => {
    dispatch({ type: "ADD_PRODUCT", payload });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, storeCategories, storeProducto }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
