import { useAuth } from "Context/Auth/AuthContext";
import { useCart } from "Context/Cart/CartContext";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import { CheckoutReducer } from "./CheckoutReducer";

const CheckoutContext = createContext();

const initialState = {
  estadoPedido: "pendiente",
  estadoEnvio: "preparacion",
  tarjeta: undefined,
  efectivo: undefined,
  productos: [],
  precio: undefined,
  code: "",
  delivery: undefined,
  takeAway: undefined,
  propina: 0,
  usuario: "",
  total: 0,
  envio: 0,
};

export function CheckoutContextProvider({ children }) {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState);
  const { cartItems, total: subtotal } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const cartItemsIds = cartItems.map((valor) => valor._id);

    setProductos(cartItemsIds);
    setPrecio(subtotal);
    setTotal(Number(subtotal), Number(state.propina), Number(state.envio));

    if (user) {
      setUsuario(user.user._id);
    }
  }, [cartItems, user, subtotal, state.propina, state.envio]);

  const setTarjeta = (payload) => {
    dispatch({ type: "PAGO_TARJETA", payload });
  };

  const setEfectivo = (payload) => {
    dispatch({ type: "PAGO_EFECTIVO", payload });
  };

  const setProductos = (payload) => {
    dispatch({ type: "CHECKOUT_PRODUCTOS", payload });
  };

  const setPrecio = (payload) => {
    dispatch({ type: "CHECKOUT_PRECIO", payload });
  };

  const setCode = (payload) => {
    dispatch({ type: "CHECKOUT_CODE", payload });
  };

  const setDelivery = (payload) => {
    dispatch({ type: "CHECKOUT_DELIVERY", payload });
  };

  const setTakeAway = (payload) => {
    dispatch({ type: "CHECKOUT_TAKE_AWAY", payload });
  };

  const setPropina = (payload) => {
    dispatch({ type: "CHECKOUT_PROPINA", payload });
  };

  const setUsuario = (payload) => {
    dispatch({ type: "CHECKOUT_USUARIO", payload });
  };

  const setTotal = (precio, propina, envio) => {
    dispatch({ type: "CHECKOUT_TOTAL", precio, propina, envio });
  };

  const contextValues = {
    ...state,
    setTarjeta,
    setEfectivo,
    setProductos,
    setPrecio,
    setCode,
    setDelivery,
    setTakeAway,
    setPropina,
    setUsuario,
  };

  return (
    <CheckoutContext.Provider value={contextValues}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);
