// Styles
import {
  HeaderContainerStyled,
  HeaderTitleStyled,
} from "./HeaderContainerElements";

import { useAuth } from "Context/Auth/AuthContext";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import HeaderSubtitle from "../HeaderSubtitle/HeaderSubtitle";
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";

function HeaderContainer() {
  const { user, logout } = useAuth();

  return (
    <HeaderContainerStyled>
      <HeaderTitleStyled>
        <HeaderTitle>
          Hola, {user ? `${user.user.nombre}!` : `cómo estás?`}
        </HeaderTitle>
        <HeaderSubtitle>Ya sabés qué pedir para hoy?</HeaderSubtitle>
      </HeaderTitleStyled>
      {/* {user ? (
        <HeaderAvatar onClick={logout} />
      ) : (
        <Link replace to="/login">
          <HeaderAvatar />
        </Link>
      )} */}

      <HeaderAvatar />
    </HeaderContainerStyled>
  );
}

export default HeaderContainer;
