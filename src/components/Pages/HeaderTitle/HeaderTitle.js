// Styles
import { HeaderTitleStyled } from "./HeaderTitleElements";

function HeaderTitle({ children, color }) {
  console.log(color);
  return (
    <HeaderTitleStyled color={color ? color : false}>
      {children}
    </HeaderTitleStyled>
  );
}

export default HeaderTitle;
