import { useTheme } from "Context/ThemeContext";

import PageContainer from "components/PageContainer/PageContainer";
import HeaderContainer from "components/Pages/HeaderContainer/HeaderContainer";
import Popular from "components/Pages/Popular/Popular";
import ProductContainer from "components/Pages/ProductContainer/ProductContainer";

import burger from "../img/burger1.jpg";

function Home() {
  const { ...state } = useTheme();

  return (
    <PageContainer theme={state.colors}>
      <HeaderContainer />
      <Popular dark={state.theme} theme={state.colors} img={burger} />
      <ProductContainer />
    </PageContainer>
  );
}

export default Home;

// DOCS

// PageContainer

// Si se le pasa bgColor, toma ese color de fondo. El color es cualquier color válido en css "red, #fff, etc" como string
// Sino, por defecto es el del tema (dark o light)
