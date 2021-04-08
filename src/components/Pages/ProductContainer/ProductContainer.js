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

function ProductContainer({ productos, categorias }) {
  const { theme } = useTheme();
  const { storeCategories, categoria } = useProducts();

  // const handleCategoryClick = (categoria) => {
  //   storeCategories(categoria);
  // };

  return (
    <AllProductsStyled>
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
            onClick={() => storeCategories(valor)}
            active={categoria?.nombre === valor.nombre ? true : null}
          >
            <img src={`${valor.img.url}`} alt="" />
            {valor.nombre}
          </CategoryBadgeStyled>
        ))}
      </CategoryListStyled>

      {categoria ? (
        <>
          <CategorieTitleStyled>{categoria.nombre}</CategorieTitleStyled>
          <ProductsListStyled>
            {categoria.productos.map((producto) => (
              <ProductCard
                key={producto._id}
                img={`${producto.img[0].url}`}
                data={producto}
              />
            ))}
          </ProductsListStyled>
        </>
      ) : (
        categorias?.data.map((categoria) => (
          <>
            <CategorieTitleStyled>{categoria.nombre}</CategorieTitleStyled>
            <ProductsListStyled>
              {categoria.productos.map((producto) => (
                <ProductCard
                  key={producto._id}
                  img={`${producto.img[0].url}`}
                  data={producto}
                />
              ))}
            </ProductsListStyled>
          </>
        ))
      )}
    </AllProductsStyled>
  );
}

export default ProductContainer;
