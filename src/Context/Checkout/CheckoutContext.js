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
  detalles: "",
  adicionales: 0,
  direccion: "",
};

export function CheckoutContextProvider({ children }) {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState);
  const { cartItems, total: subtotal } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const cartItemsIds = cartItems
      .map((valor) => {
        if (valor.quantity > 1) {
          let nuevoArray = [];
          for (let index = 0; index < valor.quantity; index++) {
            nuevoArray.push(valor._id);
          }
          return nuevoArray;
        } else {
          return valor._id;
        }
      })
      .flat();

    setProductos(cartItemsIds);
    setPrecio(Number(subtotal));
    setTotal();

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

  const setDetalles = (payload) => {
    dispatch({ type: "SET_DETALLES", payload });
  };

  const setAdicionales = (payload) => {
    dispatch({ type: "SET_ADICIONALES", payload });
  };

  const setDireccion = (payload) => {
    dispatch({ type: "SET_DIRECCION", payload });
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
    setDetalles,
    setAdicionales,
    setDireccion,
  };

  return (
    <CheckoutContext.Provider value={contextValues}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);
