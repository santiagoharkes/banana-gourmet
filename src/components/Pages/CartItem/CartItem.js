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
import { useCart } from "Context/Cart/CartContext";

import { useTheme } from "Context/Theme/ThemeContext";

function CartItem({ data: { img, nombre, precio, ...data } }) {
  const { theme } = useTheme();
  const { sumarProducto, restarProducto, eliminarProducto } = useCart();

  return (
    <CartItemStyled>
      <CloseIconStyled onClick={() => eliminarProducto(data)} />
      <ImageCardContainerStyled>
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}${img[0].url}`}
          alt=""
        />
      </ImageCardContainerStyled>
      <TextContainer>{nombre}</TextContainer>
      <PriceAddStyledContainer>
        <PriceCardStyled>
          <PriceCardIconStyled dark={theme} />
          <PriceCardTextStyled dark={theme}>{precio}</PriceCardTextStyled>
        </PriceCardStyled>
        <AddProductStyled dark={theme}>
          <AddIconStyled onClick={() => sumarProducto(data)} />
          {data.quantity}
          <RemoveIconStyled
            onClick={
              data.quantity <= 1
                ? () => eliminarProducto(data)
                : () => restarProducto(data)
            }
          />
        </AddProductStyled>
      </PriceAddStyledContainer>
    </CartItemStyled>
  );
}

export default CartItem;
