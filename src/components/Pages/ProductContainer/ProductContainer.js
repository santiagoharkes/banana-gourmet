import {
  ProductsTitleContainerStyled,
  ProductsTitleStyled,
  ProductsSeeAllStyled,
  CategoryListStyled,
  CategoryBadgeStyled,
  ProductsListStyled,
  ProductCartStyled,
  ImageCardContainerStyled,
  TextCardContainerStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
} from "./ProductContainerElements";

import ScrollContainer from "react-indiana-drag-scroll";

import { useTheme } from "Context/ThemeContext";

import BurgerIcon from "../../../img/burgerIcon.png";
import PizzaIcon from "../../../img/pizzaIcon.jpg";
import ChambucheIcon from "../../../img/sandwichIcon.png";
import PizzaCard from "../../../img/pizzacard.jpg";

function ProductContainer() {
  const { theme, ...state } = useTheme();
  return (
    <div>
      <ProductsTitleContainerStyled>
        <ProductsTitleStyled theme={state.colors}>Menú</ProductsTitleStyled>
        <ProductsSeeAllStyled dark={theme} theme={state.colors}>
          Ver todos
        </ProductsSeeAllStyled>
      </ProductsTitleContainerStyled>
      <CategoryListStyled>
        <CategoryBadgeStyled dark={theme} theme={state.colors}>
          <img src={BurgerIcon} alt="" />
          Burgers
        </CategoryBadgeStyled>
        <CategoryBadgeStyled dark={theme} theme={state.colors} active>
          <img src={PizzaIcon} alt="" />
          Pizzas
        </CategoryBadgeStyled>
        <CategoryBadgeStyled dark={theme} theme={state.colors}>
          <img src={ChambucheIcon} alt="" />
          Chambuchitos
        </CategoryBadgeStyled>
        <CategoryBadgeStyled dark={theme} theme={state.colors}>
          <img src={ChambucheIcon} alt="" />
          Chambuchitos
        </CategoryBadgeStyled>
        <CategoryBadgeStyled dark={theme} theme={state.colors}>
          <img src={ChambucheIcon} alt="" />
          Chambuchitos
        </CategoryBadgeStyled>
        <CategoryBadgeStyled dark={theme} theme={state.colors}>
          <img src={ChambucheIcon} alt="" />
          Chambuchitos
        </CategoryBadgeStyled>
        <CategoryBadgeStyled dark={theme} theme={state.colors}>
          <img src={ChambucheIcon} alt="" />
          Chambuchitos
        </CategoryBadgeStyled>
      </CategoryListStyled>

      <ProductsListStyled>
        <ProductCartStyled dark={theme} theme={state.colors}>
          <ImageCardContainerStyled>
            <img src={PizzaCard} alt="" />
          </ImageCardContainerStyled>
          <TextCardContainerStyled dark={theme} theme={state.colors}>
            Pizza Tranca
          </TextCardContainerStyled>
          <PriceCardStyled>
            <PriceCardIconStyled dark={theme} theme={state.colors} />
            <PriceCardTextStyled dark={theme} theme={state.colors}>
              159,99
            </PriceCardTextStyled>
          </PriceCardStyled>
        </ProductCartStyled>
      </ProductsListStyled>
    </div>
  );
}

export default ProductContainer;
