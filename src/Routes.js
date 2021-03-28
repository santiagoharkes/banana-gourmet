import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useTheme } from "Context/Theme/ThemeContext";

import Layout from "layout/Layout";
import Home from "pages/Home";
import Nada from "pages/Nada";
import Login from "pages/Login";
import Register from "pages/Register";
import Cart from "pages/Cart";
import Product from "pages/Product";
import MisFavoritos from "pages/MisFavoritos";

function Routes() {
  const { theme } = useTheme();

  // const [theme, setTheme] = useState("");
  const location = useLocation();

  // useEffect(() => {
  //   setTheme(state.theme);
  // }, [state.theme]);

  return (
    <Layout theme={theme}>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/mis-favoritos" component={MisFavoritos} />
          <Route exact path="/garralapala" component={Nada} />
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

export default Routes;

// DOCS

// PageContainer

// Si se le pasa bgColor, toma ese color de fondo. El color es cualquier color válido en css "red, #fff, etc" como string
// Sino, por defecto es el del tema (dark o light)
