import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Routes from "Routes";
import { AxiosProvider } from "hooks/useAxios";
import Providers from "Context/Providers/Providers";

// Styles
import "./index.css";
import { GlobalStyles } from "GlobalStyles/GlobalStyles";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <Providers>
          <GlobalStyles />
          <Router>
            <Routes />
          </Router>
        </Providers>
      </QueryClientProvider>
    </AxiosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
