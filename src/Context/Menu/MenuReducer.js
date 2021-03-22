export const MenuReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        isVisible: action.isVisible,
      };
    case "HIDE_MENU":
      return {
        ...state,
        isVisible: action.isVisible,
      };

    default:
      return state;
  }
};
