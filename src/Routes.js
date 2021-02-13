import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "layout/Layout";
import Home from "pages/Home";

import { useTheme } from "Context/ThemeContext";

function Routes() {
  const { ...state } = useTheme();

  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(state.theme);
  }, [state.theme]);

  return (
    <Layout theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default Routes;
