import { ThemeProvider } from "styled-components";

import PageContainer from "components/PageContainer/PageContainer";
import { ProductContainerStyled, ProductImageStyled } from "./ProductElements";
import { useTheme } from "Context/ThemeContext";

import PizzaImage from "../img/pizzacard.webp";

function Product() {
  const { theme, ...state } = useTheme();
  return (
    <ThemeProvider theme={state.colors}>
      <PageContainer theme={state.colors}>
        <ProductContainerStyled>
          <ProductImageStyled>
            <img src={PizzaImage} alt="" />
          </ProductImageStyled>
        </ProductContainerStyled>
      </PageContainer>
    </ThemeProvider>
  );
}

export default Product;
