// Styles
import { HeaderTitleStyled } from "./HeaderTitleElements";

import { useTheme } from "Context/ThemeContext";

function HeaderTitle() {
  const { ...state } = useTheme();
  return (
    <HeaderTitleStyled theme={state.colors}>Hi, Santiago</HeaderTitleStyled>
  );
}

export default HeaderTitle;
