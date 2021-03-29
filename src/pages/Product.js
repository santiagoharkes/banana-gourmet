import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

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

SwiperCore.use([Navigation, Pagination]);

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
    if (!producto || producto === null) {
      history.push("/");
    }
  }, [history, producto]);

  console.log(producto);

  return (
    <PageContainer>
      {producto && (
        <ProductContainerStyled>
          <TitleContainerStyled>
            <HeaderTitle>{producto?.nombre}</HeaderTitle>
            <LikeButton user={user} producto={producto} />
          </TitleContainerStyled>
          {producto.img.length > 1 ? (
            <Swiper
              spaceBetween={20}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              loop={true}
            >
              {producto?.img?.map((valor) => (
                <SwiperSlide>
                  <ProductImageStyled>
                    <img src={`${valor.url}`} alt="" />
                  </ProductImageStyled>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <ProductImageStyled>
              <img src={`${producto.img[0].url}`} alt="" />
            </ProductImageStyled>
          )}
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
          <DescriptionTitleStyled>
            {producto?.descripcion}
          </DescriptionTitleStyled>

          <LineaDivisora />

          {producto && <ProductAddMore producto={producto} />}
        </ProductContainerStyled>
      )}
    </PageContainer>
  );
}

export default Product;
