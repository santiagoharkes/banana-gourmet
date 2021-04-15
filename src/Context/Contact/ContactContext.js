import React, { createContext, useReducer, useContext } from "react";
import { ContactReducer } from "./ContactReducer";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const initialState = {
    pedido: false,
    contact: false,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const contactFromPedido = () => {
    dispatch({ type: "FROM_PEDIDO" });
  };

  const contactFromContact = () => {
    dispatch({ type: "FROM_CONTACT" });
  };

  const resetAllContact = () => {
    dispatch({ type: "RESET_CONTACT" });
  };

  return (
    <ContactContext.Provider
      value={{
        ...state,
        contactFromPedido,
        contactFromContact,
        resetAllContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
