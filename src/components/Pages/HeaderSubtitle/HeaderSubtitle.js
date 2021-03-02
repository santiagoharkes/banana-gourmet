import { HeaderTitleStyled } from "./HeaderSubtitleElements";

import { useTheme } from "Context/ThemeContext";

function HeaderSubtitle() {
  const { ...state } = useTheme();
  return (
    <HeaderTitleStyled theme={state.colors}>
      Ready to cook for dinner?
    </HeaderTitleStyled>
  );
}

export default HeaderSubtitle;
