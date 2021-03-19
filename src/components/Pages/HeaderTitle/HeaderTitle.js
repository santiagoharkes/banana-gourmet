// Styles
import { HeaderTitleStyled } from "./HeaderTitleElements";

function HeaderTitle({ children, color }) {
  return (
    <HeaderTitleStyled color={color ? color : null}>
      {children}
    </HeaderTitleStyled>
  );
}

export default HeaderTitle;
