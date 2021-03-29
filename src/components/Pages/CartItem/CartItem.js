import { useHistory } from "react-router-dom";

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
import { useProducts } from "Context/Products/ProductsContext";

function CartItem({ data: { img, nombre, precio, ...data } }) {
  const { theme } = useTheme();
  const { sumarProducto, restarProducto, eliminarProducto } = useCart();
  const { storeProducto } = useProducts();
  const history = useHistory();

  const pushObject = {
    img,
    nombre,
    precio,
    ...data,
  };

  const handleClick = () => {
    storeProducto(pushObject);
    history.replace("/product");
  };

  return (
    <CartItemStyled>
      <CloseIconStyled onClick={() => eliminarProducto(data)} />
      <ImageCardContainerStyled onClick={handleClick}>
        <img src={`${img[0].url}`} alt="" />
      </ImageCardContainerStyled>
      <TextContainer onClick={handleClick}>{nombre}</TextContainer>
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
