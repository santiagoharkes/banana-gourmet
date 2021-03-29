import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
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
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";

function Routes() {
  const { theme } = useTheme();

  const location = useLocation();

  return (
    <Layout theme={theme}>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Product} />
          <ProtectedRoute
            exact
            path="/mis-favoritos"
            component={MisFavoritos}
          />
          <Route exact path="/garralapala" component={Nada} />
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
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
