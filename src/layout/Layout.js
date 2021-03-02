import Main from "components/Main/Main";
import { LayoutContainer } from "./LayoutElements";

function Layout({ children, theme }) {
  return (
    <LayoutContainer theme={theme}>
      <Main theme={theme}>{children}</Main>
    </LayoutContainer>
  );
}

export default Layout;
