export const CheckoutReducer = (state, action) => {
  switch (action.type) {
    case "PAGO_TARJETA":
      return {
        ...state,
        tarjeta: true,
        efectivo: false,
      };

    case "PAGO_EFECTIVO":
      return {
        ...state,
        tarjeta: false,
        efectivo: true,
        delivery: false,
        takeAway: true,
        envio: 0,
        propina: 0,
      };

    case "CHECKOUT_PRODUCTOS":
      return {
        ...state,
        productos: action.payload,
      };

    case "CHECKOUT_PRECIO":
      return {
        ...state,
        precio: Number(action.payload),
      };

    case "CHECKOUT_CODE":
      return {
        ...state,
        code: action.payload,
      };

    case "CHECKOUT_DELIVERY":
      return {
        ...state,
        delivery: true,
        takeAway: false,
        envio: 50,
      };

    case "CHECKOUT_TAKE_AWAY":
      if (state.efectivo || state.tarjeta) {
        return {
          ...state,
          takeAway: true,
          delivery: false,
          envio: 0,
        };
      } else {
        return {
          ...state,
          takeAway: true,
          efectivo: true,
          delivery: false,
          envio: 0,
        };
      }

    case "CHECKOUT_PROPINA":
      return {
        ...state,
        propina: Number(action.payload),
      };

    case "CHECKOUT_USUARIO":
      return {
        ...state,
        usuario: action.payload,
      };

    case "CHECKOUT_TOTAL":
      const numeroTotal = (
        action.precio +
        action.propina +
        action.envio
      ).toFixed(2);

      return {
        ...state,
        total: Number(numeroTotal),
      };

    default:
      return state;
  }
};
