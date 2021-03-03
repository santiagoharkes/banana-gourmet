// Styles
import { MainContainer } from "./MainElements";

// Components
import MobileMenu from "components/MobileMenu/MobileMenu";
import BottomMenu from "components/BottomMenu/BottomMenu";

function Main({ children, theme }) {
  return (
    <MainContainer>
      <MobileMenu theme={theme} />
      {children}
      <BottomMenu />
    </MainContainer>
  );
}

export default Main;
