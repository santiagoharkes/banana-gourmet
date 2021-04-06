import React from "react";
import { useHistory } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import {
  SidebarBackgroundStyled,
  SidebarStyled,
  SidebarULStyled,
  LiStyled,
  CloseSidebarStyled,
} from "./SidebarElements";
import { useMenu } from "Context/Menu/MenuContext";
import { useAuth } from "Context/Auth/AuthContext";

function Sidebar() {
  const { hideMenu, isVisible } = useMenu();
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleClick = (e, route) => {
    if (e.target.id !== "sidebar__menu") {
      hideMenu();
      if (route === "logout") {
        logout();
        history.replace("/");
      }
      if (route && route !== "logout") {
        history.replace(route);
      }
    }
  };

  return (
    <SidebarBackgroundStyled
      className={isVisible ? "sidebar__background-visible" : null}
      id="background__overlay"
      onClick={handleClick}
    >
      <SidebarStyled
        className={isVisible ? "sidebar__sidebar-visible" : null}
        id="sidebar__menu"
      >
        <CloseSidebarStyled onClick={handleClick}>
          Cerrar menú <ArrowForwardIcon />
        </CloseSidebarStyled>
        <SidebarULStyled>
          {user ? (
            <>
              <LiStyled onClick={handleClick}>Mi perfil</LiStyled>
              <LiStyled onClick={(e) => handleClick(e, "/mis-pedidos")}>
                Mis pedidos
              </LiStyled>
              <LiStyled onClick={(e) => handleClick(e, "/mis-favoritos")}>
                Mis favoritos
              </LiStyled>
              <LiStyled onClick={(e) => handleClick(e, "logout")}>
                Logout
              </LiStyled>
            </>
          ) : (
            <>
              <LiStyled onClick={(e) => handleClick(e, "/login")}>
                Login
              </LiStyled>
              <LiStyled onClick={(e) => handleClick(e, "/register")}>
                Register
              </LiStyled>
            </>
          )}
        </SidebarULStyled>
      </SidebarStyled>
    </SidebarBackgroundStyled>
  );
}

export default Sidebar;
