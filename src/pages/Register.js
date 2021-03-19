import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import {
  ImageLoginStyled,
  FormStyled,
  ButtonSubmitStyled,
  GoToRegister,
} from "./RegisterElements";
import { useTheme } from "Context/Theme/ThemeContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import Input from "components/Pages/Input/Input";
import RegisterImage from "../img/registerImage.webp";

function Login() {
  const { theme, ...state } = useTheme();

  return (
    <ThemeProvider theme={state.colors}>
      <PageContainer theme={state.colors}>
        <HeaderTitle>Register!</HeaderTitle>
        <HeaderSubtitle>Registrate para poder hacer un pedido</HeaderSubtitle>
        <FormStyled>
          <ImageLoginStyled src={RegisterImage} />
          <Input type="text" label="Nombre" />
          <Input type="email" label="E-mail" />
          <Input type="password" label="Password" />
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
      </PageContainer>
    </ThemeProvider>
  );
}

export default Login;
