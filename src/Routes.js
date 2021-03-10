import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useTheme } from "Context/ThemeContext";

import Layout from "layout/Layout";
import Home from "pages/Home";
import Nada from "pages/Nada";
import Login from "pages/Login";
import Register from "pages/Register";
import Cart from "pages/Cart";

function Routes() {
  const { ...state } = useTheme();

  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(state.theme);
  }, [state.theme]);

  return (
    <Router>
      <Layout theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/garralapala" component={Nada} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Routes;

// DOCS

// PageContainer

// Si se le pasa bgColor, toma ese color de fondo. El color es cualquier color válido en css "red, #fff, etc" como string
// Sino, por defecto es el del tema (dark o light)
