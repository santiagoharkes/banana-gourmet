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
} from "./LoginElements";
import { MailEnviadoStyled } from "./ForgotPasswordElements";
import { useAxios } from "hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";
import { useAuth } from "Context/Auth/AuthContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import Input from "components/Pages/Input/Input";
import PizzaLogin from "../img/pizzaLogin.webp";
import Loading from "components/Loading/Loading";

function ForgotPassword() {
  const { theme } = useTheme();
  const axios = useAxios();
  const { setLoading, loading } = useAuth();
  const history = useHistory();
  const [error] = useState(null);
  const [errores, setErrores] = useState({ errores: "" });
  const [mailMessage, setMailMessage] = useState("");

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      history.goBack();
    }
  }, [history]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Dirrección de correo no válida")
        .required("Este campo es requerido"),
    }),

    onSubmit: function (values) {
      setLoading(true);
      axios
        .post(`/auth/forgot-password`, values)
        .then((res) => {
          setMailMessage("Se ha enviado un mail a tu casilla de correo!");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
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
      <HeaderTitle>Forgot!</HeaderTitle>
      <HeaderSubtitle>
        Te olvidaste tu contraseña? No pasa orange, escribí tu mail acá abajo y
        te mandamos una nueva
      </HeaderSubtitle>
      {loading ? (
        <Loading h="80" />
      ) : (
        <FormContainer>
          <FormStyled onSubmit={formik.handleSubmit}>
            <ImageLoginStyled src={PizzaLogin} />
            <Input
              type="email"
              label="E-mail"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              className={
                (formik.touched.email && formik.errors.email) || errores.errores
                  ? "invalid"
                  : ""
              }
              setErrores={setErrores}
            />
            {formik.touched.email && formik.errors.email ? (
              <InputError>{formik.errors.email}</InputError>
            ) : null}

            {mailMessage && (
              <MailEnviadoStyled>{mailMessage}</MailEnviadoStyled>
            )}

            <ButtonSubmitStyled type="submit">Enviar mail!</ButtonSubmitStyled>
            <GoToRegister dark={theme}>
              Volver a
              <span>
                <Link replace to="/login">
                  Login!
                </Link>
              </span>
            </GoToRegister>
          </FormStyled>
        </FormContainer>
      )}
    </PageContainer>
  );
}

export default ForgotPassword;
