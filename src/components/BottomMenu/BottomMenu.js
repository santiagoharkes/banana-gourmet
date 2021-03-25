import { Link } from "react-router-dom";

import {
  BottomMenuContainerStyled,
  SearchIconStyled,
  CartIconStyled,
  ZapiLogoStyled,
  CartIconContainerStyled,
  ItemCountStyled,
} from "./BottomMenuElements";

import { useCart } from "Context/Cart/CartContext";
import { useMenu } from "Context/Menu/MenuContext";

import ZapiLogo from "../../img/zapilogo.webp";

function BottomMenu() {
  const { hideMenu } = useMenu();
  const { itemCount } = useCart();

  return (
    <BottomMenuContainerStyled>
      <Link onClick={hideMenu} to="/garralapala">
        <SearchIconStyled />
      </Link>
      <Link onClick={hideMenu} replace to="/">
        <ZapiLogoStyled src={ZapiLogo} />
      </Link>
      <Link onClick={hideMenu} to="/cart">
        <CartIconContainerStyled>
          {itemCount >= 1 && <ItemCountStyled>{itemCount}</ItemCountStyled>}
          <CartIconStyled />
        </CartIconContainerStyled>
      </Link>
    </BottomMenuContainerStyled>
  );
}

export default BottomMenu;
