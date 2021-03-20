import { Link } from "react-router-dom";

import {
  ProductCardStyled,
  ImageCardContainerStyled,
  TextCardContainerStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
  AddProductStyled,
  AddIconStyled,
  RemoveIconStyled,
} from "./ProductCardElements";
import { useTheme } from "Context/Theme/ThemeContext";
import { useCart } from "Context/Cart/CartContext";
import { useState } from "react";

function ProductCard({ img, data }) {
  const [itemInCart, setItemInCart] = useState(null);

  const { theme } = useTheme();
  const {
    sumarProducto,
    restarProducto,
    agregarProducto,
    cartItems,
    eliminarProducto,
  } = useCart();

  const isInCart = (product) => {
    const isInCart = !!cartItems.find((item) => item.id === product.id);
    const itemInCart = isInCart
      ? cartItems.find((item) => item.id === product.id)
      : null;
    console.log({ itemInCart });
    return itemInCart;
  };

  return (
    <>
      <ProductCardStyled dark={theme}>
        <Link replace to="/product/1">
          <ImageCardContainerStyled>
            <img src={img} alt="" />
          </ImageCardContainerStyled>
          <TextCardContainerStyled dark={theme}>
            {data.nombre}
          </TextCardContainerStyled>
          <PriceCardStyled>
            <PriceCardIconStyled dark={theme} />
            <PriceCardTextStyled dark={theme}>
              {data.precio}
            </PriceCardTextStyled>
          </PriceCardStyled>
        </Link>

        {isInCart(data) && isInCart(data).quantity > 0 && (
          <AddProductStyled dark={theme}>
            <AddIconStyled onClick={() => sumarProducto(data)} />
            {isInCart(data).quantity}
            <RemoveIconStyled
              onClick={
                isInCart(data).quantity <= 1
                  ? () => eliminarProducto(data)
                  : () => restarProducto(data)
              }
            />
          </AddProductStyled>
        )}

        {(!isInCart(data) || isInCart(data).quantity < 1) && (
          <AddProductStyled dark={theme} onClick={() => agregarProducto(data)}>
            <p>Agregar</p>
          </AddProductStyled>
        )}
      </ProductCardStyled>
    </>
  );
}

export default ProductCard;
