import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import {
  ImageLoginStyled,
  FormStyled,
  ButtonSubmitStyled,
  GoToRegister,
} from "./LoginElements";
import { useTheme } from "Context/Theme/ThemeContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import Input from "components/Pages/Input/Input";
import PizzaLogin from "../img/pizzaLogin.webp";

function Login() {
  const { theme, ...state } = useTheme();

  return (
    <ThemeProvider theme={state.colors}>
      <PageContainer theme={state.colors}>
        <HeaderTitle>Login!</HeaderTitle>
        <HeaderSubtitle>Iniciá sesión para acceder a tu cuenta</HeaderSubtitle>
        <FormStyled>
          <ImageLoginStyled src={PizzaLogin} />
          <Input type="email" label="E-mail" />
          <Input type="password" label="Password" />
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
      </PageContainer>
    </ThemeProvider>
  );
}

export default Login;
