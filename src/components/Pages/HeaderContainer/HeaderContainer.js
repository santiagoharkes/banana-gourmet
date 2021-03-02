// Styles
import {
  HeaderContainerStyled,
  HeaderTitleStyled,
} from "./HeaderContainerElements";

import HeaderTitle from "../HeaderTitle/HeaderTitle";
import HeaderSubtitle from "../HeaderSubtitle/HeaderSubtitle";
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";

function HeaderContainer() {
  return (
    <HeaderContainerStyled>
      <HeaderTitleStyled>
        <HeaderTitle />
        <HeaderSubtitle />
      </HeaderTitleStyled>
      <HeaderAvatar />
    </HeaderContainerStyled>
  );
}

export default HeaderContainer;
