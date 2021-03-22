import React from "react";

import { SidebarBackgroundStyled, SidebarStyled } from "./SidebarElements";
import { useMenu } from "Context/Menu/MenuContext";

function Sidebar() {
  const { hideMenu, isVisible } = useMenu();

  const handleClick = (e) => {
    if (e.target.id !== "sidebar__menu") {
      hideMenu();
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
        <h1 onClick={handleClick}>HOla</h1>
      </SidebarStyled>
    </SidebarBackgroundStyled>
  );
}

export default Sidebar;
