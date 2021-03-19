import { ThemeProvider } from "styled-components";

import PageContainer from "components/PageContainer/PageContainer";
import { ProductContainerStyled, ProductImageStyled } from "./ProductElements";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import { useTheme } from "Context/Theme/ThemeContext";

import PizzaTranqui from "../img/pizzaTranqui.webp";

function Product() {
  const { theme, ...state } = useTheme();
  return (
    <ThemeProvider theme={state.colors}>
      <PageContainer theme={state.colors}>
        <ProductContainerStyled>
          <HeaderTitle>Pizza Tranqui</HeaderTitle>
          <HeaderSubtitle>Una pizza normalita pa salir del paso</HeaderSubtitle>
          <ProductImageStyled>
            <img src={PizzaTranqui} alt="" />
          </ProductImageStyled>
        </ProductContainerStyled>
      </PageContainer>
    </ThemeProvider>
  );
}

export default Product;
