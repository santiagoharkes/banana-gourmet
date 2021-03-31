export const PedidoReducer = (state, action) => {
  switch (action.type) {
    case "SET_PEDIDO":
      return {
        ...state,
        pedido: action.payload,
      };

    case "SET_ESTADO_PEDIDO":
      return {
        ...state,
        pedidoCorrecto: action.payload,
      };

    default:
      return state;
  }
};
