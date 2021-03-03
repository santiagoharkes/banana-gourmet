import {
  BottomMenuContainerStyled,
  SearchIconStyled,
  CartIconStyled,
  ZapiLogoStyled,
} from "./BottomMenuElements";

import { useTheme } from "Context/ThemeContext";

import { Link } from "react-router-dom";

import ZapiLogo from "../../img/zapilogo.png";

function BottomMenu() {
  const { theme, ...state } = useTheme();
  return (
    <BottomMenuContainerStyled dark={theme} theme={state.colors}>
      <Link to="/pelotudo">
        <SearchIconStyled />
      </Link>
      <Link to="/">
        <ZapiLogoStyled src={ZapiLogo} />
      </Link>
      <Link to="/pelotudo">
        <CartIconStyled />
      </Link>
    </BottomMenuContainerStyled>
  );
}

export default BottomMenu;
