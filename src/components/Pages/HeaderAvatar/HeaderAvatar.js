import { AvatarImageStyled } from "./HeaderAvatarElements";

import AvatarImage from "../../../img/avatar.webp";

import { useTheme } from "Context/ThemeContext";

function HeaderAvatar() {
  const { ...state } = useTheme();
  return <AvatarImageStyled src={AvatarImage} theme={state.colors} />;
}

export default HeaderAvatar;
