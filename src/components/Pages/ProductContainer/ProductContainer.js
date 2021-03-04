import {
  AllProductsStyled,
  ProductsTitleContainerStyled,
  ProductsTitleStyled,
  ProductsSeeAllStyled,
  CategoryListStyled,
  CategoryBadgeStyled,
  ProductsListStyled,
} from "./ProductContainerElements";

import { Link } from "react-router-dom";

import BlockIcon from "@material-ui/icons/Block";

import { useTheme } from "Context/ThemeContext";

import BurgerIcon from "../../../img/burgerIcon.webp";
import PizzaIcon from "../../../img/pizzaIcon.webp";
import ChambucheIcon from "../../../img/sandwichIcon.webp";
import PizzaCard from "../../../img/pizzacard.webp";

import ProductCard from "../ProductCard/ProductCard";

function ProductContainer() {
  const { theme } = useTheme();
  return (
    <AllProductsStyled>
      <ProductsTitleContainerStyled>
        <ProductsTitleStyled>Menú</ProductsTitleStyled>
        <ProductsSeeAllStyled dark={theme}>
          <Link to="/garralapala">Ver todos</Link>
        </ProductsSeeAllStyled>
      </ProductsTitleContainerStyled>
      <CategoryListStyled>
        <CategoryBadgeStyled dark={theme} to="/garralapala">
          <img src={BurgerIcon} alt="" />
          Burgers
        </CategoryBadgeStyled>

        <CategoryBadgeStyled dark={theme} active to="/garralapala">
          <img src={PizzaIcon} alt="" />
          Pizzas
        </CategoryBadgeStyled>

        <CategoryBadgeStyled dark={theme} to="/garralapala">
          <img src={ChambucheIcon} alt="" />
          Chambuchitos
        </CategoryBadgeStyled>

        <CategoryBadgeStyled dark={theme} to="/garralapala">
          <BlockIcon />
          Category test
        </CategoryBadgeStyled>

        <CategoryBadgeStyled dark={theme} to="/garralapala">
          <BlockIcon />
          Category test
        </CategoryBadgeStyled>

        <CategoryBadgeStyled dark={theme} to="/garralapala">
          <BlockIcon />
          Category test
        </CategoryBadgeStyled>

        <CategoryBadgeStyled dark={theme} to="/garralapala">
          <BlockIcon />
          Category test
        </CategoryBadgeStyled>
      </CategoryListStyled>

      <ProductsListStyled>
        <ProductCard img={PizzaCard} />

        <ProductCard img={PizzaCard} />

        <ProductCard img={PizzaCard} />
      </ProductsListStyled>
    </AllProductsStyled>
  );
}

export default ProductContainer;
