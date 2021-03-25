import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PageContainer from "components/PageContainer/PageContainer";
import {
  ProductContainerStyled,
  ProductImageStyled,
  DescriptionTitle,
  TitleContainerStyled,
  HeartIconInactiveStyled,
  HeartIconActiveStyled,
  PriceAddContainerStyled,
  ProductPriceStyled,
  LineaDivisora,
  DescriptionTitleStyled,
} from "./ProductElements";
import {
  AddProductStyled,
  AddIconStyled,
  RemoveIconStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
} from "components/Pages/ProductCard/ProductCardElements";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import ProductAddMore from "components/Pages/ProductAddMore/ProductAddMore";
import { useTheme } from "Context/Theme/ThemeContext";
import { useProducts } from "Context/Products/ProductsContext";
import { useCart } from "Context/Cart/CartContext";
import { isInCart } from "utils/functions";

function Product() {
  const [isLike, setIsLike] = useState(false);
  const history = useHistory();

  const { theme } = useTheme();
  const { producto } = useProducts();

  const {
    sumarProducto,
    restarProducto,
    agregarProducto,
    cartItems,
    eliminarProducto,
  } = useCart();

  useEffect(() => {
    if (!producto) {
      history.push("/");
    }
  }, [history, producto]);

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
        <PriceAddContainerStyled>
          <ProductPriceStyled>
            <PriceCardIconStyled dark={theme} />
            <PriceCardTextStyled dark={theme}>
              {producto.precio.toFixed(2)}
            </PriceCardTextStyled>
          </ProductPriceStyled>
          {isInCart(producto, cartItems) &&
            isInCart(producto, cartItems).quantity > 0 && (
              <AddProductStyled dark={theme}>
                <AddIconStyled onClick={() => sumarProducto(producto)} />
                {isInCart(producto, cartItems).quantity}
                <RemoveIconStyled
                  onClick={
                    isInCart(producto, cartItems).quantity <= 1
                      ? () => eliminarProducto(producto)
                      : () => restarProducto(producto)
                  }
                />
              </AddProductStyled>
            )}

          {(!isInCart(producto, cartItems) ||
            isInCart(producto, cartItems).quantity < 1) && (
            <AddProductStyled
              dark={theme}
              onClick={() => agregarProducto(producto)}
            >
              <p>Agregar</p>
            </AddProductStyled>
          )}
        </PriceAddContainerStyled>
        <DescriptionTitle>Descripción:</DescriptionTitle>
        <DescriptionTitleStyled>{producto?.descripcion}</DescriptionTitleStyled>

        <LineaDivisora />

        {producto && <ProductAddMore producto={producto} />}
      </ProductContainerStyled>
    </PageContainer>
  );
}

export default Product;
