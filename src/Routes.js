import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "layout/Layout";

import Home from "pages/Home";
import Nada from "pages/Nada";

import { useTheme } from "Context/ThemeContext";

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
          <Route exact path="/pelotudo" component={Nada} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Routes;
