import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

import { useAxios } from "../hooks/useAxios";
import { useAuth } from "Context/Auth/AuthContext";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderContainer from "components/Pages/HeaderContainer/HeaderContainer";
import Popular from "components/Pages/Popular/Popular";
import ProductContainer from "components/Pages/ProductContainer/ProductContainer";
import Loading from "components/Loading/Loading";
import { ErrorMessageStyled, ErrorDescriptionStyled } from "./HomeElements";
import Sidebar from "components/Sidebar/Sidebar";

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
      <Helmet>
        <meta
          name="description"
          content="Banana Gourmet es el lugar donde podrás pedir las mejores comidas del condado! Estás bajón un domingo? LLueve y ni ganas de salir? Sale ese Banana Gourmet. Un lugar, tu lugar."
        />

        <meta itemprop="name" content="Banana Gourmet!" />
        <meta
          itemprop="description"
          content="Banana Gourmet es el lugar donde podrás pedir las mejores comidas del condado! Estás bajón un domingo? LLueve y ni ganas de salir? Sale ese Banana Gourmet. Un lugar, tu lugar."
        />
        <meta
          itemprop="image"
          content="https://res.cloudinary.com/santiagoharkes/image/upload/v1617727699/banana_Gourmet_Logo_7fd58173b5.webp"
        />

        <meta property="og:url" content="https://banana-gourmet.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Banana Gourmet!" />
        <meta
          property="og:description"
          content="Banana Gourmet es el lugar donde podrás pedir las mejores comidas del condado! Estás bajón un domingo? LLueve y ni ganas de salir? Sale ese Banana Gourmet. Un lugar, tu lugar."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/santiagoharkes/image/upload/v1617727699/banana_Gourmet_Logo_7fd58173b5.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Banana Gourmet!" />
        <meta
          name="twitter:description"
          content="Banana Gourmet es el lugar donde podrás pedir las mejores comidas del condado! Estás bajón un domingo? LLueve y ni ganas de salir? Sale ese Banana Gourmet. Un lugar, tu lugar."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/santiagoharkes/image/upload/v1617727699/banana_Gourmet_Logo_7fd58173b5.webp"
        ></meta>
      </Helmet>
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
          <Popular />
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
