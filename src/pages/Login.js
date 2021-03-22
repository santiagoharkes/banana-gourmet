import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import {
  ImageLoginStyled,
  FormStyled,
  ButtonSubmitStyled,
  GoToRegister,
} from "./LoginElements";
import { useAxios } from "hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";
import { useAuth } from "Context/Auth/AuthContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import Input from "components/Pages/Input/Input";
import PizzaLogin from "../img/pizzaLogin.webp";
import Loading from "components/Loading/Loading";

function Login() {
  const { theme, ...state } = useTheme();
  const axios = useAxios();
  const { login, setLoading, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      history.push("/");
    }
  }, []);

  const [loginData, setLoginData] = useState({
    identifier: null,
    password: null,
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    setLoading();
    axios
      .post(`/auth/local/`, loginData)
      .then((res) => {
        //set token response from Strapi for server validation
        const inFifteenMinutes = new Date(
          new Date().getTime() + 15 * 60 * 1000
        );
        Cookies.set("token", res.data.jwt, {
          expires: inFifteenMinutes,
        });

        //resolve the promise to set loading to false in SignUp form
        login(res.data);
        //redirect back to home page for restaurance selection
        history.push("/");
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        setError(error);
      });
  };

  return (
    <ThemeProvider theme={state.colors}>
      <PageContainer theme={state.colors}>
        <HeaderTitle>Login!</HeaderTitle>
        <HeaderSubtitle>Iniciá sesión para acceder a tu cuenta</HeaderSubtitle>
        {loading ? (
          <Loading h="80" />
        ) : (
          <FormStyled onSubmit={onLoginSubmit}>
            <ImageLoginStyled src={PizzaLogin} />
            <Input
              type="email"
              label="E-mail"
              name="identifier"
              value={loginData.identifier}
              onChange={onInputChange}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              value={loginData.password}
              onChange={onInputChange}
            />
            <ButtonSubmitStyled>Login</ButtonSubmitStyled>
            <GoToRegister theme={state.colors} dark={theme}>
              No tenés una cuenta?
              <span>
                <Link replace to="/register">
                  Registrate!
                </Link>
              </span>
            </GoToRegister>
          </FormStyled>
        )}
      </PageContainer>
    </ThemeProvider>
  );
}

export default Login;
