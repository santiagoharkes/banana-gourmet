import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import {
  ImageLoginStyled,
  FormStyled,
  ButtonSubmitStyled,
  GoToRegister,
  TestEmailStyled,
  FormContainer,
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
  const { theme } = useTheme();
  const axios = useAxios();
  const { login, setLoading, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      history.push("/");
    }
  }, [history]);

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

        login(res.data);

        history.push("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <PageContainer>
      <HeaderTitle>Login!</HeaderTitle>
      <HeaderSubtitle>Iniciá sesión para acceder a tu cuenta</HeaderSubtitle>
      {loading ? (
        <Loading h="80" />
      ) : (
        <FormContainer>
          {error ? (
            <h1>Hubo un error...</h1>
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
              <GoToRegister dark={theme}>
                No tenés una cuenta?
                <span>
                  <Link replace to="/register">
                    Registrate!
                  </Link>
                </span>
              </GoToRegister>
              <TestEmailStyled dark={theme}>
                test email:
                <span>test@test.com</span>
              </TestEmailStyled>
              <TestEmailStyled dark={theme}>
                test password:
                <span>test1234</span>
              </TestEmailStyled>
            </FormStyled>
          )}
        </FormContainer>
      )}
    </PageContainer>
  );
}

export default Login;
