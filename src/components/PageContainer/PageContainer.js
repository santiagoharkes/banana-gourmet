import React from "react";

import { PageContainerStyled } from "./PageContainerElements";
import { useTheme } from "Context/ThemeContext";

function PageContainer({ children, theme, bgColor }) {
  const { ...state } = useTheme();
  return (
    <PageContainerStyled
      bgColor={bgColor ? bgColor : theme.backgroundColor}
      theme={state.theme}
    >
      {children}
    </PageContainerStyled>
  );
}

export default PageContainer;
