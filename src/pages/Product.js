import { useState } from "react";
import { ThemeProvider } from "styled-components";

import PageContainer from "components/PageContainer/PageContainer";
import {
  ProductContainerStyled,
  ProductImageStyled,
  DescriptionTitle,
  TitleContainerStyled,
  HeartIconInactiveStyled,
  HeartIconActiveStyled,
} from "./ProductElements";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import { useTheme } from "Context/Theme/ThemeContext";
import { useProducts } from "Context/Products/ProductsContext";

function Product() {
  const [isLike, setIsLike] = useState(false);

  const { theme, ...state } = useTheme();
  const { producto } = useProducts();

  const newTheme = {
    dark: theme,
    ...state.colors,
  };

  return (
    <ThemeProvider theme={newTheme}>
      <PageContainer theme={newTheme}>
        <ProductContainerStyled>
          <TitleContainerStyled>
            <HeaderTitle>{producto?.nombre}</HeaderTitle>
            {isLike ? (
              <HeartIconActiveStyled onClick={() => setIsLike(!isLike)} />
            ) : (
              <HeartIconInactiveStyled onClick={() => setIsLike(!isLike)} />
            )}
          </TitleContainerStyled>
          <ProductImageStyled>
            <img
              src={
                producto &&
                `${process.env.REACT_APP_API_ENDPOINT}${producto.img[0].url}`
              }
              alt=""
            />
          </ProductImageStyled>
          <DescriptionTitle>Descripción:</DescriptionTitle>
          <HeaderSubtitle>{producto?.descripcion}</HeaderSubtitle>
        </ProductContainerStyled>
      </PageContainer>
    </ThemeProvider>
  );
}

export default Product;
