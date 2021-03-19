export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        productos: action.payload,
      };

    case "ADD_CATEGORIES":
      return {
        ...state,
        categorias: action.payload,
      };
    default:
      return state;
  }
};