import { ThemeProvider } from "styled-components";

// Styles
import { MainContainer } from "./MainElements";

// Components
import MobileMenu from "components/MobileMenu/MobileMenu";
import BottomMenu from "components/BottomMenu/BottomMenu";

import { useTheme } from "Context/Theme/ThemeContext";

function Main({ children }) {
  const { colors, theme } = useTheme();
  return (
    <ThemeProvider theme={colors} dark={theme}>
      <MainContainer>
        <MobileMenu />
        {children}
        <BottomMenu />
      </MainContainer>
    </ThemeProvider>
  );
}

export default Main;
