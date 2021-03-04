import {
  ProductCardStyled,
  ImageCardContainerStyled,
  TextCardContainerStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
  AddProductStyled,
  // AddIconStyled,
  // RemoveIconStyled,
} from "./ProductCardElements";

import { Link } from "react-router-dom";

import { useTheme } from "Context/ThemeContext";

function ProductCard({ img }) {
  const { theme } = useTheme();
  return (
    <Link to="/garralapala">
      <ProductCardStyled dark={theme}>
        <ImageCardContainerStyled>
          <img src={img} alt="" />
        </ImageCardContainerStyled>
        <TextCardContainerStyled dark={theme}>
          Pizza Tranca
        </TextCardContainerStyled>
        <PriceCardStyled>
          <PriceCardIconStyled dark={theme} />
          <PriceCardTextStyled dark={theme}>159,99</PriceCardTextStyled>
        </PriceCardStyled>
        <AddProductStyled dark={theme}>
          <p>Agregar</p>
        </AddProductStyled>
        {/* <AddProductStyled dark={theme}>
          <AddIconStyled />
          1
          <RemoveIconStyled />
        </AddProductStyled> */}
      </ProductCardStyled>
    </Link>
  );
}

export default ProductCard;
