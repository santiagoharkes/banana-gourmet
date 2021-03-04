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

import BurgerIcon from "../../../img/burgerIcon.webp";
import PizzaIcon from "../../../img/pizzaIcon.webp";
import ChambucheIcon from "../../../img/sandwichIcon.webp";
import PizzaCard from "../../../img/pizzacard.webp";

function ProductContainer() {
  const { theme, ...state } = useTheme();
  return (
    <AllProductsStyled>
      <ProductsTitleContainerStyled>
        <ProductsTitleStyled theme={state.colors}>Menú</ProductsTitleStyled>
        <ProductsSeeAllStyled dark={theme} theme={state.colors}>
          <Link to="/garralapala">Ver todos</Link>
        </ProductsSeeAllStyled>
      </ProductsTitleContainerStyled>
      <CategoryListStyled>
        <CategoryBadgeStyled
          dark={theme}
          theme={state.colors}
          to="/garralapala"
        >
          <img src={BurgerIcon} alt="" />
          Burgers
        </CategoryBadgeStyled>

        <CategoryBadgeStyled
          dark={theme}
          theme={state.colors}
          active
          to="/garralapala"
        >
          <img src={PizzaIcon} alt="" />
          Pizzas
        </CategoryBadgeStyled>

        <CategoryBadgeStyled
          dark={theme}
          theme={state.colors}
          to="/garralapala"
        >
          <img src={ChambucheIcon} alt="" />
          Chambuchitos
        </CategoryBadgeStyled>

        <CategoryBadgeStyled
          dark={theme}
          theme={state.colors}
          to="/garralapala"
        >
          <BlockIcon />
          Category test
        </CategoryBadgeStyled>

        <CategoryBadgeStyled
          dark={theme}
          theme={state.colors}
          to="/garralapala"
        >
          <BlockIcon />
          Category test
        </CategoryBadgeStyled>

        <CategoryBadgeStyled
          dark={theme}
          theme={state.colors}
          to="/garralapala"
        >
          <BlockIcon />
          Category test
        </CategoryBadgeStyled>

        <CategoryBadgeStyled
          dark={theme}
          theme={state.colors}
          to="/garralapala"
        >
          <BlockIcon />
          Category test
        </CategoryBadgeStyled>
      </CategoryListStyled>

      <ProductsListStyled>
        <Link to="/garralapala">
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

        <Link to="/garralapala">
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

        <Link to="/garralapala">
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
