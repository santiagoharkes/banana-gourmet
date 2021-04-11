// Styles
import {
  HeaderContainerStyled,
  HeaderTitleStyled,
  MenuIconStyled,
} from "./HeaderContainerElements";

import { useAuth } from "Context/Auth/AuthContext";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import HeaderSubtitle from "../HeaderSubtitle/HeaderSubtitle";
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";
import { useMenu } from "Context/Menu/MenuContext";
import { useTheme } from "Context/Theme/ThemeContext";

function HeaderContainer() {
  const { user } = useAuth();
  const { showMenu, hideMenu, isVisible } = useMenu();
  const { theme } = useTheme();

  const handleShowMenu = () => {
    isVisible ? hideMenu() : showMenu();
  };

  return (
    <HeaderContainerStyled>
      <HeaderTitleStyled>
        <HeaderTitle>
          Hola,{" "}
          {user
            ? user.user.nombre
              ? `${user.user.nombre}!`
              : `${user.user.username}`
            : `cómo estás?`}
        </HeaderTitle>
        <HeaderSubtitle>Ya sabés qué pedir para hoy?</HeaderSubtitle>
      </HeaderTitleStyled>

      {user ? (
        <HeaderAvatar onClick={handleShowMenu} />
      ) : (
        <MenuIconStyled dark={theme} onClick={handleShowMenu} />
      )}
    </HeaderContainerStyled>
  );
}

export default HeaderContainer;
