export const ContactReducer = (state, action) => {
  switch (action.type) {
    case "FROM_PEDIDO":
      return {
        ...state,
        contact: false,
        pedido: !state.pedido,
      };
    case "FROM_CONTACT":
      return {
        ...state,
        pedido: false,
        contact: !state.contact,
      };

    case "RESET_CONTACT":
      return {
        ...state,
        pedido: false,
        contact: false,
      };

    default:
      return state;
  }
};
