import { useTheme } from "Context/ThemeContext";

import PageContainer from "components/PageContainer/PageContainer";
import HeaderContainer from "components/Pages/HeaderContainer/HeaderContainer";
import Popular from "components/Pages/Popular/Popular";

import burger from "../img/burger1.jpg";

function Home() {
  const { changeTheme, ...state } = useTheme();

  const handleTheme = () => {
    if (state.theme === "dark") {
      changeTheme("light");
    } else {
      changeTheme("dark");
    }
  };

  return (
    <PageContainer theme={state.colors}>
      <HeaderContainer />
      <Popular dark={state.theme} theme={state.colors} img={burger} />

      <button
        style={{
          position: "absolute",
          bottom: "10px",
          left: "0",
          width: "100%",
          padding: "10px",
        }}
        onClick={handleTheme}
      >
        Cambiar tema
      </button>
    </PageContainer>
  );
}

export default Home;

// DOCS

// PageContainer

// Si se le pasa bgColor, toma ese color de fondo. El color es cualquier color válido en css "red, #fff, etc" como string
// Sino, por defecto es el del tema (dark o light)
