import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import {
  ImageLoginStyled,
  FormStyled,
  ButtonSubmitStyled,
  GoToRegister,
} from "./RegisterElements";
import { useAxios } from "hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";
import { useAuth } from "Context/Auth/AuthContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import Input from "components/Pages/Input/Input";
import RegisterImage from "../img/registerImage.webp";
import Loading from "components/Loading/Loading";

function Login() {
  const { theme, ...state } = useTheme();
  const axios = useAxios();
  const { setUser, setLoading, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      history.push("/");
    }
  }, []);

  const [registerData, setRegisterData] = useState({
    username: null,
    email: null,
    password: null,
    nombre: null,
    apellido: null,
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    setLoading();
    axios
      .post(`/auth/local/register/`, registerData)
      .then((res) => {
        //set token response from Strapi for server validation
        Cookies.set("token", res.data.jwt);

        //resolve the promise to set loading to false in SignUp form
        setUser(res.data);
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
        <HeaderTitle>Register!</HeaderTitle>
        <HeaderSubtitle>Registrate para poder hacer un pedido</HeaderSubtitle>
        {error && <h1>Ocurrio un error</h1>}
        {loading && !error ? (
          <Loading h="80" />
        ) : (
          <FormStyled onSubmit={onRegisterSubmit}>
            <ImageLoginStyled src={RegisterImage} />
            <Input
              type="text"
              label="Nombre de usuario"
              name="username"
              onChange={onInputChange}
            />
            <Input
              type="text"
              label="Nombre"
              name="nombre"
              onChange={onInputChange}
            />
            <Input
              type="text"
              label="Apellido"
              name="apellido"
              onChange={onInputChange}
            />
            <Input
              type="email"
              label="E-mail"
              name="email"
              onChange={onInputChange}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              onChange={onInputChange}
            />
            <ButtonSubmitStyled>Registrate</ButtonSubmitStyled>
            <GoToRegister theme={state.colors} dark={theme}>
              Ya tenés una cuenta?
              <span>
                <Link replace to="/login">
                  Login!
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
