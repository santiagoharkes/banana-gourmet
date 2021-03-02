const darkTheme = {
  backgroundColor: "#212121",
  textColor: "#eaeaea",
  yellow: "#fbc320",
  subtitleColor: "#b0b0b0",
};

const lightTheme = {
  backgroundColor: "#eaeaea",
  textColor: "#212121",
  yellow: "#fbc320",
  subtitleColor: "#373737",
};

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      localStorage.setItem("themeContext", action.payload);

      return {
        ...state,
        theme: action.payload,
        colors: action.payload === "dark" ? darkTheme : lightTheme,
      };
    default:
      return state;
  }
};
