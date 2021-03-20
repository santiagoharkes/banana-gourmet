import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import {
  BottomMenuContainerStyled,
  SearchIconStyled,
  CartIconStyled,
  ZapiLogoStyled,
  CartIconContainerStyled,
  ItemCountStyled,
} from "./BottomMenuElements";

import { useTheme } from "Context/Theme/ThemeContext";
import { useCart } from "Context/Cart/CartContext";

import ZapiLogo from "../../img/zapilogo.webp";

function BottomMenu() {
  const { theme, ...state } = useTheme();

  const { itemCount } = useCart();

  return (
    <ThemeProvider theme={state.colors}>
      <BottomMenuContainerStyled dark={theme}>
        <Link replace to="/garralapala">
          <SearchIconStyled />
        </Link>
        <Link replace to="/">
          <ZapiLogoStyled src={ZapiLogo} />
        </Link>
        <Link replace to="/cart">
          <CartIconContainerStyled>
            {itemCount >= 1 && <ItemCountStyled>{itemCount}</ItemCountStyled>}
            <CartIconStyled />
          </CartIconContainerStyled>
        </Link>
      </BottomMenuContainerStyled>
    </ThemeProvider>
  );
}

export default BottomMenu;
