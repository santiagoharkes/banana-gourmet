// Styles
import { HeaderTitleStyled } from "./HeaderTitleElements";

function HeaderTitle({ children, color, small }) {
  return (
    <HeaderTitleStyled small={small} color={color ? color : null}>
      {children}
    </HeaderTitleStyled>
  );
}

export default HeaderTitle;
