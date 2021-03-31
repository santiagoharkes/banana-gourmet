import React, { createContext, useReducer, useContext } from "react";
import { PedidoReducer } from "./PedidoReducer";

const PedidoContext = createContext();

const initialState = {
  pedido: undefined,
  pedidoCorrecto: undefined,
};

export function PedidoContextProvider({ children }) {
  const [state, dispatch] = useReducer(PedidoReducer, initialState);

  const setPedido = (payload) => {
    dispatch({ type: "SET_PEDIDO", payload });
  };

  const setEstadoPedido = (payload) => {
    dispatch({ type: "SET_ESTADO_PEDIDO", payload });
  };

  const contextValues = {
    ...state,
    setPedido,
    setEstadoPedido,
  };

  return (
    <PedidoContext.Provider value={contextValues}>
      {children}
    </PedidoContext.Provider>
  );
}

export const usePedido = () => useContext(PedidoContext);
