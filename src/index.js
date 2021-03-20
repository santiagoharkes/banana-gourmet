import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Components
import Routes from "Routes";
import { AxiosProvider } from "hooks/useAxios";
import Providers from "Context/Providers/Providers";

// Styles
import { GlobalStyles } from "GlobalStyles/GlobalStyles";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <Providers>
          <GlobalStyles />
          <Routes />
        </Providers>
      </QueryClientProvider>
    </AxiosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
