import {
  SUMAR_PRODUCTO,
  RESTAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LIMPIAR_CARTA,
  CHECKOUT,
} from "../../utils/constants";

const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.precio * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      if (!state.cartItems.find((item) => item._id === action.payload._id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    case SUMAR_PRODUCTO:
      const sumarUno = state.cartItems.map((valor) => {
        return valor.id === action.payload.id
          ? { ...valor, quantity: valor.quantity + 1 }
          : valor;
      });

      return {
        ...state,
        ...sumItems(sumarUno),
        cartItems: sumarUno,
      };

    case RESTAR_PRODUCTO:
      const restarUno = state.cartItems.map((valor) => {
        return valor.id === action.payload.id
          ? { ...valor, quantity: valor.quantity - 1 }
          : valor;
      });

      return {
        ...state,
        ...sumItems(restarUno),
        cartItems: restarUno,
      };

    case CHECKOUT:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    case LIMPIAR_CARTA:
      return {
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state;
  }
};
