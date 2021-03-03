import {
  AllProductsStyled,
  ProductsTitleContainerStyled,
  ProductsTitleStyled,
  ProductsSeeAllStyled,
  CategoryListStyled,
  CategoryBadgeStyled,
  ProductsListStyled,
  ProductCardStyled,
  ImageCardContainerStyled,
  TextCardContainerStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
  AddProductStyled,
  AddIconStyled,
  RemoveIconStyled,
} from "./ProductContainerElements";

import { Link } from "react-router-dom";

import BlockIcon from "@material-ui/icons/Block";

import { useTheme } from "Context/ThemeContext";

import BurgerIcon from "../../../img/burgerIcon.png";
import PizzaIcon from "../../../img/pizzaIcon.jpg";
import ChambucheIcon from "../../../img/sandwichIcon.png";
import PizzaCard from "../../../img/pizzacard.jpg";

function ProductContainer() {
  const { theme, ...state } = useTheme();
  return (
    <AllProductsStyled>
      <ProductsTitleContainerStyled>
        <ProductsTitleStyled theme={state.colors}>Menú</ProductsTitleStyled>
        <ProductsSeeAllStyled dark={theme} theme={state.colors}>
          <Link to="/pelotudo">Ver todos</Link>
        </ProductsSeeAllStyled>
      </ProductsTitleContainerStyled>
      <CategoryListStyled>
        <Link to="/pelotudo">
          <CategoryBadgeStyled dark={theme} theme={state.colors}>
            <img src={BurgerIcon} alt="" />
            Burgers
          </CategoryBadgeStyled>
        </Link>
        <Link to="/pelotudo">
          <CategoryBadgeStyled dark={theme} theme={state.colors} active>
            <img src={PizzaIcon} alt="" />
            Pizzas
          </CategoryBadgeStyled>
        </Link>
        <Link to="/pelotudo">
          <CategoryBadgeStyled dark={theme} theme={state.colors}>
            <img src={ChambucheIcon} alt="" />
            Chambuchitos
          </CategoryBadgeStyled>
        </Link>
        <Link to="/pelotudo">
          <CategoryBadgeStyled dark={theme} theme={state.colors}>
            <BlockIcon />
            Chambuchitos
          </CategoryBadgeStyled>
        </Link>
        <Link to="/pelotudo">
          <CategoryBadgeStyled dark={theme} theme={state.colors}>
            <BlockIcon />
            Chambuchitos
          </CategoryBadgeStyled>
        </Link>
        <Link to="/pelotudo">
          <CategoryBadgeStyled dark={theme} theme={state.colors}>
            <BlockIcon />
            Chambuchitos
          </CategoryBadgeStyled>
        </Link>
        <Link to="/pelotudo">
          <CategoryBadgeStyled dark={theme} theme={state.colors}>
            <BlockIcon />
            Chambuchitos
          </CategoryBadgeStyled>
        </Link>
      </CategoryListStyled>

      <ProductsListStyled>
        <Link to="/pelotudo">
          <ProductCardStyled dark={theme} theme={state.colors}>
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
            <AddProductStyled dark={theme} theme={state.colors}>
              <p>Agregar</p>
            </AddProductStyled>
          </ProductCardStyled>
        </Link>

        <Link to="/pelotudo">
          <ProductCardStyled dark={theme} theme={state.colors}>
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
            <AddProductStyled dark={theme} theme={state.colors}>
              <AddIconStyled />
              1
              <RemoveIconStyled />
            </AddProductStyled>
          </ProductCardStyled>
        </Link>

        <Link to="/pelotudo">
          <ProductCardStyled dark={theme} theme={state.colors}>
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
            <AddProductStyled dark={theme} theme={state.colors}>
              <p>Agregar</p>
            </AddProductStyled>
          </ProductCardStyled>
        </Link>
      </ProductsListStyled>
    </AllProductsStyled>
  );
}

export default ProductContainer;
