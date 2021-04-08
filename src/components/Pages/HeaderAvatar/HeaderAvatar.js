import { AvatarImageStyled } from "./HeaderAvatarElements";

import AvatarImage from "../../../img/avatar.webp";

function HeaderAvatar({ onClick }) {
  return <AvatarImageStyled onClick={onClick} src={AvatarImage} />;
}

export default HeaderAvatar;
