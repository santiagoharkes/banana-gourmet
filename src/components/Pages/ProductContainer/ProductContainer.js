import { useState } from "react";

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

import ProductCard from "../ProductCard/ProductCard";

function ProductContainer({ productos, categorias }) {
  const { theme } = useTheme();

  const [categoryName, setCategoryName] = useState(null);

  const handleCategoryClick = (categoria) => {
    setCategoryName(categoria);
  };

  return (
    <AllProductsStyled>
      <ProductsTitleContainerStyled>
        <ProductsTitleStyled>Menú</ProductsTitleStyled>
        <ProductsSeeAllStyled
          dark={theme}
          onClick={() => setCategoryName(null)}
        >
          Ver todos
        </ProductsSeeAllStyled>
      </ProductsTitleContainerStyled>
      <CategoryListStyled>
        {categorias?.data.map(({ nombre, img }) => (
          <CategoryBadgeStyled
            dark={theme}
            onClick={() => handleCategoryClick(nombre)}
            active={categoryName === nombre ? true : null}
          >
            <img
              src={`${process.env.REACT_APP_API_ENDPOINT}${img.url}`}
              alt=""
            />
            {nombre}
          </CategoryBadgeStyled>
        ))}
      </CategoryListStyled>

      <ProductsListStyled>
        {categoryName
          ? productos?.data
              .filter((producto) => producto.categoria.nombre === categoryName)
              .map((producto) => (
                <ProductCard
                  img={`${process.env.REACT_APP_API_ENDPOINT}${producto.img[0].url}`}
                  data={producto}
                />
              ))
          : productos?.data.map((producto) => (
              <ProductCard
                img={`${process.env.REACT_APP_API_ENDPOINT}${producto.img[0].url}`}
                data={producto}
              />
            ))}
      </ProductsListStyled>
    </AllProductsStyled>
  );
}

export default ProductContainer;
