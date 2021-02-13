import React from "react";
import ReactDOM from "react-dom";

// Components
import Routes from "Routes";
import { ThemeProvider } from "Context/ThemeContext";

// Styles
import { GlobalStyles } from "GlobalStyles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
