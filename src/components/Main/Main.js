// Styles
import { MainContainer } from "./MainElements";

// Components
import MobileMenu from "components/MobileMenu/MobileMenu";

function Main({ children, theme }) {
  return (
    <MainContainer>
      <MobileMenu theme={theme} />
      {children}
    </MainContainer>
  );
}

export default Main;
