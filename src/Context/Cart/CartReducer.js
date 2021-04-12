import {
  SUMAR_PRODUCTO,
  RESTAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LIMPIAR_CARTA,
  CHECKOUT,
  SET_EXTRAS,
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
  let total = Number(
    cartItems
      .reduce((total, product) => total + product.precio * product.quantity, 0)
      .toFixed(2)
  );
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

    // case SET_EXTRAS:
    //   const isInExtras = state.extras?.filter((extra) => {
    //     if (
    //       extra.index === action.payload.index &&
    //       extra.idProducto === action.payload.idProducto
    //     ) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   });

    //   const nuevoArray =
    //     isInExtras?.length > 0 && state.extras?.length > 0
    //       ? state.extras?.map((extra) => {
    //           if (
    //             extra.index === action.payload.index &&
    //             extra.idProducto === action.payload.idProducto
    //           ) {
    //             return action.payload;
    //           } else {
    //             return extra;
    //           }
    //         })
    //       : [...state.extras, action.payload];

    //   return {
    //     ...state,
    //     extras: nuevoArray,
    //   };

    case SET_EXTRAS:
      const isInExtras = state.extras?.filter((extra) => {
        if (
          extra.index === action.payload.index &&
          extra.idProducto === action.payload.idProducto
        ) {
          return true;
        } else {
          return false;
        }
      });

      const nuevoArray = state.extras?.map((extra) => {
        if (
          extra.index === action.payload.index &&
          extra.idProducto === action.payload.idProducto
        ) {
          return action.payload;
        } else {
          return extra;
        }
      });

      return {
        ...state,
        extras:
          isInExtras?.length > 0 && state.extras?.length > 0
            ? nuevoArray
            : state.extras.length > 0
            ? [...state.extras, action.payload]
            : [action.payload],
      };

    case CHECKOUT:
      return {
        ...state,
        extras: [],
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    case LIMPIAR_CARTA:
      return {
        ...state,
        extras: [],
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state;
  }
};
