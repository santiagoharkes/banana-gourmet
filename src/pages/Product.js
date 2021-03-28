import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import PageContainer from "components/PageContainer/PageContainer";
import {
  ProductContainerStyled,
  ProductImageStyled,
  DescriptionTitle,
  TitleContainerStyled,
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
import LikeButton from "components/LikeButton/LikeButton";
import { useTheme } from "Context/Theme/ThemeContext";
import { useProducts } from "Context/Products/ProductsContext";
import { useCart } from "Context/Cart/CartContext";
import { isInCart } from "utils/functions";
import { useAuth } from "Context/Auth/AuthContext";

function Product() {
  const history = useHistory();

  const { theme } = useTheme();
  const { producto } = useProducts();
  const { user } = useAuth();

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
          <LikeButton user={user} producto={producto} />
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
