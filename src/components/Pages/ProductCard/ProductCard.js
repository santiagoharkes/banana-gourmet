import { useHistory } from "react-router-dom";

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
import { useProducts } from "Context/Products/ProductsContext";
import { useTheme } from "Context/Theme/ThemeContext";
import { useCart } from "Context/Cart/CartContext";
import { isInCart } from "utils/functions";

function ProductCard({ img, data }) {
  const { theme } = useTheme();

  const {
    sumarProducto,
    restarProducto,
    agregarProducto,
    cartItems,
    eliminarProducto,
  } = useCart();

  const { storeProducto } = useProducts();

  const history = useHistory();

  const handleClick = () => {
    storeProducto(data);
    history.push("/product/1");
  };

  return (
    <>
      <ProductCardStyled dark={theme}>
        <div onClick={handleClick}>
          <ImageCardContainerStyled>
            <img src={img} alt="" />
          </ImageCardContainerStyled>
          <TextCardContainerStyled dark={theme}>
            {data.nombre}
          </TextCardContainerStyled>
          <PriceCardStyled>
            <PriceCardIconStyled dark={theme} />
            <PriceCardTextStyled dark={theme}>
              {data.precio.toFixed(2)}
            </PriceCardTextStyled>
          </PriceCardStyled>
        </div>

        {isInCart(data, cartItems) && isInCart(data, cartItems).quantity > 0 && (
          <AddProductStyled dark={theme}>
            <AddIconStyled onClick={() => sumarProducto(data)} />
            {isInCart(data, cartItems).quantity}
            <RemoveIconStyled
              onClick={
                isInCart(data, cartItems).quantity <= 1
                  ? () => eliminarProducto(data)
                  : () => restarProducto(data)
              }
            />
          </AddProductStyled>
        )}

        {(!isInCart(data, cartItems) ||
          isInCart(data, cartItems).quantity < 1) && (
          <AddProductStyled dark={theme} onClick={() => agregarProducto(data)}>
            <p>Agregar</p>
          </AddProductStyled>
        )}
      </ProductCardStyled>
    </>
  );
}

export default ProductCard;
