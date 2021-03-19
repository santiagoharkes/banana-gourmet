import { useState } from "react";
import { useQuery } from "react-query";

import {
  AllProductsStyled,
  ProductsTitleContainerStyled,
  ProductsTitleStyled,
  ProductsSeeAllStyled,
  CategoryListStyled,
  CategoryBadgeStyled,
  ProductsListStyled,
} from "./ProductContainerElements";

// import BlockIcon from "@material-ui/icons/Block";

import { useTheme } from "Context/Theme/ThemeContext";
// import { useAxios } from "../../../hooks/useAxios";

import ProductCard from "../ProductCard/ProductCard";

function ProductContainer() {
  const { theme } = useTheme();
  // const axios = useAxios();

  // const fetchProducts = async () => {
  //   const res = await axios.get("/productos");
  //   return res.json();
  // };

  // const fetchCategories = async () => {
  //   const res = await axios.get("/categorias");
  //   return res.json();
  // };

  // const {
  //   data: productos,
  //   isLoading: productsLoading,
  //   isError: productsError,
  // } = useQuery("products", fetchProducts);

  // const {
  //   data: categorias,
  //   isLoading: categoriesLoading,
  //   isError: categoriesError,
  // } = useQuery("categories", fetchCategories);

  // console.log({ productos });
  // console.log({ categorias });

  const [categoryName, setCategoryName] = useState("");

  const handleCategoryClick = (categoria) => {
    setCategoryName(categoria);
  };

  return (
    <AllProductsStyled>
      <ProductsTitleContainerStyled>
        <ProductsTitleStyled>Menú</ProductsTitleStyled>
        <ProductsSeeAllStyled
          dark={theme}
          onClick={() => setCategoryName("Todos")}
        >
          Ver todos
        </ProductsSeeAllStyled>
      </ProductsTitleContainerStyled>
      {/* <CategoryListStyled>
        {categorias.map(({ nombre, img }) => (
          <CategoryBadgeStyled
            dark={theme}
            onClick={() => handleCategoryClick(nombre)}
            active={categoryName === nombre ? true : null}
          >
            <img src={img.url} alt="" />
            {nombre}
          </CategoryBadgeStyled>
        ))}
      </CategoryListStyled>

      <ProductsListStyled>
        {productos.map((producto) => (
          <ProductCard img={producto.img} />
        ))}
      </ProductsListStyled> */}
      <CategoryListStyled>
        <CategoryBadgeStyled
          dark={theme}
          onClick={() => handleCategoryClick("dfdsfsdfdsf")}
        >
          <img src="" alt="" />
          fgdfgdfgdfg
        </CategoryBadgeStyled>
      </CategoryListStyled>

      <ProductsListStyled>
        <ProductCard img="" />
      </ProductsListStyled>
    </AllProductsStyled>
  );
}

export default ProductContainer;
