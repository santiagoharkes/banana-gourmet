export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        producto: action.payload,
      };

    case "ADD_CATEGORIES":
      return {
        ...state,
        categoria: action.payload,
      };
    default:
      return state;
  }
};
