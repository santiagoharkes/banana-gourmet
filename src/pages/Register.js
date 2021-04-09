import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  ImageLoginStyled,
  FormStyled,
  ButtonSubmitStyled,
  GoToRegister,
  InputError,
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
import { Helmet } from "react-helmet";

function Login() {
  const { theme } = useTheme();
  const axios = useAxios();
  const { setUser, setLoading, loading } = useAuth();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [errores, setErrores] = useState({ emailError: "", usernameError: "" });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      history.push("/");
    }
  }, [history]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      nombre: "",
      apellido: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Dirrección de correo no válida")
        .required("Este campo es requerido"),
      password: Yup.string()
        .min(5, "Tiene que ser mayor a 5 caracteres")
        .required("Este campo es requerido"),
      username: Yup.string()
        .min(5, "Tiene qeu ser mayor a 5 caracteres")
        .required("Este campo es requerido"),
      nombre: Yup.string().required("Este campo es requerido"),
      apellido: Yup.string().required("Este campo es requerido"),
    }),

    onSubmit: function (values) {
      setLoading(true);
      axios
        .post(`/auth/local/register/`, values)
        .then((res) => {
          Cookies.set("token", res.data.jwt);

          setUser(res.data);

          history.push("/");
        })
        .catch((error) => {
          setError(error);
        });
    },
  });

  // console.log(
  //   error?.response.data.message.map((valor) =>
  //     valor.message.map((valor) => valor.message)
  //   )
  // );

  useEffect(() => {
    if (error) {
      const arrayErrores = error?.response.data.message.map((valor) =>
        valor.messages.map((valor) => valor.message)
      );

      if (arrayErrores[0][0] === "Email is already taken.") {
        setErrores({
          emailError: "El mail ya está ocupado!",
          usernameError: "",
        });
      }

      if (arrayErrores[0][0] === "Email already taken") {
        setErrores({
          emailError: "",
          usernameError: "El nombre de usuario ya está ocupado!",
        });
      }
    }
  }, [error]);

  console.log(errores);

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Register</title>
        <meta
          name="description"
          content="Banana Gourmet - Register - Registrate para hacer tus pedidos!"
        />
      </Helmet>
      <HeaderTitle>Register!</HeaderTitle>
      <HeaderSubtitle>Registrate para poder hacer un pedido</HeaderSubtitle>
      {loading && !error ? (
        <Loading h="80" />
      ) : (
        <FormStyled onSubmit={formik.handleSubmit}>
          <ImageLoginStyled src={RegisterImage} />
          <Input
            type="text"
            label="Nombre de usuario"
            name="username"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
            className={
              (formik.touched.username && formik.errors.username) ||
              errores.usernameError !== ""
                ? "invalid"
                : ""
            }
            setErrores={setErrores}
          />
          {formik.touched.username && formik.errors.username ? (
            <InputError>{formik.errors.username}</InputError>
          ) : errores.usernameError !== "" ? (
            <InputError>{errores.usernameError}</InputError>
          ) : null}
          <Input
            type="text"
            label="Nombre"
            name="nombre"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.nombre}
            className={
              formik.touched.nombre && formik.errors.nombre ? "invalid" : ""
            }
          />
          {formik.touched.nombre && formik.errors.nombre ? (
            <InputError>{formik.errors.nombre}</InputError>
          ) : null}
          <Input
            type="text"
            label="Apellido"
            name="apellido"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.apellido}
            className={
              formik.touched.apellido && formik.errors.apellido ? "invalid" : ""
            }
          />
          {formik.touched.apellido && formik.errors.apellido ? (
            <InputError>{formik.errors.apellido}</InputError>
          ) : null}
          <Input
            type="email"
            label="E-mail"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            className={
              (formik.touched.email && formik.errors.email) ||
              errores.emailError !== ""
                ? "invalid"
                : ""
            }
            setErrores={setErrores}
          />
          {formik.touched.email && formik.errors.email ? (
            <InputError>{formik.errors.email}</InputError>
          ) : errores.emailError !== "" ? (
            <InputError>{errores.emailError}</InputError>
          ) : null}
          <Input
            type={showPassword ? "text" : "password"}
            label="Password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            className={
              formik.touched.password && formik.errors.password ? "invalid" : ""
            }
            icon={true}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          {formik.touched.password && formik.errors.password ? (
            <InputError>{formik.errors.password}</InputError>
          ) : null}
          <ButtonSubmitStyled>Registrate</ButtonSubmitStyled>
          <GoToRegister dark={theme}>
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
  );
}

export default Login;
