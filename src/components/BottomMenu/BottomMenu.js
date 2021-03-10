import { ThemeProvider } from "styled-components";

import {
  BottomMenuContainerStyled,
  SearchIconStyled,
  CartIconStyled,
  ZapiLogoStyled,
} from "./BottomMenuElements";

import { useTheme } from "Context/ThemeContext";

import { Link } from "react-router-dom";

import ZapiLogo from "../../img/zapilogo.webp";

function BottomMenu() {
  const { theme, ...state } = useTheme();
  return (
    <ThemeProvider theme={state.colors}>
      <BottomMenuContainerStyled dark={theme}>
        <Link to="/garralapala">
          <SearchIconStyled />
        </Link>
        <Link to="/">
          <ZapiLogoStyled src={ZapiLogo} />
        </Link>
        <Link to="/cart">
          <CartIconStyled />
        </Link>
      </BottomMenuContainerStyled>
    </ThemeProvider>
  );
}

export default BottomMenu;
