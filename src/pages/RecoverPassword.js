import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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

import { ExitoContainer } from "./RecoverPasswordElements";

import { useAxios } from "hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";
import { useAuth } from "Context/Auth/AuthContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import Input from "components/Pages/Input/Input";
import PizzaLogin from "../img/pizzaLogin.webp";
import Loading from "components/Loading/Loading";

function RecoverPassword() {
  const { theme } = useTheme();
  const axios = useAxios();
  const { setLoading, loading } = useAuth();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [errores, setErrores] = useState({ errores: "" });
  const [exito, setExito] = useState(false);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      history.goBack();
    }
  }, [history]);

  const formik = useFormik({
    initialValues: {
      code: query.get("code"),
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(5, "Tiene que ser mayor a 5 caracteres")
        .required("Este campo es requerido"),
      passwordConfirmation: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Las contraseñas no coinciden!"
        ),
      }),
    }),

    onSubmit: function (values) {
      console.log(values);
      setLoading(true);
      axios
        .post(`/auth/reset-password`, values)
        .then((res) => {
          if (res.statusText === "OK") {
            setExito(true);
          }
        })
        .catch((error) => {
          setError(error);
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
        <title>Banana Gourmet - Recover</title>
        <meta
          name="description"
          content="Banana Gourmet - Recover - Ingresá una nueva contraseña"
        />
      </Helmet>
      <HeaderTitle>Nueva!</HeaderTitle>
      <HeaderSubtitle>
        Perfecto! Sólo falta un paso, ingresá una nueva contraseña aquí abajo
      </HeaderSubtitle>
      {loading ? (
        <Loading h="80" />
      ) : exito ? (
        <FormContainer>
          <FormStyled>
            <ImageLoginStyled src={PizzaLogin} />
            <ExitoContainer>
              Tu contraseña se cambió con éxito! Volvé al login para acceder
            </ExitoContainer>
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
      ) : (
        <FormContainer>
          <FormStyled onSubmit={formik.handleSubmit}>
            <ImageLoginStyled src={PizzaLogin} />
            <Input
              type="password"
              label="Nueva contraseña"
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
            />
            {formik.touched.password && formik.errors.password ? (
              <InputError>{formik.errors.password}</InputError>
            ) : null}

            <Input
              type="password"
              label="Confirmar contraseña"
              name="passwordConfirmation"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.passwordConfirmation}
              className={
                (formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation) ||
                errores.errores
                  ? "invalid"
                  : ""
              }
              setErrores={setErrores}
            />
            {formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation ? (
              <InputError>{formik.errors.passwordConfirmation}</InputError>
            ) : null}

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

export default RecoverPassword;
