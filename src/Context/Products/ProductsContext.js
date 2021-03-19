import React, { createContext, useReducer, useContext } from "react";
// import { productos } from "../../services/dummy";
import { ProductsReducer } from "./ProductsReducer";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const initialState = {
    productos: [],
    categorias: [],
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const storeProducts = (payload) => {
    dispatch({ type: "ADD_PRODUCTS", payload });
  };

  const storeCategories = (payload) => {
    dispatch({ type: "ADD_CATEGORIES", payload });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, storeProducts, storeCategories }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
