import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormContainer } from "./LoginElements";
import { useAxios } from "hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";
import { useAuth } from "Context/Auth/AuthContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import Input from "components/Pages/Input/Input";

function Login() {
  const { theme } = useTheme();
  const axios = useAxios();
  const { login, setLoading, loading } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: Yup.object({
      identifier: Yup.string()
        .email("Dirrección de correo no válida")
        .required("Required"),
      password: Yup.string()
        .min(5, "Tiene que ser mayor a 5 caracteres")
        .required("Required"),
    }),

    onSubmit: function (values) {
      console.log({ values });
    },
  });

  console.log(formik.errors);

  useEffect(() => {
    const token = Cookies.get("token") || null;
    if (token) {
      history.push("/");
    }
  }, [history]);

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

      <FormContainer>
        <form action="" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="identifier"
            id=""
            label="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.identifier}
          />
          {formik.touched.identifier && formik.errors.identifier ? (
            <div style={{ color: "white" }}>{formik.errors.identifier}</div>
          ) : null}
          <Input
            type="password"
            name="password"
            id=""
            label="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "white" }}>{formik.errors.password}</div>
          ) : null}
          <button type="submit">Hola</button>
        </form>
      </FormContainer>
    </PageContainer>
  );
}

export default Login;
