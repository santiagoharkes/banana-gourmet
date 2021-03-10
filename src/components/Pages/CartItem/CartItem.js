import {
  CartItemStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
  ImageCardContainerStyled,
  AddProductStyled,
  AddIconStyled,
  RemoveIconStyled,
  PriceAddStyledContainer,
  TextContainer,
  CloseIconStyled,
} from "./CartItemElements";

import { useTheme } from "Context/ThemeContext";

function CartItem({ img, data: { title, price } }) {
  const { theme } = useTheme();
  return (
    <CartItemStyled>
      <CloseIconStyled />
      <ImageCardContainerStyled>
        <img src={img} alt="" />
      </ImageCardContainerStyled>
      <TextContainer>{title}</TextContainer>
      <PriceAddStyledContainer>
        <PriceCardStyled>
          <PriceCardIconStyled dark={theme} />
          <PriceCardTextStyled dark={theme}>{price}</PriceCardTextStyled>
        </PriceCardStyled>
        <AddProductStyled dark={theme}>
          <AddIconStyled />
          1
          <RemoveIconStyled />
        </AddProductStyled>
      </PriceAddStyledContainer>
    </CartItemStyled>
  );
}

export default CartItem;
