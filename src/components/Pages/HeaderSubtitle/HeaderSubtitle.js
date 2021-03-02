import { HeaderTitleStyled } from "./HeaderSubtitleElements";

import { useTheme } from "Context/ThemeContext";

function HeaderSubtitle() {
  const { ...state } = useTheme();
  return (
    <HeaderTitleStyled theme={state.colors}>
      Ya sabés qué pedir para hoy?
    </HeaderTitleStyled>
  );
}

export default HeaderSubtitle;
