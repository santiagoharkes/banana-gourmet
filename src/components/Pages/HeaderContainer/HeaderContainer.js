// Styles
import {
  HeaderContainerStyled,
  HeaderTitleStyled,
} from "./HeaderContainerElements";

import { Link } from "react-router-dom";

import HeaderTitle from "../HeaderTitle/HeaderTitle";
import HeaderSubtitle from "../HeaderSubtitle/HeaderSubtitle";
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";

function HeaderContainer() {
  return (
    <HeaderContainerStyled>
      <HeaderTitleStyled>
        <HeaderTitle>Hola, Santiago!</HeaderTitle>
        <HeaderSubtitle>Ya sabés qué pedir para hoy?</HeaderSubtitle>
      </HeaderTitleStyled>
      <Link replace to="/login">
        <HeaderAvatar />
      </Link>
    </HeaderContainerStyled>
  );
}

export default HeaderContainer;
