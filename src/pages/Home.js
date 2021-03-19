import { ThemeProvider } from "styled-components";
import { useQuery } from "react-query";

import { useAxios } from "../hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderContainer from "components/Pages/HeaderContainer/HeaderContainer";
import Popular from "components/Pages/Popular/Popular";
import ProductContainer from "components/Pages/ProductContainer/ProductContainer";
import Loading from "components/Loading/Loading";
import { ErrorMessageStyled, ErrorDescriptionStyled } from "./HomeElements";

import burger from "../img/burger1.webp";

function Home() {
  const { ...state } = useTheme();
  const axios = useAxios();

  const fetchProducts = () => {
    return axios.get("/productos");
  };

  const fetchCategories = () => {
    return axios.get("/categorias");
  };

  const {
    data: productos,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery("products", fetchProducts);

  const {
    data: categorias,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery("categories", fetchCategories);

  console.log({ productos });
  console.log({ categorias });

  return (
    <ThemeProvider theme={state.colors}>
      <PageContainer theme={state.colors}>
        <HeaderContainer />
        {productsError || categoriesError ? (
          <>
            <ErrorMessageStyled>
              Ocurrió un error con tu solicitud!
            </ErrorMessageStyled>
            <ErrorDescriptionStyled>
              Por favor, intentá más tarde
            </ErrorDescriptionStyled>
          </>
        ) : productsLoading || categoriesLoading ? (
          <Loading h="80" />
        ) : (
          <>
            <Popular dark={state.theme} img={burger} />
            <ProductContainer productos={productos} categorias={categorias} />
          </>
        )}
      </PageContainer>
    </ThemeProvider>
  );
}

export default Home;

// DOCS

// PageContainer

// Si se le pasa bgColor, toma ese color de fondo. El color es cualquier color válido en css "red, #fff, etc" como string
// Sino, por defecto es el del tema (dark o light)
