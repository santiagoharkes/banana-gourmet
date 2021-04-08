/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

import { useTheme } from "Context/Theme/ThemeContext";

import Layout from "layout/Layout";
import Home from "pages/Home";
import Nada from "pages/Nada";
import Login from "pages/Login";
import Register from "pages/Register";
import Cart from "pages/Cart";
import Product from "pages/Product";
import MisFavoritos from "pages/MisFavoritos";
import MisPedidos from "pages/MisPedidos";
import Checkout from "pages/Checkout";
import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";
import PedidoDone from "pages/CheckoutDone";
import PedidoFail from "pages/CheckoutFail";
import Pedido from "pages/Pedido";
import Busqueda from "pages/Busqueda";
import ForgotPassword from "pages/ForgotPassword";
import { useAuth } from "Context/Auth/AuthContext";
import { useAxios } from "hooks/useAxios";

function Routes() {
  const { theme } = useTheme();
  const { setLoading, setUser } = useAuth();
  const axios = useAxios();

  const location = useLocation();

  const token = Cookies.get("token") || null;

  useEffect(() => {
    if (token) {
      setLoading();
      axios.get(`/users/me/`).then((res) => {
        const userLogged = {
          jwt: token,
          user: res.data,
        };
        console.log("****** CHEQUEANDO SI TOY LOGUEADO ******");
        setUser(userLogged);
      });
    } else {
      setUser(null);
    }
  }, [axios, token]);

  return (
    <Layout theme={theme}>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product" component={Product} />
          <ProtectedRoute
            exact
            path="/mis-favoritos"
            component={MisFavoritos}
          />
          <ProtectedRoute exact path="/mis-pedidos" component={MisPedidos} />
          <ProtectedRoute exact path="/checkout" component={Checkout} />
          <ProtectedRoute exact path="/pedido" component={Pedido} />
          <Route exact path="/pedido/done" component={PedidoDone} />
          <Route exact path="/pedido/fail" component={PedidoFail} />
          <Route exact path="/search" component={Busqueda} />
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
