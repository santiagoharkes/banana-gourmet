import React, { createContext, useReducer, useContext } from "react";
import { CartReducer, sumItems } from "./CartReducer.js";
import {
  SUMAR_PRODUCTO,
  RESTAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LIMPIAR_CARTA,
  CHECKOUT,
} from "../../utils/constants";

const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const sumarProducto = (payload) => {
    dispatch({ type: SUMAR_PRODUCTO, payload });
  };

  const restarProducto = (payload) => {
    dispatch({ type: RESTAR_PRODUCTO, payload });
  };

  const agregarProducto = (payload) => {
    dispatch({ type: AGREGAR_PRODUCTO, payload });
  };

  const eliminarProducto = (payload) => {
    dispatch({ type: ELIMINAR_PRODUCTO, payload });
  };

  const limpiarCarta = () => {
    dispatch({ type: LIMPIAR_CARTA });
  };

  const handleCheckout = () => {
    dispatch({ type: CHECKOUT });
  };

  const contextValues = {
    sumarProducto,
    restarProducto,
    agregarProducto,
    eliminarProducto,
    limpiarCarta,
    handleCheckout,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
