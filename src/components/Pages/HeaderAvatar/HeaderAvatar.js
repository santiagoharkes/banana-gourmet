import { AvatarImageStyled } from "./HeaderAvatarElements";
import { useMenu } from "Context/Menu/MenuContext";

import AvatarImage from "../../../img/avatar.webp";

function HeaderAvatar() {
  const { showMenu, hideMenu, isVisible } = useMenu();

  const handleShowMenu = () => {
    isVisible ? hideMenu() : showMenu();
  };

  return <AvatarImageStyled onClick={handleShowMenu} src={AvatarImage} />;
}

export default HeaderAvatar;
