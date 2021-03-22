import { useQuery } from "react-query";

import { useAxios } from "../hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";
import { useAuth } from "Context/Auth/AuthContext";
import { useMenu } from "Context/Menu/MenuContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderContainer from "components/Pages/HeaderContainer/HeaderContainer";
import Popular from "components/Pages/Popular/Popular";
import ProductContainer from "components/Pages/ProductContainer/ProductContainer";
import Loading from "components/Loading/Loading";
import { ErrorMessageStyled, ErrorDescriptionStyled } from "./HomeElements";
import Sidebar from "components/Sidebar/Sidebar";

import burger from "../img/burger1.webp";

function Home() {
  const { loading: userLoading } = useAuth();
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

  return (
    <PageContainer>
      <Sidebar />

      {productsError || categoriesError ? (
        <>
          <ErrorMessageStyled>
            Ocurrió un error con tu solicitud!
          </ErrorMessageStyled>
          <ErrorDescriptionStyled>
            Por favor, intentá más tarde
          </ErrorDescriptionStyled>
        </>
      ) : productsLoading || categoriesLoading || userLoading ? (
        <Loading h="100" />
      ) : (
        <>
          <HeaderContainer />
          <Popular img={burger} />
          <ProductContainer productos={productos} categorias={categorias} />
        </>
      )}
    </PageContainer>
  );
}

export default Home;

// DOCS

// PageContainer

// Si se le pasa bgColor, toma ese color de fondo. El color es cualquier color válido en css "red, #fff, etc" como string
// Sino, por defecto es el del tema (dark o light)
