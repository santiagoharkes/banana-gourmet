import Main from "components/Main/Main";
import { LayoutContainer } from "./LayoutElements";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { useTheme } from "Context/ThemeContext";

function Layout({ children, theme }) {
  const { changeTheme, ...state } = useTheme();

  const handleTheme = () => {
    if (state.theme === "dark") {
      changeTheme("light");
    } else {
      changeTheme("dark");
    }
  };
  return (
    <LayoutContainer theme={theme}>
      <Main theme={theme}>{children}</Main>
      <button
        className={state.theme === "dark" ? "toLight" : "toDark"}
        onClick={handleTheme}
      >
        {state.theme === "dark" ? <WbSunnyIcon /> : <Brightness3Icon />}
      </button>
    </LayoutContainer>
  );
}

export default Layout;
