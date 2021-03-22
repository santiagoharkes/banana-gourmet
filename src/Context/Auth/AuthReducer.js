export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
      };

    default:
      return state;
  }
};
