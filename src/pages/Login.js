import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  ImageLoginStyled,
  FormStyled,
  ButtonSubmitStyled,
  GoToRegister,
  FormContainer,
  InputError,
  ForgotPasswordStyled,
  GoogleLoginButton,
  GithubLoginButton,
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

import GoogleLogo from "../img/g-logo.png";
import GithubLogo from "../img/github-logo.png";

function Login() {
  const { theme } = useTheme();
  const axios = useAxios();
  const { login, setLoading, loading, loginError } = useAuth();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [errores, setErrores] = useState({ errores: "" });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      history.push("/");
    }
  }, [history]);

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: Yup.object({
      identifier: Yup.string()
        .email("Dirrección de correo no válida")
        .required("Este campo es requerido"),
      password: Yup.string()
        .min(5, "Tiene que ser mayor a 5 caracteres")
        .required("Este campo es requerido"),
    }),

    onSubmit: function (values) {
      setLoading(true);
      axios
        .post(`/auth/local/`, values)
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
          loginError();
          setError(error);
        });
    },
  });

  useEffect(() => {
    if (error) {
      const arrayErrores = error?.response.data.message.map((valor) =>
        valor.messages.map((valor) => valor.message)
      );

      if (arrayErrores[0][0] === "Identifier or password invalid.") {
        setErrores({ errores: "Usuario/mail o contraseña incorrectos!" });
      }
    }
  }, [error]);

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Login</title>
        <meta
          name="description"
          content="Banana Gourmet - Login - Iniciá sesión para acceder a tu cuenta"
        />
      </Helmet>
      <HeaderTitle>Login!</HeaderTitle>
      <HeaderSubtitle>Iniciá sesión para acceder a tu cuenta</HeaderSubtitle>
      {loading ? (
        <Loading h="80" />
      ) : (
        <FormContainer>
          <FormStyled onSubmit={formik.handleSubmit}>
            <ImageLoginStyled src={PizzaLogin} />
            <Input
              type="email"
              label="E-mail"
              name="identifier"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.identifier}
              className={
                (formik.touched.identifier && formik.errors.identifier) ||
                errores.errores
                  ? "invalid"
                  : ""
              }
              setErrores={setErrores}
            />
            {formik.touched.identifier && formik.errors.identifier ? (
              <InputError>{formik.errors.identifier}</InputError>
            ) : null}
            <Input
              type={showPassword ? "text" : "password"}
              label="Password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              className={
                (formik.touched.password && formik.errors.password) ||
                errores.errores
                  ? "invalid"
                  : ""
              }
              setErrores={setErrores}
              icon={true}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            {formik.touched.password && formik.errors.password ? (
              <InputError>{formik.errors.password}</InputError>
            ) : null}
            <ForgotPasswordStyled onClick={() => history.push("/forgot")}>
              Forgot password?
            </ForgotPasswordStyled>
            {errores.errores && <InputError>{errores.errores}</InputError>}

            <ButtonSubmitStyled type="submit">Login</ButtonSubmitStyled>

            <GoogleLoginButton
              onClick={() => {
                setLoading(true);
                window.location.replace(
                  "https://nucba-zapi-app.herokuapp.com/connect/google"
                );
              }}
            >
              <img src={GoogleLogo} alt="Google logo" /> Login with Google
            </GoogleLoginButton>

            <GithubLoginButton
              onClick={() => {
                setLoading(true);
                window.location.replace(
                  "https://nucba-zapi-app.herokuapp.com/connect/github"
                );
              }}
            >
              <img src={GithubLogo} alt="Google logo" /> Login with Github
            </GithubLoginButton>

            <GoToRegister dark={theme}>
              No tenés una cuenta?
              <span>
                <Link replace to="/register">
                  Registrate!
                </Link>
              </span>
            </GoToRegister>
            {/* <TestEmailContainer>
              <TestEmailStyled dark={theme}>
                test email:
                <span>test@test.com</span>
              </TestEmailStyled>
              <TestEmailStyled dark={theme}>
                test password:
                <span>test1234</span>
              </TestEmailStyled>
            </TestEmailContainer> */}
          </FormStyled>
        </FormContainer>
      )}
    </PageContainer>
  );
}

export default Login;
