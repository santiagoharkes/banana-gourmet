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
        {categorias?.data.map(({ nombre, img }) => (
          <CategoryBadgeStyled
            dark={theme}
            onClick={() => storeCategories(nombre)}
            active={categoria === nombre ? true : null}
          >
            <img src={`${img.url}`} alt="" />
            {nombre}
          </CategoryBadgeStyled>
        ))}
      </CategoryListStyled>

      <ProductsListStyled>
        {categoria
          ? productos?.data
              .filter((producto) => producto.categoria.nombre === categoria)
              .map((producto) => (
                <ProductCard
                  img={`${process.env.REACT_APP_API_ENDPOINT}${producto.img[0].url}`}
                  data={producto}
                />
              ))
          : productos?.data.map((producto) => (
              <ProductCard img={`${producto.img[0].url}`} data={producto} />
            ))}
      </ProductsListStyled>
    </AllProductsStyled>
  );
}

export default ProductContainer;
