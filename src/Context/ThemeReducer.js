export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      localStorage.setItem("themeContext", action.payload);

      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
