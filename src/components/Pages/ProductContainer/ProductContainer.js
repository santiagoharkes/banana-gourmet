import {
  AllProductsStyled,
  ProductsTitleContainerStyled,
  ProductsTitleStyled,
  ProductsSeeAllStyled,
  CategoryListStyled,
  CategoryBadgeStyled,
  ProductsListStyled,
  CategorieTitleStyled,
} from "./ProductContainerElements";

// import BlockIcon from "@material-ui/icons/Block";

import { useTheme } from "Context/Theme/ThemeContext";
import { useProducts } from "Context/Products/ProductsContext";

import ProductCard from "../ProductCard/ProductCard";
import { useRef } from "react";

function ProductContainer({ productos, categorias }) {
  const { theme } = useTheme();
  const { storeCategories, categoria } = useProducts();
  const scrollRef = useRef();

  // const handleCategoryClick = (categoria) => {
  //   storeCategories(categoria);
  // };

  const onCategoryBadgeClick = (valor) => {
    storeCategories(valor);
    scrollRef.current.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  };

  return (
    <AllProductsStyled>
      <div ref={scrollRef}></div>
      <ProductsTitleContainerStyled>
        <ProductsTitleStyled>Menú</ProductsTitleStyled>
        <ProductsSeeAllStyled
          dark={theme}
          onClick={() => storeCategories(null)}
        >
          Ver todos
        </ProductsSeeAllStyled>
      </ProductsTitleContainerStyled>
      <CategoryListStyled>
        {categorias?.data.map((valor) => (
          <CategoryBadgeStyled
            key={valor._id}
            dark={theme}
            onClick={() => onCategoryBadgeClick(valor)}
            active={categoria?.nombre === valor.nombre ? true : null}
          >
            <img src={`${valor.img.url}`} alt="" />
            {valor.nombre}
          </CategoryBadgeStyled>
        ))}
      </CategoryListStyled>

      {categoria ? (
        <div key={categoria._id}>
          <CategorieTitleStyled key={categoria._id}>
            {categoria.nombre}
          </CategorieTitleStyled>

          <ProductsListStyled>
            {productos?.data
              .filter((valor) => valor.categoria._id === categoria._id)
              .map((producto) => (
                <ProductCard
                  key={producto._id}
                  img={`${producto.img[0].url}`}
                  data={producto}
                />
              ))}
          </ProductsListStyled>
        </div>
      ) : (
        categorias?.data.map((categoria) => (
          <div key={categoria._id}>
            <CategorieTitleStyled key={categoria._id}>
              {categoria.nombre}
            </CategorieTitleStyled>

            <ProductsListStyled>
              {productos?.data
                .filter((valor) => valor.categoria._id === categoria._id)
                .map((producto) => (
                  <ProductCard
                    key={producto._id}
                    img={`${producto.img[0].url}`}
                    data={producto}
                  />
                ))}
            </ProductsListStyled>
          </div>
        ))
      )}
    </AllProductsStyled>
  );
}

export default ProductContainer;
