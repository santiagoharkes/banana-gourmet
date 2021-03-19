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

import { useTheme } from "Context/Theme/ThemeContext";

function ProductCard({ img, data }) {
  const { theme } = useTheme();
  return (
    <Link replace to="/product/1">
      <ProductCardStyled dark={theme}>
        <ImageCardContainerStyled>
          <img src={img} alt="" />
        </ImageCardContainerStyled>
        <TextCardContainerStyled dark={theme}>
          {data.nombre}
        </TextCardContainerStyled>
        <PriceCardStyled>
          <PriceCardIconStyled dark={theme} />
          <PriceCardTextStyled dark={theme}>{data.precio}</PriceCardTextStyled>
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
