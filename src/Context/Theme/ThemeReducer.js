const darkTheme = {
  backgroundColor: "#212121",
  backgroundColorSecondary: "#272727",
  textColor: "#eaeaea",
  yellow: "#fbc320",
  subtitleColor: "#b0b0b0",
  successBackground: "#00b714",
  errorBackground: "#ff0018",
  pendingBackground: "#ff921f",
  yendoBackground: "#1f96ff",
};

const lightTheme = {
  backgroundColor: "#eaeaea",
  backgroundColorSecondary: "#ddd",
  textColor: "#212121",
  yellow: "#fbc320",
  subtitleColor: "#373737",
  successBackground: "#00b714",
  errorBackground: "#ff0018",
  pendingBackground: "#ff921f",
  yendoBackground: "#1f96ff",
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
