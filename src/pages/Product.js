import { useState } from "react";

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

  const { theme } = useTheme();
  const { producto } = useProducts();

  return (
    <PageContainer>
      <ProductContainerStyled>
        <TitleContainerStyled>
          <HeaderTitle>{producto?.nombre}</HeaderTitle>
          {isLike ? (
            <HeartIconActiveStyled
              dark={theme}
              onClick={() => setIsLike(!isLike)}
            />
          ) : (
            <HeartIconInactiveStyled
              dark={theme}
              onClick={() => setIsLike(!isLike)}
            />
          )}
        </TitleContainerStyled>
        <ProductImageStyled>
          <img src={producto && `${producto.img[0].url}`} alt="" />
        </ProductImageStyled>
        <DescriptionTitle>Descripción:</DescriptionTitle>
        <HeaderSubtitle>{producto?.descripcion}</HeaderSubtitle>
      </ProductContainerStyled>
    </PageContainer>
  );
}

export default Product;
