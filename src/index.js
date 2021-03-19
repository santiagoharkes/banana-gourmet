import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Components
import Routes from "Routes";
import { ThemeProvider } from "Context/Theme/ThemeContext";
// import { AxiosProvider } from "hooks/useAxios";

// Styles
import { GlobalStyles } from "GlobalStyles/GlobalStyles";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    {/* <AxiosProvider> */}
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
    {/* </AxiosProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
