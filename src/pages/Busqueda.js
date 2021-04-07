import React from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

// Components
import PageContainer from "components/PageContainer/PageContainer";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import ProductCard from "components/Pages/ProductCard/ProductCard";

// Hooks & Context
import { useSearch } from "Context/Search/SearchContext";
import { useAxios } from "hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";

// Styled-Components
import {
  SearchContainer,
  InputStyled,
  InputContainerStyled,
  SearchIconStyled,
  ButtonSubmitContainer,
  ProductosContainer,
  ClearIconStyled,
  NoProductsContainer,
  NoProductsText,
  SearchImageContainer,
  SearchImage,
  ErrorMessage,
} from "./BusquedaElements";

// Images

import SearchLight from "../img/searchIconLight.png";
import SearchDark from "../img/searchIconDark.png";

function Busqueda() {
  const axios = useAxios();
  const { theme } = useTheme();

  const {
    inputText,
    setInputText,
    productosFiltrados,
    setProductosFiltrados,
    nada,
    setNada,
    error,
    setError,
  } = useSearch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      setError("Este campo no puede estar vacío!");
      setProductosFiltrados([]);
      return;
    }

    const productosFiltrados = productos.data.filter(
      (producto) =>
        producto.nombre.toUpperCase().includes(inputText.toUpperCase()) ||
        producto.descripcion.toUpperCase().includes(inputText.toUpperCase())
    );
    if (productosFiltrados.length > 0) {
      setNada(false);
      setProductosFiltrados(productosFiltrados);
      setError("");
    } else {
      setNada(true);
      setProductosFiltrados(productosFiltrados);
      setError("");
    }
  };

  const onClear = () => {
    setInputText("");
    setNada(false);
    setProductosFiltrados([]);
  };

  const fetchProducts = () => {
    return axios.get("/productos");
  };

  const {
    data: productos,
    // isLoading: productsLoading,
    // isError: productsError,
  } = useQuery("products", fetchProducts);

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Search</title>
        <meta
          name="description"
          content="Banana Gourmet - Search - Buscá el producto que más te guste!"
        />
      </Helmet>
      <HeaderTitle>Search!</HeaderTitle>
      <HeaderSubtitle>
        Aquí podrás buscar los productos que más te gusten
      </HeaderSubtitle>
      <SearchContainer>
        <InputContainerStyled onSubmit={onSubmit} className={error && "error"}>
          <InputStyled
            type="text"
            placeholder="Escribí lo que quieras buscar..."
            onChange={(e) => {
              setError("");
              setInputText(e.target.value);
            }}
            value={inputText}
          />
          {inputText.length > 0 && <ClearIconStyled onClick={onClear} />}
          <ButtonSubmitContainer type="submit">
            <SearchIconStyled />
          </ButtonSubmitContainer>
        </InputContainerStyled>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {productosFiltrados.length > 0 ? (
          <ProductosContainer>
            {productosFiltrados.map((producto) => (
              <ProductCard
                key={producto._id}
                img={`${producto.img[0].url}`}
                data={producto}
              />
            ))}
          </ProductosContainer>
        ) : (
          <NoProductsContainer>
            {nada ? (
              <>
                <NoProductsText>
                  Ups! No encontramos nada con esa búsqueda... por favor intentá
                  de nuevo
                </NoProductsText>
              </>
            ) : (
              <>
                <NoProductsText>
                  Escribí algo acá arriba para buscar tu producto favorito!
                </NoProductsText>
                {theme === "dark" ? (
                  <SearchImageContainer>
                    <SearchImage src={SearchDark} alt="" />
                  </SearchImageContainer>
                ) : (
                  <SearchImageContainer>
                    <SearchImage src={SearchLight} alt="" />
                  </SearchImageContainer>
                )}
              </>
            )}
          </NoProductsContainer>
        )}
      </SearchContainer>
    </PageContainer>
  );
}

export default Busqueda;
